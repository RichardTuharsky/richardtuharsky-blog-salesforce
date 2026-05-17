export const prerender = false;

import type { APIRoute } from 'astro';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
    const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error('Missing EMAILOCTOPUS_API_KEY or EMAILOCTOPUS_LIST_ID');
      return json({ error: 'Server configuration error.' }, 500);
    }

    let body: { email?: string; firstName?: string; website?: string };
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid request.' }, 400);
    }

    const { email, firstName, website } = body;

    // Honeypot — silently succeed so bots think they subscribed
    if (website) {
      return json({ success: true });
    }

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return json({ error: 'Please enter a valid email address.' }, 400);
    }

    const res = await fetch(
      `https://api.emailoctopus.com/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email.trim().toLowerCase(),
          fields: {
            FirstName: firstName?.trim() ?? '',
            Source: 'newsletter-page',
          },
          status: 'subscribed',
        }),
      }
    );

    // Read as text first — EmailOctopus may return non-JSON on some errors
    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      console.error('EmailOctopus non-JSON response:', res.status, text.slice(0, 200));
      return json({ error: 'Something went wrong. Please try again.' }, 500);
    }

    if (res.ok) {
      return json({ success: true });
    }

    if (data?.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return json({ success: true, alreadySubscribed: true });
    }

    console.error('EmailOctopus error:', res.status, JSON.stringify(data));
    return json({ error: 'Something went wrong. Please try again.' }, 500);

  } catch (err) {
    console.error('Unhandled subscribe error:', err);
    return json({ error: 'Something went wrong. Please try again.' }, 500);
  }
};

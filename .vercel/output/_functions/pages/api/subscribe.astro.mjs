export { renderers } from '../../renderers.mjs';

const prerender = false;
const API_KEY = "eo_0bb7d0869496dd3cd5b3e18cdc16c42889b0ff61058892421b1e0ef2bd07b832";
const LIST_ID = "1224feb2-513d-11f1-80e9-8fefb2580109";
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "Content-Type": "application/json" }
});
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const { email, firstName, website } = body;
  if (website) {
    return json({ success: true });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return json({ error: "Please enter a valid email address." }, 400);
  }
  try {
    const res = await fetch(
      `https://api.emailoctopus.com/lists/${LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          email_address: email.trim().toLowerCase(),
          fields: {
            FirstName: firstName?.trim() ?? "",
            Source: "newsletter-page"
          },
          status: "subscribed"
        })
      }
    );
    const data = await res.json();
    if (res.ok) {
      return json({ success: true });
    }
    if (data?.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return json({ success: true, alreadySubscribed: true });
    }
    console.error("EmailOctopus error:", data);
    return json({ error: "Something went wrong. Please try again." }, 500);
  } catch (err) {
    console.error("Subscribe fetch error:", err);
    return json({ error: "Network error. Please try again." }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

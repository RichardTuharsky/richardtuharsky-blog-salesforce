---
title: "Your deal stages are named after your feelings"
summary: "HubSpot lets anyone create a deal stage in thirty seconds and paywalls the field where you write down what it means. Here is what that does to a portal, and what I built instead."
date: 2026-08-10
tags: [hubspot]
---

Open almost any HubSpot portal that has been running for a year and look at the deal pipeline. You will usually find something like this:

Qualified. Discovery. Negotiation. Contract.

None of those describe anything you can verify. They describe a mood. Two reps looking at the same deal will put it in different stages, both will be sure they are right, and neither is checkable. Then someone runs a forecast off that pipeline and it is wrong, and nobody can explain why.

I built my own pipeline this week and found part of the reason portals end up like this.

## The field that would have fixed it is paywalled

HubSpot lets you create a deal stage in about thirty seconds. Type a name, pick a colour, set a probability, save. What you cannot do on the free tier is write down what the stage means. The stage description field sits above free, so the one place designed for recording exit criteria is not available to the person most likely to be setting up a pipeline for the first time.

So they type a name and move on. Two years later the pipeline has nine stages, three of them are never used, and nobody can say what has to be true for a deal to leave any of them.

The tool makes the mistake easy and makes documenting it a paid feature.

## What I built instead

Five stages, with the exit criterion written into the stage name itself:

- **Enquiry** — replied, tier known
- **Call held** — problem named
- **Proposal sent** — scope and price in writing
- **Closed Won**
- **Closed Lost**

Not elegant. The labels truncate in the board view. But a stage that carries its own exit criterion cannot quietly drift into meaning whatever the person moving the deal wants it to mean.

Two rules on top of it:

Closed Lost always carries a reason. A lost deal with no recorded reason is not a lost deal, it is a data defect, and a column full of them tells you nothing about why you are losing.

Nothing moves backwards. If a dead deal comes back, it is a new deal. Otherwise time-in-stage becomes meaningless and every velocity report built on it is fiction.

## The part I got wrong

I renamed HubSpot's default stages rather than building the pipeline from scratch. The labels updated. The internal stage IDs did not, and cannot.

My "Enquiry" stage is internally `appointmentscheduled`. "Call held" is `qualifiedtobuy`. Anything reading this pipeline through the API — an integration, a reporting tool, a future migration — sees the original names, not mine. That is permanent.

It costs me nothing today because nothing is integrated yet. In a portal with a Salesforce sync or a BI tool attached, the same shortcut produces a mapping document that has to explain why every field is named after something it is not.

Which is the more general point. Most of what goes wrong in a CRM is not a bad decision. It is a fast decision, made in a settings screen that gave no indication it was permanent, by someone who had no reason to think they were choosing anything at all.

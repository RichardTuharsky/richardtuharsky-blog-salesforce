---
title: "HubSpot Starter implementation case study: CRM setup"
summary: "An independent HubSpot CRM setup project: sales and renewal pipelines, custom properties, data imports and follow-up views for a fictional services group."
date: 2026-09-06
tags: [hubspot]
authors: [default]
canonicalUrl: "https://richardtuharsky.com/notes/hubspot-starter-implementation-case-study"
---

**Independent portfolio project.** I built this HubSpot Starter implementation in my own practice portal using synthetic data and a fictional business scenario. It was not a client engagement.

I wanted to work through a practical CRM setup question: how do you organise sales, renewals and customer follow-up for a business with several service divisions?

The scenario covered Cleaning, Compliance, Eco and Lux. I configured the core records, deal pipelines and operational views, then imported sample data and checked the associated line items. This case study covers that completed work and the limits of the testing.

## HubSpot CRM setup for a multi-division business

The starting point was the record structure. Companies and contacts held the customer information. Deals held the commercial opportunities, with properties including Business Unit, Deal type and Solution Fit to describe the work being sold.

That distinction mattered in this scenario: the customer and the opportunity are different things to track. A deal needs its own stage and next action, even when the company already has an established relationship with the business.

The build also included a ticket pipeline and Project configuration for onboarding, including Project Health and Target Go Live. Those gave the practice setup separate places to track support and delivery information. An automated sales-to-delivery handoff was not part of the verified work.

## HubSpot pipeline setup: new business and renewals

I configured two deal pipelines: **New Business** and **Renewals**, including their stage order and probabilities.

New sales and renewals were treated as distinct commercial processes. Keeping them in separate pipelines made it possible to inspect renewal opportunities without mixing them into the new-business board.

I also configured conditional stage properties and a required **Next step** field. The purpose was straightforward: a stage should be accompanied by useful information about what happens next.

This is an account of the configuration in my practice portal. It is not a guarantee that every HubSpot Starter account exposes the same options; a new implementation needs its own subscription and feature check.

## Saved views for follow-up and renewal tracking

A pipeline shows where an opportunity sits. A useful work queue shows which records need attention.

I created these saved views:

| Saved view | What it surfaced |
| --- | --- |
| Deals without next step | Opportunities missing a recorded next action |
| Customers without account manager | Customer records missing an account manager |
| Renewals due in 120 days | Records approaching the renewal review window |

I also checked the **Overdue** and **Due today** task views.

These were manual operational controls. Someone still needs to open the view, review the record and take action. The renewal view did not automatically create renewal deals or send reminders.

For this project, the value of the views was making exceptions visible in a consistent place. I did not measure a reduction in missed follow-ups or an improvement in renewal rates.

## HubSpot data imports and deal line items

I imported companies, contacts and deals into the configured CRM, then imported line items using the relevant deal record IDs. I reviewed the imported records and confirmed that the line items appeared on the intended deals.

The distinction between a product and a line item became concrete here. Product Library items describe the catalogue; line items represent the commercial detail attached to an individual deal. The association is what makes that detail useful on the opportunity record.

This part of the build exercised **HubSpot data import**, record identifiers and deal associations using synthetic records. It did not involve migrating a live client database or connecting an external system.

## What I checked, and what remains unverified

The clearest completed checks were the imports and the presence of the associated line items on the deals. I also reviewed the operational views during configuration.

End-to-end testing was started, but parts of testing and dashboard review were skipped before I closed the practice project. I am therefore not presenting this as a complete UAT pass or a production-ready client rollout.

The case study does not claim deployed workflows, API integrations, automated renewals, quote or e-signature delivery, or validated reporting dashboards. It demonstrates the CRM configuration and import work described above.

## What this project demonstrates

The completed setup brought together customer records, sales and renewal pipelines, operational views and deal-level commercial detail. It gave me a concrete implementation to explain, inspect and build on.

The main lesson was that CRM configuration needs to support a specific action: identify the opportunity, record the next step, assign responsibility or review an upcoming renewal. Adding fields is only useful when their purpose is clear.

## Need help with HubSpot CRM setup?

If you are looking for a **HubSpot implementation consultant** for a defined piece of work, I can discuss pipeline configuration, custom properties, data imports or operational views with you.

[Send me your HubSpot setup requirements](/contact), including your Hubs and subscription tiers, the task you need completed and whether you already have data in the portal. I will confirm the scope and whether it fits my experience.

You can also [see my HubSpot consulting services](/services) or [book a call](/#book).

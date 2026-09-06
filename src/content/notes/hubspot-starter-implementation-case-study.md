---
title: "HubSpot Starter implementation case study: CRM setup"
summary: "HubSpot Starter implementation covering CRM setup, sales and renewal pipelines, custom properties, data imports and operational views. Independent project."
date: 2026-09-06
tags: [hubspot]
authors: [default]
canonicalUrl: "https://richardtuharsky.com/notes/hubspot-starter-implementation-case-study"
---

**Project type:** Independent HubSpot Starter implementation.

## HubSpot CRM setup for a multi-division business

The starting point was the record structure. Companies and contacts held the customer information. Deals held the commercial opportunities, with properties including Business Unit, Deal type and Solution Fit to describe the work being sold.

That distinction shaped the implementation: the customer and the opportunity are different things to track. A deal needs its own stage and next action, even when the company already has an established relationship with the business.

The build also included a ticket pipeline and Project configuration for onboarding, including Project Health and Target Go Live. These provided separate records for support and delivery information.

## HubSpot pipeline setup: new business and renewals

I configured two deal pipelines: **New Business** and **Renewals**, including their stage order and probabilities.

New sales and renewals were treated as distinct commercial processes. Keeping them in separate pipelines made it possible to inspect renewal opportunities without mixing them into the new-business board.

I also configured conditional stage properties and a required **Next step** field. The purpose was straightforward: a stage should be accompanied by useful information about what happens next.

For each new implementation, I check the subscription and available features before confirming the configuration scope.

## Saved views for follow-up and renewal tracking

A pipeline shows where an opportunity sits. A useful work queue shows which records need attention.

I created these saved views:

| Saved view | What it surfaced |
| --- | --- |
| Deals without next step | Opportunities missing a recorded next action |
| Customers without account manager | Customer records missing an account manager |
| Renewals due in 120 days | Records approaching the renewal review window |

I also checked the **Overdue** and **Due today** task views.

These views supported manual review and follow-up: open the queue, identify the records needing attention and take the next action.

The views made missing information and upcoming renewals visible in a consistent place.

## HubSpot data imports and deal line items

I imported companies, contacts and deals into the configured CRM, then imported line items using the relevant deal record IDs. I reviewed the imported records and confirmed that the line items appeared on the intended deals.

The distinction between a product and a line item became concrete here. Product Library items describe the catalogue; line items represent the commercial detail attached to an individual deal. The association is what makes that detail useful on the opportunity record.

This part of the implementation covered **HubSpot data import**, record identifiers and deal associations.

## Testing and validation

I checked the imported records and confirmed that the line items appeared on the intended deals. I also reviewed the operational views during configuration, including the queues for missing next steps, missing account managers and upcoming renewals.

These checks confirmed the imported data and deal line-item associations in the configured portal.

## What this project demonstrates

The completed setup brought together customer records, sales and renewal pipelines, operational views and deal-level commercial detail. The result was a configured CRM foundation with defined places to manage opportunities, review renewals and identify records needing attention.

The main lesson was that CRM configuration needs to support a specific action: identify the opportunity, record the next step, assign responsibility or review an upcoming renewal. Adding fields is only useful when their purpose is clear.

## Need help with HubSpot CRM setup?

If you are looking for a **HubSpot implementation consultant** for a defined piece of work, I can discuss pipeline configuration, custom properties, data imports or operational views with you.

[Send me your HubSpot setup requirements](/contact), including your Hubs and subscription tiers, the task you need completed and whether you already have data in the portal. I will confirm the scope and whether it fits my experience.

You can also [see my HubSpot consulting services](/services) or [book a call](/#book).

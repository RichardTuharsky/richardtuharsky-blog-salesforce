---
title: "There is nowhere in HubSpot to write down what a deal stage means"
summary: "A HubSpot deal stage has a name, a colour and a probability. There is no field for what it means. Not on free, not on Enterprise. Here is what that does to a pipeline."
date: 2026-08-10
tags: [hubspot]
---

Open a HubSpot portal that has been running for a year and look at the deal pipeline. You will usually find something like this:

Qualified. Discovery. Negotiation. Contract sent.

None of those describe anything you can verify. They describe a mood. Two reps looking at the same deal will put it in different stages, both will be certain they are right, and there is no way to settle it. Then someone builds a forecast on top of that pipeline and it is wrong, and nobody can explain why.

I assumed this was mostly carelessness until I built my own pipeline this week.

## The field does not exist

A deal stage in HubSpot has four things: a name, a colour, a probability, and an internal ID. That is the whole object.

There is no description field. Not gated behind Professional, not hidden in a settings menu. It is not there on any tier. The place where you would write down *what has to be true for a deal to be in this stage* has never existed in the product.

So the definition lives in someone's head. That person leaves, or gets busy, or was never asked in the first place, and the stage quietly becomes whatever the person dragging the card needs it to mean today.

This is not a discipline problem. The data model has no slot for the thing that matters most about a stage.

## What you can do instead

**On Professional and above**, you get something better than documentation: conditional stage properties. Moving a deal into a stage can surface specific properties, and marking one Required means the record cannot be saved until it has a value.

That turns an exit criterion from a note someone might read into a field they cannot skip. If a deal cannot enter Proposal sent without a value in Scope agreed, then the stage means something whether anyone remembers the definition or not.

Worth asking on any portal you inherit: are conditional stage properties configured, and are any of them actually required? Most answer no to both.

**Below Professional**, the only place a definition can live is the stage name itself. So that is where I put mine:

- **Enquiry**, replied, tier known
- **Call held**, problem named
- **Proposal sent**, scope and price in writing
- **Closed Won**
- **Closed Lost**

The labels truncate in board view. It is not elegant. But a stage carrying its own exit criterion cannot drift, because the definition is impossible to look at the pipeline without reading.

Two rules on top:

Closed Lost always carries a reason. A lost deal with no recorded reason is not a lost deal, it is a data defect, and a column of them tells you nothing about why you are losing.

Nothing moves backwards. If a dead deal comes back, it is a new deal. Otherwise time-in-stage stops meaning anything and every velocity report built on it is fiction.

## The part I got wrong

I renamed HubSpot's default stages rather than building the pipeline from scratch. The labels updated. The internal stage IDs did not, and cannot.

My *Enquiry* stage is internally `appointmentscheduled`. *Call held* is `qualifiedtobuy`. Anything reading this pipeline through the API (an integration, a reporting tool, a future migration) sees the original names, not mine. That is permanent.

It costs me nothing today because nothing is integrated yet. In a portal with a Salesforce sync attached, the same shortcut produces a field mapping document that has to explain why every stage is named after something it is not.

Which is the more general point. Most of what goes wrong in a CRM is not a bad decision. It is a fast decision, made in a settings screen that gave no indication anything permanent was happening, by someone with no reason to think they were choosing at all.

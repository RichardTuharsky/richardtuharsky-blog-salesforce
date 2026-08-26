export const HEALTH_CHECK_SERVICE = {
  name: "HubSpot Health Check",
  duration: "Five working days",
  commercial: "Fixed price, paid only after results.",
  description:
    "I go through your portal and tell you what's actually broken, what it's costing you, and what to fix first. The review is read-only; I don't change anything in your account.",
  who:
    "Companies twelve months or more into HubSpot who have stopped trusting what's in it. Reports that contradict the CRM, records that exist three times, or automation nobody dares turn off.",
  delivered: [
    "Findings document with severity ranking",
    "Prioritised fix list with effort estimates",
    "45-minute walkthrough call, recorded",
  ],
} as const;

export const SERVICE_CAPABILITIES = [
  {
    title: "Data quality",
    description: "What's actually in the database, and what put it there.",
    question: "How many contacts in your CRM are the same person?",
    bullets: [
      "Duplicate count across contacts and companies, and the pattern creating them — form variations, import formatting, or an integration",
      "Property inventory: what exists, what's populated, and what nobody has touched in a year",
      "Import history review, so you know which upload caused which mess",
    ],
    noteSlug: "data-quality",
  },
  {
    title: "Pipeline and lifecycle",
    description: "Whether your stages mean anything.",
    question: "Can two reps look at the same deal and agree what stage it's in?",
    bullets: [
      "Exit criteria for every stage, written down, usually for the first time",
      "Where lifecycle stages move automatically and where someone is doing it by hand",
      "Records sitting in a stage their own activity contradicts",
    ],
    noteSlug: "pipeline-lifecycle",
  },
  {
    title: "Automation and sync",
    description: "What's running, what overlaps, and who owns each field.",
    question: "If two systems both update the same field, which one wins?",
    bullets: [
      "Workflow inventory: what's active, what overlaps, and what writes to the same property twice",
      "Integration sync direction and field ownership, mapped per field",
      "Where a loop can form between HubSpot and Salesforce, and which side to break it on",
    ],
    noteSlug: "automation-sync",
  },
] as const;

export const FOLLOW_ON_SERVICES = [
  {
    name: "Cleanup sprint",
    description:
      "I fix what the health check finds. The work is scoped from the findings and priced per engagement.",
  },
  {
    name: "Salesforce and HubSpot",
    description:
      "Sync repair, field ownership design, and migration assessment. Priced per engagement.",
  },
] as const;

export type TemplateUseCase =
  | "Lead Qualification"
  | "Customer Support"
  | "Document Intake"
  | "Appointments"
  | "Education"
  | "Healthcare"
  | "Operations"
  | "Payments"
  | "Feedback";

export type TemplateFeature =
  | "AI-powered"
  | "Payment integration"
  | "File upload"
  | "WhatsApp-ready"
  | "Compliance-aware";

export type TemplateCategory = "marketing" | "product";

export type TemplateHighlight = {
  title: string;
  description: string;
};

export type TemplateDefinition = {
  name: string;
  summary: string;
  description: string;
  emoji: string;
  fileName: string;
  category?: TemplateCategory;
  useCase: TemplateUseCase;
  features: TemplateFeature[];
  highlights: TemplateHighlight[];
  bestFor: string[];
  collects?: string[];
  backgroundColor?: string;
  isComingSoon?: boolean;
  isNew?: boolean;
  updatedAt: string;
};

export type Template = TemplateDefinition & {
  id: string;
  slug: string;
};

const templateUpdatedAt = "2026-05-27";

const templateDefinitions = [
  {
    name: "Click-to-WhatsApp Lead Qualifier",
    emoji: "WA",
    fileName: "click-to-whatsapp-lead-qualifier.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Qualification",
    features: ["WhatsApp-ready", "Compliance-aware"],
    summary: "Qualify ad and website leads before they reach the sales team.",
    description:
      "Use this workflow after click-to-WhatsApp ads, landing pages, or QR campaigns. It captures intent, city, budget, timeline, contact details, and follow-up consent so sales teams can prioritize the right prospects.",
    highlights: [
      {
        title: "Goal",
        description: "Turn inbound interest into clean, sales-ready leads.",
      },
      {
        title: "Flow",
        description: "Intent, budget, location, urgency, consent, and handoff.",
      },
      {
        title: "Result",
        description: "Faster follow-up with better context.",
      },
    ],
    bestFor: ["Performance marketing", "B2B sales", "WhatsApp campaigns"],
    collects: ["Name", "Phone", "City", "Budget", "Timeline", "Consent"],
    isNew: true,
  },
  {
    name: "Real Estate Site Visit Booking",
    emoji: "RE",
    fileName: "real-estate-site-visit-booking.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Appointments",
    features: ["WhatsApp-ready"],
    summary:
      "Qualify property buyers and book site visits with project context.",
    description:
      "Capture preferred city, project, budget, configuration, buying timeline, and visit slot. Route the lead to a sales owner with enough context for a meaningful callback.",
    highlights: [
      {
        title: "Goal",
        description: "Increase site visit show rates from WhatsApp leads.",
      },
      {
        title: "Flow",
        description: "Project interest, budget, visit slot, and handoff.",
      },
      {
        title: "Result",
        description: "Cleaner lead routing for real estate sales teams.",
      },
    ],
    bestFor: ["Developers", "Brokers", "Property portals"],
    collects: ["Project", "Budget", "Configuration", "Visit slot", "Phone"],
    isNew: true,
  },
  {
    name: "Loan and Insurance Pre-Qualification",
    emoji: "FI",
    fileName: "loan-insurance-pre-qualification.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Qualification",
    features: ["Compliance-aware"],
    summary:
      "Collect eligibility details before routing BFSI prospects to advisors.",
    description:
      "Ask focused questions about need, income range, employment type, city, and preferred callback. Include a clear purpose statement before collecting sensitive financial context.",
    highlights: [
      {
        title: "Goal",
        description: "Pre-qualify BFSI leads without overcollecting data.",
      },
      {
        title: "Flow",
        description: "Need, eligibility signals, consent, and advisor handoff.",
      },
      {
        title: "Result",
        description: "Better callbacks with privacy-aware intake.",
      },
    ],
    bestFor: ["NBFCs", "Insurance teams", "Loan marketplaces"],
    collects: ["Need", "City", "Income range", "Employment type", "Consent"],
    isNew: true,
  },
  {
    name: "Admissions Counselling",
    emoji: "ED",
    fileName: "admissions-counselling.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Education",
    features: ["WhatsApp-ready"],
    summary:
      "Qualify student interest and route counselling requests to admissions.",
    description:
      "Capture course interest, city, qualification, target intake, budget, and parent or student contact preference before assigning the right counsellor.",
    highlights: [
      {
        title: "Goal",
        description: "Turn education enquiries into structured counselling.",
      },
      {
        title: "Flow",
        description: "Course, eligibility, budget, contact, and next step.",
      },
      {
        title: "Result",
        description: "Admissions teams get complete lead context.",
      },
    ],
    bestFor: ["Universities", "Coaching institutes", "Edtech teams"],
    collects: ["Course", "City", "Qualification", "Budget", "Contact"],
    isNew: true,
  },
  {
    name: "Healthcare Appointment Triage",
    emoji: "HX",
    fileName: "healthcare-appointment-triage.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Healthcare",
    features: ["Compliance-aware"],
    summary:
      "Route appointment requests while keeping medical advice with humans.",
    description:
      "Collect department, location, preferred slot, and contact details. The template avoids diagnosis and routes urgent or sensitive cases to a human-owned process.",
    highlights: [
      {
        title: "Goal",
        description: "Simplify appointment intake and routing.",
      },
      {
        title: "Flow",
        description: "Department, branch, slot, contact, and escalation.",
      },
      {
        title: "Result",
        description: "Less front-desk load and clearer patient context.",
      },
    ],
    bestFor: ["Clinics", "Hospital chains", "Diagnostics networks"],
    collects: ["Department", "Branch", "Preferred slot", "Phone"],
    isNew: true,
  },
  {
    name: "Dealer and Distributor Enquiry",
    emoji: "DD",
    fileName: "dealer-distributor-enquiry.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Operations",
    features: ["File upload", "Compliance-aware"],
    summary:
      "Standardize partner, franchise, dealer, and distributor enquiries.",
    description:
      "Collect business profile, territory, product interest, investment range, documents, and consent before routing the enquiry to channel teams.",
    highlights: [
      {
        title: "Goal",
        description: "Make partner intake consistent across regions.",
      },
      {
        title: "Flow",
        description:
          "Business details, territory, capacity, documents, handoff.",
      },
      {
        title: "Result",
        description: "Better channel qualification and faster review.",
      },
    ],
    bestFor: ["Manufacturers", "Franchise brands", "Distribution networks"],
    collects: ["Business name", "Territory", "Investment range", "Documents"],
    isNew: true,
  },
  {
    name: "Vendor and Customer KYC Intake",
    emoji: "KY",
    fileName: "vendor-customer-kyc-intake.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Document Intake",
    features: ["File upload", "Compliance-aware"],
    summary:
      "Collect KYC details and documents with an explicit purpose statement.",
    description:
      "Guide users through a lightweight KYC intake flow that explains why data is collected, captures consent, and uploads required files before operations review.",
    highlights: [
      {
        title: "Goal",
        description: "Collect only the documents required for review.",
      },
      {
        title: "Flow",
        description: "Purpose, consent, identity details, uploads, and review.",
      },
      {
        title: "Result",
        description: "Cleaner document intake with less back-and-forth.",
      },
    ],
    bestFor: ["Ops teams", "Fintech", "B2B marketplaces"],
    collects: ["Purpose consent", "Identity details", "Document uploads"],
    isNew: true,
  },
  {
    name: "Support Ticket Triage",
    emoji: "CX",
    fileName: "support-ticket-triage.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Customer Support",
    features: ["WhatsApp-ready", "File upload"],
    summary:
      "Capture issue details before routing customers to the right support path.",
    description:
      "Ask issue category, urgency, order or account reference, screenshot, and contact preference. Simple questions get routed to self-serve answers, while complex cases go to human support.",
    highlights: [
      {
        title: "Goal",
        description: "Reduce repeat questions and improve support context.",
      },
      {
        title: "Flow",
        description: "Issue category, reference, evidence, and escalation.",
      },
      {
        title: "Result",
        description: "Fewer incomplete tickets and faster resolution.",
      },
    ],
    bestFor: ["CX teams", "SaaS support", "Retail support"],
    collects: ["Issue type", "Reference ID", "Screenshot", "Contact"],
    isNew: true,
  },
  {
    name: "Payment Link Collection",
    emoji: "PY",
    fileName: "payment-link-collection.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Payments",
    features: ["Payment integration", "WhatsApp-ready"],
    summary: "Guide customers to the right payment step after qualification.",
    description:
      "Collect buyer details, confirm package or invoice context, share next payment instructions, and capture proof or follow-up preference where required.",
    highlights: [
      {
        title: "Goal",
        description: "Move qualified buyers toward payment without confusion.",
      },
      {
        title: "Flow",
        description: "Plan, contact, payment step, and confirmation.",
      },
      {
        title: "Result",
        description: "Cleaner payment follow-up for sales and finance.",
      },
    ],
    bestFor: ["D2C", "Education", "Services", "Events"],
    collects: ["Plan", "Contact", "Payment status", "Follow-up preference"],
    isNew: true,
  },
  {
    name: "NPS and CSAT on WhatsApp",
    emoji: "FB",
    fileName: "nps-csat-on-whatsapp.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Feedback",
    features: ["WhatsApp-ready"],
    summary:
      "Collect structured feedback in the channel customers already use.",
    description:
      "Ask a simple score, collect the reason, identify detractors, and route high-risk feedback to customer success or support owners.",
    highlights: [
      {
        title: "Goal",
        description: "Measure customer sentiment quickly.",
      },
      {
        title: "Flow",
        description: "Score, reason, optional contact, and escalation.",
      },
      {
        title: "Result",
        description: "Actionable feedback with owner-ready context.",
      },
    ],
    bestFor: ["CX teams", "Customer success", "Service businesses"],
    collects: ["Score", "Reason", "Contact preference"],
    isNew: true,
  },
] satisfies TemplateDefinition[];

export const useCases: TemplateUseCase[] = [
  "Lead Qualification",
  "Customer Support",
  "Document Intake",
  "Appointments",
  "Education",
  "Healthcare",
  "Operations",
  "Payments",
  "Feedback",
];

export const features: TemplateFeature[] = [
  "AI-powered",
  "Payment integration",
  "File upload",
  "WhatsApp-ready",
  "Compliance-aware",
];

export const templates: Template[] = templateDefinitions.map(
  (template, index) => {
    const slug = template.fileName.replace(".json", "");
    return {
      ...template,
      id: `template-${index + 1}`,
      slug,
    };
  },
);

export const getTemplateBySlug = (slug: string) =>
  templates.find((template) => template.slug === slug);

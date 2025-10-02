import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Business",
  TIER_2 = "Enterprise",
}

export const tiers = [
  {
    title: TierName.TIER_1,
    subtitle: "For growing companies ready to automate critical workflows.",
    monthly: 0,
    yearly: 0,
    ctaText: "Talk to our team",
    ctaLink: "https://cal.com/team/lume/lume-intro-20",
    features: [
      "Deploy AI agents for logistics, finance, HR, and support",
      "Native integrations with ERP, TMS, CRM, HRIS, and finance tools",
      "Real-time dashboards & activity logs",
      "Exception handling & human-in-the-loop",
      "Continuous improvement with feedback learning",
      "Email & chat support",
    ],
  },
  {
    title: TierName.TIER_2,
    subtitle: "For organizations that need scale, compliance, and full control.",
    monthly: 0,
    yearly: 0,
    ctaText: "Talk to our team",
    ctaLink: "https://cal.com/team/lume/lume-intro-20",
    features: [
      "Everything in Business, plus:",
      "SOC 2, GDPR, and HIPAA readiness",
      "Role-based access controls & audit trails",
      "Private cloud & on-prem deployment options",
      "Advanced security & compliance features",
      "Dedicated success manager & 24/7 support",
      "Custom integrations & SLAs",
    ],
    featured: true,
  },
];

export const pricingTable = [
  {
    title: "Seat Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Two-factor authentication",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Pay-per-task billing",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Static IP",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Record Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Folder Permissions",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Teams",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Shared Nodes",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Shared app connections",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Agents",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Chatbots",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Nodus MCP",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Nodus Canvas",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Tables",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Access Permissions",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Advanced",
      },
      {
        title: TierName.TIER_2,
        value: "Enterprise",
      },
    ],
  },
  {
    title: "Record Templates",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Custom",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
    ],
  },
];

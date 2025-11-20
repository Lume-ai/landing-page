import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Business",
  TIER_2 = "Enterprise",
}

export const tiers = [
  {
    title: TierName.TIER_1,
    subtitle: "For growing SaaS teams shipping customer integrations faster.",
    monthly: 0,
    yearly: 0,
    ctaText: "Talk to our team",
    ctaLink: "https://cal.com/team/lume/lume-intro-20",
    features: [
      "Connect to any customer database or ERP",
      "AI-powered schema discovery & data mapping",
      "Automated dbt code generation",
      "Customer collaboration workspace",
      "Data quality validation & anomaly detection",
      "Slack, Teams, and Email support",
      "Direct phone number of founders for support",
    ],
    featured: true,
  },
  {
    title: TierName.TIER_2,
    subtitle: "For enterprise teams requiring scale, security, and compliance.",
    monthly: 0,
    yearly: 0,
    ctaText: "Talk to our team",
    ctaLink: "https://cal.com/team/lume/lume-intro-20",
    features: [
      "Everything in Business, plus:",
      "SOC 2 Type 2 compliance readiness",
      "Role-based access controls & audit trails",
      "Private cloud & on-premise deployment",
      "Custom data connectors & transformations",
      "Dedicated success manager & 24/7 support",
      "Custom SLAs & priority support",
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

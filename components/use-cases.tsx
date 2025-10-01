"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  DevopsIcon,
  PhoneIcon,
  TruckIcon,
  DatabaseIcon,
  WalletIcon,
  GraphIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { motion } from "motion/react";

export const UseCases = () => {
  const useCases = [
    {
      title: "Logistics & Supply Chain",
      descriptions: [
        "Freight booking, shipment scheduling, and customs documentation.",
        "Exception handling for delays, lost shipments, and rerouting.",
      ],
      icon: <TruckIcon className="text-brand size-6" />,
    },
    {
      title: "Manufacturing & Operations",
      descriptions: [
        "Supplier onboarding, quality control reporting, inventory checks.",
        "Automated production and warehouse scheduling.",
      ],
      icon: <DevopsIcon className="text-brand size-6" />,
    },
    {
      title: "Finance & Compliance",
      descriptions: [
        "Invoice reconciliation, expense approvals, audit prep.",
        "KYC/AML verification and regulatory reporting.",
      ],
      icon: <WalletIcon className="text-brand size-6" />,
    },
    {
      title: "HR & People Ops",
      descriptions: [
        "Employee onboarding, payroll processing, and benefits enrollment.",
        "Training reminders and compliance checks.",
      ],
      icon: <GraphIcon className="text-brand size-6" />,
    },
    {
      title: "Customer & Internal Support",
      descriptions: [
        "Ticket triage, SLA escalations, and refund workflows.",
        "Knowledge retrieval and automated responses.",
      ],
      icon: <PhoneIcon className="text-brand size-6" />,
    },
    {
      title: "Admin & Data Ops",
      descriptions: [
        "Document intake and processing, record updates.",
        "Reporting, dashboard generation, and data syncing.",
      ],
      icon: <DatabaseIcon className="text-brand size-6" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Use Cases" />
        <SectionHeading className="mt-4">
          One platform, endless workflows.
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          If it's repetitive, rules-based, or multi-step — your AI agents can do it.
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              onMouseEnter={() => setActiveUseCase(index)}
              key={useCase.title}
              className="relative"
            >
              {activeUseCase === index && (
                <motion.div
                  layoutId="scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
                <div className="flex items-center gap-2">{useCase.icon}</div>
                <h3 className="mt-4 mb-2 text-lg font-medium">
                  {useCase.title}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {useCase.descriptions.map((description, idx) => (
                    <li key={idx}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

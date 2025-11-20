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
      title: "SaaS Customer Onboarding",
      descriptions: [
        "Integrate with customer ERPs and databases for faster time-to-value.",
        "Automated schema discovery and data mapping suggestions.",
      ],
      icon: <TruckIcon className="text-brand size-6" />,
    },
    {
      title: "Data Transformation",
      descriptions: [
        "Generate dbt models automatically from customer schemas.",
        "Normalize messy data into your standard format.",
      ],
      icon: <DevopsIcon className="text-brand size-6" />,
    },
    {
      title: "Legacy System Integration",
      descriptions: [
        "Connect to Oracle, SAP, AS400, and custom databases.",
        "Handle complex joins, nested data, and outdated schemas.",
      ],
      icon: <WalletIcon className="text-brand size-6" />,
    },
    {
      title: "Customer Collaboration",
      descriptions: [
        "Share mapping progress with customers in real-time.",
        "Approve data definitions and transformations together.",
      ],
      icon: <GraphIcon className="text-brand size-6" />,
    },
    {
      title: "Data Quality & Validation",
      descriptions: [
        "Automated data quality checks and anomaly detection.",
        "Ensure clean data before it enters your system.",
      ],
      icon: <PhoneIcon className="text-brand size-6" />,
    },
    {
      title: "Integration Project Management",
      descriptions: [
        "Track integration milestones and customer progress.",
        "Manage data definitions, field mappings, and approvals.",
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
          One platform for every integration challenge
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          From legacy ERPs to modern APIs—automate the entire customer integration lifecycle.
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

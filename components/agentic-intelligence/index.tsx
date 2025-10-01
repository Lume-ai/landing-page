"use client";
import React from "react";
import { Container } from "../container";
import { Badge } from "../badge";
import { SubHeading } from "../subheading";
import { SectionHeading } from "../seciton-heading";
import { Card, CardDescription, CardTitle } from "./card";
import {
  BrainIcon,
  NativeIcon,
} from "@/icons/bento-icons";
import {
  BellIcon,
  GraphIcon,
  RocketIcon,
  ShieldIcon,
} from "@/icons/card-icons";
import {
  NativeToolsIntegrationSkeleton,
} from "./skeletons";

type Tab = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
};

export const AgenticIntelligence = () => {
  return (
    <Container className="border-divide border-x">
      <div className="flex flex-col items-center py-16">
        <Badge text="Features" />
        <SectionHeading className="mt-4">
          Built for Agentic Intelligence
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
          Enterprise-grade AI agents that integrate with your existing systems and adapt to your workflows — from logistics and supply chain to finance, HR, and compliance.
        </SubHeading>
        <div className="w-full mt-16">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>Native Tools Integration</CardTitle>
            </div>
            <CardDescription>
              Connect seamlessly with ERP, TMS, WMS, CRM, HRIS, and finance platforms. Every agent action is logged with triggers, tools used, outcomes, and timestamps.
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <BellIcon className="size-6" />
              <CardTitle>Exception Handling & Human-in-the-Loop</CardTitle>
            </div>
            <CardDescription>
              Agents automatically escalate edge cases to your team, ensuring smooth operations while keeping humans in control of critical decisions.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <GraphIcon className="size-6" />
              <CardTitle>Continuous Improvement</CardTitle>
            </div>
            <CardDescription>
              Agents learn from historical outcomes and operator feedback, reducing errors and getting smarter over time — without manual reprogramming.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RocketIcon className="size-6" />
              <CardTitle>Rapid Deployment</CardTitle>
            </div>
            <CardDescription>
              Skip the endless workflow setup. Our team deploys tailored AI agents directly into your processes, delivering value in days, not months.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};

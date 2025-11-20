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
          Built for Modern Data Teams
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
          AI-powered integration platform that connects to any system, understands messy data, and generates production-ready code—all while keeping your team in control.
        </SubHeading>
        <div className="w-full mt-16">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>Universal System Connectivity</CardTitle>
            </div>
            <CardDescription>
              Connect to any customer system: Oracle, SAP, Salesforce, NetSuite, custom databases, APIs, or flat files. Lume automatically discovers schemas and relationships.
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <BellIcon className="size-6" />
              <CardTitle>AI-Powered Data Mapping</CardTitle>
            </div>
            <CardDescription>
              AI analyzes customer schemas and suggests intelligent mappings to your data model. Review, approve, and deploy with confidence.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <GraphIcon className="size-6" />
              <CardTitle>Automated Code Generation</CardTitle>
            </div>
            <CardDescription>
              Generate production-ready dbt models, SQL transformations, and data validation rules automatically—no manual coding required.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RocketIcon className="size-6" />
              <CardTitle>Customer Collaboration Portal</CardTitle>
            </div>
            <CardDescription>
              Work with customers in shared workspaces. Track progress, approve data definitions, and manage the entire integration project together.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};

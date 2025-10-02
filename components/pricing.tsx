"use client";
import React, { useState, useRef, useEffect } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { motion } from "motion/react";
import { DivideX } from "./divide";
import { Button } from "./button";
import { SlidingNumber } from "./sliding-number";
import { CheckIcon } from "@/icons/card-icons";
import { Scale } from "./scale";
import { tiers } from "@/constants/pricing";
import Link from "next/link";
import { Input } from "./ui/input";

export const Pricing = () => {
  const tabs = [
    {
      title: "Monthly",
      value: "monthly",
      badge: "",
    },
    {
      title: "Yearly",
      value: "yearly",
      badge: "Save 20%",
    },
  ];
  const [activeTier, setActiveTier] = useState<"monthly" | "yearly">("monthly");
  const [tierEmails, setTierEmails] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const debounceTimersRef = useRef<Record<string, NodeJS.Timeout>>({});
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced email capture for tier-specific inputs
  const handleTierEmailChange = (tierTitle: string, emailValue: string) => {
    setTierEmails(prev => ({ ...prev, [tierTitle]: emailValue }));

    if (!emailValue || !emailValue.includes('@')) return;

    // Clear previous timer for this tier
    if (debounceTimersRef.current[tierTitle]) {
      clearTimeout(debounceTimersRef.current[tierTitle]);
    }

    // Set new timer for this tier
    debounceTimersRef.current[tierTitle] = setTimeout(async () => {
      try {
        await fetch('/api/capture-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailValue,
            tier: tierTitle,
            billingPeriod: activeTier
          }),
        });
      } catch (error) {
        console.error('Failed to capture email:', error);
      }
    }, 4000);
  };

  // Debounced email capture for bottom CTA
  useEffect(() => {
    if (!email || !email.includes('@')) return;

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(async () => {
      try {
        await fetch('/api/capture-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
      } catch (error) {
        console.error('Failed to capture email:', error);
      }
    }, 2000); // 2 second debounce

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [email]);
  return (
    <section className="">
      <Container className="border-divide flex flex-col items-center justify-center border-x pt-10 pb-10">
        <Badge text="Pricing" />
        <SectionHeading className="mt-4">
          Simple tiers. Built for scale.
        </SectionHeading>
        <p className="mt-4 max-w-3xl text-center text-lg text-gray-600 dark:text-neutral-400">
          Whether you&apos;re streamlining a single workflow or automating across global operations, we have a plan that fits your needs.
        </p>
        <div className="relative mt-8 flex items-center gap-4 rounded-xl bg-gray-50 p-2 dark:bg-neutral-800">
          <Scale className="opacity-50" />
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTier(tab.value as "monthly" | "yearly")}
              className="relative z-20 flex w-32 justify-center py-1 text-center sm:w-40"
            >
              {activeTier === tab.value && (
                <motion.div
                  layoutId="active-span"
                  className="shadow-aceternity absolute inset-0 h-full w-full rounded-md bg-white dark:bg-neutral-950"
                ></motion.div>
              )}
              <span className="relative z-20 flex items-center gap-2 text-sm sm:text-base">
                {tab.title}{" "}
                {tab.badge && (
                  <span className="bg-brand/10 text-brand rounded-full px-2 py-1 text-xs font-medium">
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="mx-auto max-w-4xl">
          <div className="divide-divide grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
            {tiers.map((tier, tierIdx) => (
              <div className="p-4 md:p-8" key={tier.title + "tier-meta"}>
                <h3 className="text-charcoal-700 text-xl font-medium dark:text-neutral-100">
                  {tier.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-neutral-400">
                  {tier.subtitle}
                </p>

                <div
                  key={tier.title + "tier-list-of-items"}
                  className="flex flex-col gap-4 px-0 py-6 md:hidden"
                >
                  {tier.features.map((tierFeature, idx) => (
                    <Step key={tierFeature + tierIdx + idx}>{tierFeature}</Step>
                  ))}
                </div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={tierEmails[tier.title] || ""}
                  onChange={(e) => handleTierEmailChange(tier.title, e.target.value)}
                  className="mt-6 w-full"
                />
                <Button
                  className="mt-4 w-full"
                  as={Link}
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={tier.featured ? "brand" : "secondary"}
                >
                  {tier.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide hidden border-x md:block">
        <div className="mx-auto max-w-4xl">
          <div className="divide-divide grid grid-cols-1 md:grid-cols-2 md:divide-x">
            {tiers.map((tier, index) => (
              <div
                key={tier.title + "tier-list-of-items"}
                className="flex flex-col gap-4 p-4 md:p-8"
              >
                {tier.features.map((tierFeature, idx) => (
                  <Step key={tierFeature + index + idx}>{tierFeature}</Step>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x py-16">
        <h3 className="text-2xl font-medium dark:text-white">
          Let&apos;s discuss the right plan for your business.
        </h3>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 max-w-md"
        />
        <Button
          className="mt-4"
          as={Link}
          href="https://cal.com/team/lume/lume-intro-20"
          target="_blank"
          rel="noopener noreferrer"
          variant="brand"
        >
          Book a Demo
        </Button>
      </Container>
    </section>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-charcoal-700 flex items-center gap-2 dark:text-neutral-100">
      <CheckIcon className="h-4 w-4 shrink-0" />
      {children}
    </div>
  );
};

const Price = ({ value }: { value: number }) => {
  return <SlidingNumber value={value} />;
};

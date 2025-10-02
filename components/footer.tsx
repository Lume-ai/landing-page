import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";

export const Footer = () => {
  const product = [
    {
      title: "AI Workflow Automation",
      href: "#",
    },
    {
      title: "Agent Management",
      href: "#",
    },
    {
      title: "Integrations",
      href: "#",
    },
    {
      title: "Custom Deployments",
      href: "#",
    }
  ];

  const company = [
    {
      title: "Book a demo",
      href: "https://cal.com/team/lume/lume-intro-20",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "mailto:support@lume.ai",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Careers",
      href: "https://app.dover.com/jobs/lume",
      target: "_blank",
      rel: "noopener noreferrer",
    }
  ];

  const legal = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    }
    // {
    //   title: "Terms of Service",
    //   href: "/terms-of-service",
    // },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="mt-4 max-w-lg text-left">
            Deploy and scale agentic workflows
          </SubHeading>
          <Button className="mt-4 mb-8 lg:mb-0 w-1/2" as={Link} href="https://cal.com/team/lume/lume-intro-20" target="_blank" rel="noopener noreferrer">Book a demo</Button>
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Product</p>
          {product.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Company</p>
          {company.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
              {...(item.target && { target: item.target })}
              {...(item.rel && { rel: item.rel })}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Legal</p>
          {legal.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
        <p className="text-footer-link text-sm">
          © 2024 Lume AI Inc. All rights reserved.
        </p>
        <div className="mt-4 flex items-center gap-4 md:mt-0">
          {/* <Link
            href="https://linkedin.com"
            className="text-footer-link transition-colors hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link> */}
        </div>
      </div>
    </Container>
  );
};

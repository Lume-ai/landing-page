import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
    title: "Cookie Policy | Notus",
    description: "Learn about how we use cookies and similar tracking technologies on our website.",
});

export default function CookiePolicyPage() {
    return (
        <main>
            <DivideX />
            <Container className="border-divide border-x px-4 pt-10 pb-20 md:px-8 md:pt-32 md:pb-40">
                <div className="mx-auto max-w-4xl">
                    <Badge text="Legal" />
                    <Heading className="mt-4 text-left">
                        Cookie Policy
                    </Heading>
                    <SubHeading className="mt-6 text-left text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </SubHeading>

                    <div className="prose prose-lg mt-12 max-w-none text-gray-700 dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                            [Your cookie policy content will go here. This is a placeholder that you can replace with your actual cookie policy.]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">1. What Are Cookies</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add explanation of what cookies are and how they work]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">2. How We Use Cookies</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about how your website uses cookies]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">3. Types of Cookies We Use</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about different types of cookies: essential, analytics, marketing, etc.]
                        </p>

                        <h3 className="mt-8 text-xl font-semibold text-gray-900">Essential Cookies</h3>
                        <p className="mt-2 leading-relaxed">
                            [Add details about essential cookies]
                        </p>

                        <h3 className="mt-8 text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                        <p className="mt-2 leading-relaxed">
                            [Add details about analytics cookies]
                        </p>

                        <h3 className="mt-8 text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                        <p className="mt-2 leading-relaxed">
                            [Add details about marketing cookies]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">4. Third-Party Cookies</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about third-party cookies and services]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">5. Managing Cookies</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about how users can manage or disable cookies]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">6. Contact Us</h2>
                        <p className="mt-4 leading-relaxed">
                            If you have questions about our use of cookies, please contact us at{" "}
                            <a href="mailto:support@lume.ai" className="text-indigo-600 hover:text-indigo-700">
                                support@lume.ai
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
            <DivideX />
        </main>
    );
} 
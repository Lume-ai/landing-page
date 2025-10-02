import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
    title: "Terms of Service | Lume AI",
    description: "Read our terms of service to understand the rules and regulations for using our platform.",
});

export default function TermsOfServicePage() {
    return (
        <main>
            <DivideX />
            <Container className="border-divide border-x px-4 pt-10 pb-20 md:px-8 md:pt-32 md:pb-40">
                <div className="mx-auto max-w-4xl">
                    <Badge text="Legal" />
                    <Heading className="mt-4 text-left">
                        Terms of Service
                    </Heading>
                    <SubHeading className="mt-6 text-left text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </SubHeading>

                    <div className="prose prose-lg mt-12 max-w-none text-gray-700 dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                            [Your terms of service content will go here. This is a placeholder that you can replace with your actual terms of service.]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about accepting these terms when using your service]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">2. Description of Service</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about your service and what it provides]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">3. User Responsibilities</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about user obligations and acceptable use]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about intellectual property rights]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">5. Payment and Billing</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about payment terms, billing, and refunds]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">6. Termination</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about account termination conditions]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">7. Limitation of Liability</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about liability limitations]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">8. Changes to Terms</h2>
                        <p className="mt-4 leading-relaxed">
                            [Add details about how and when terms may be updated]
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900">9. Contact Information</h2>
                        <p className="mt-4 leading-relaxed">
                            For questions about these Terms of Service, please contact us at{" "}
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
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
    title: "Privacy Policy | Lume AI",
    description: "Read our privacy policy to understand how we collect, use, and protect your information.",
});

export default function PrivacyPolicyPage() {
    return (
        <main>
            <DivideX />
            <Container className="border-divide border-x px-4 pt-10 pb-20 md:px-8 md:pt-32 md:pb-40">
                <div className="mx-auto max-w-4xl">
                    <Badge text="Legal" />
                    <Heading className="mt-4 text-left">
                        Privacy Policy
                    </Heading>
                    <SubHeading className="mt-6 text-left text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </SubHeading>

                    <div className="prose prose-lg mt-12 max-w-none text-gray-700 dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                            We are Lume AI, Inc. ("Lume," "we," or "us"), developers and providers of an AI system to help automate data integrations and rapidly build integration pipelines between systems. This Privacy Notice explains how collects, uses, and discloses personal information in connection with our website, www.lume.ai, and the related content, platform, products, and other functionality offered on or through our services (including contact with our customer service team, engagement with us on social media, or other related interactions with us) (collectively the "services").
                        </p>

                        <p className="mt-4 leading-relaxed">
                            This Privacy Notice does not address our privacy practices relating to Lume job applicants, employees and other personnel. This Privacy Notice is also not a contract and does not create any legal rights or obligations.
                        </p>

                        <h2 className="mt-12 text-2xl font-semibold text-gray-900 dark:text-gray-100">OUR COLLECTION OF PERSONAL INFORMATION</h2>

                        <p className="mt-4 leading-relaxed">
                            Lume is the "data controller" of the personal information we collect or otherwise maintain about our customers, website visitors and professional contacts in connection with our services. This means that we determine how and why such personal information is used.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            When our customers use our services to submit, manage, integrate and transform their data ("Customer Data"), we will process such information on behalf of and under the instruction of the respective customer, who is the "data controller".
                        </p>

                        <p className="mt-4 leading-relaxed">
                            The categories of personal information we collect depend on how you interact with us and our services. Lume collects information that individuals provide directly to us, information we collect automatically when individuals interact with us, and information we collect from third-party sources and other organizations.
                        </p>

                        <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">Personal Information Individuals Provide Directly to Us</h3>

                        <p className="mt-4 leading-relaxed">
                            We may collect the following personal information individuals provide directly to us in connection with our services:
                        </p>

                        <ul className="mt-4 space-y-2">
                            <li>
                                <strong>Contact Information</strong>, including name, email address, phone number, job and employer information, social media handles, and communication preferences.
                            </li>
                            <li>
                                <strong>Account Information</strong>, including username, password, organizational information, general location, affiliated accounts, and join date.
                            </li>
                            <li>
                                <strong>Integrated Account Information</strong>, including access keys or credentials to third party platforms for use in the data integration services.
                            </li>
                            <li>
                                <strong>Inquiry and Communication Information</strong>, including information provided in messages or inquiries sent through our services or provided directly to a member of our team. We may also receive communication preferences from you, such as where you sign up for our newsletter.
                            </li>
                            <li>
                                <strong>Payment Information</strong>, we may, through our third-party payment processor, collect information about transactions you request, including subscriptions and plans purchased through the services. While we do not collect payment card information directly, we may receive billing information, transactional information and confirmation of payments from you and our payment processor partners.
                            </li>
                        </ul>

                        <p className="mt-4 leading-relaxed">
                            When an individual chooses to contact us, we may need additional information to fulfill the request or respond to inquiries. We may provide additional privacy-related information where the scope of the inquiry/request and/or personal information we require fall outside the scope of this Privacy Notice. In that case, the additional privacy notice will govern how we may process the information provided at that time.
                        </p>
                    </div>
                </div>
            </Container>
            <DivideX />
        </main>
    );
} 
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log("Capturing email by pricing page");
  try {
    const { email, tier, billingPeriod } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const subject = tier
      ? `New Lead: ${tier} Plan - Pricing Page`
      : "New Email Captured - Pricing Page";

    const htmlContent = tier
      ? `
        <h2>New lead from pricing page</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested Plan:</strong> ${tier}</p>
        <p><strong>Billing Period:</strong> ${billingPeriod || "N/A"}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Pricing Page - ${tier} Tier</p>
      `
      : `
        <h2>New email captured from pricing page</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Pricing CTA</p>
      `;

    await resend.emails.send({
      from: "noreply@lume.ai",
      to: "support@lume.ai",
      subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to capture email" },
      { status: 500 },
    );
  }
}

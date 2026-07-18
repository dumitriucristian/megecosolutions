import { NextResponse } from "next/server";

import { siteIdentity } from "@/content";

type ContactPayload = {
  fullName: string;
  organization: string;
  position: string;
  country: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  requestPresentation: boolean;
  requestNda: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asBoolean(value: unknown) {
  return value === true;
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const payload: ContactPayload = {
    fullName: asString(raw.fullName),
    organization: asString(raw.organization),
    position: asString(raw.position),
    country: asString(raw.country),
    email: asString(raw.email),
    phone: asString(raw.phone),
    inquiryType: asString(raw.inquiryType),
    message: asString(raw.message),
    requestPresentation: asBoolean(raw.requestPresentation),
    requestNda: asBoolean(raw.requestNda),
  };

  const errors: string[] = [];
  if (!payload.fullName) errors.push("fullName");
  if (!payload.country) errors.push("country");
  if (!payload.email) errors.push("email");
  else if (!isValidEmail(payload.email)) errors.push("email");
  if (!payload.inquiryType) errors.push("inquiryType");
  if (!payload.message) errors.push("message");

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 400 },
    );
  }

  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || siteIdentity.primaryEmail;
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL?.trim() || siteIdentity.primaryEmail;
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || siteIdentity.name;
  const apiBase = (process.env.BREVO_API_URL?.trim() || "https://api.brevo.com/v3").replace(
    /\/$/,
    "",
  );

  const yesNo = (value: boolean) => (value ? "Yes" : "No");
  const subject = `[Website] ${payload.inquiryType} — ${payload.fullName}`;

  const textContent = [
    "New inquiry from the MEG EcoSolutions website",
    "",
    `Full name: ${payload.fullName}`,
    `Organization: ${payload.organization || "—"}`,
    `Position: ${payload.position || "—"}`,
    `Country: ${payload.country}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "—"}`,
    `Inquiry type: ${payload.inquiryType}`,
    `Request presentation: ${yesNo(payload.requestPresentation)}`,
    `Request NDA: ${yesNo(payload.requestNda)}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const htmlContent = `
    <h2>New inquiry from the MEG EcoSolutions website</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;color:#0f172a">
      <tr><td><strong>Full name</strong></td><td>${escapeHtml(payload.fullName)}</td></tr>
      <tr><td><strong>Organization</strong></td><td>${escapeHtml(payload.organization || "—")}</td></tr>
      <tr><td><strong>Position</strong></td><td>${escapeHtml(payload.position || "—")}</td></tr>
      <tr><td><strong>Country</strong></td><td>${escapeHtml(payload.country)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone || "—")}</td></tr>
      <tr><td><strong>Inquiry type</strong></td><td>${escapeHtml(payload.inquiryType)}</td></tr>
      <tr><td><strong>Request presentation</strong></td><td>${yesNo(payload.requestPresentation)}</td></tr>
      <tr><td><strong>Request NDA</strong></td><td>${yesNo(payload.requestNda)}</td></tr>
    </table>
    <h3 style="margin-top:24px">Message</h3>
    <p style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px;color:#0f172a">${escapeHtml(payload.message)}</p>
  `;

  const brevoResponse = await fetch(`${apiBase}/smtp/email`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: toEmail, name: siteIdentity.name }],
      replyTo: { email: payload.email, name: payload.fullName },
      subject,
      textContent,
      htmlContent,
    }),
  });

  if (!brevoResponse.ok) {
    const detail = await brevoResponse.text().catch(() => "");
    console.error("Brevo email failed", brevoResponse.status, detail);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

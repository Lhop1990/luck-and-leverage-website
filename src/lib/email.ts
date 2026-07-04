// Interim lead capture via email (Resend HTTP API).
//
// Until the Atlas CRM integration is wired up (see src/lib/atlas.ts), every
// contact-form submission is emailed to the founders so nothing is lost.
//
// Required env vars (set on Vercel and in .env.local):
//   RESEND_API_KEY    — Resend API key (https://resend.com)
//   LEAD_TO_EMAIL     — optional, defaults to "jack@luckandleverage.com"
//   LEAD_FROM_EMAIL   — optional, defaults to "Luck & Leverage <onboarding@resend.dev>"
//                       (use a verified luckandleverage.com sender once the
//                        domain is verified in Resend)
//
// Without RESEND_API_KEY the send is skipped (logged, not a hard failure).

import type { LeadInput } from "./leadSchema";

export type EmailResult = { ok: boolean; skipped?: boolean; error?: string };

const SERVICE_LABEL: Record<LeadInput["service"], string> = {
  advisory: "Advisory",
  search: "Search",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadEmail(lead: LeadInput): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL ?? "jack@luckandleverage.com";
  const from =
    process.env.LEAD_FROM_EMAIL ?? "Luck & Leverage <onboarding@resend.dev>";
  const source = process.env.ATLAS_LEAD_SOURCE ?? "luckandleverage.com";

  if (!apiKey) {
    console.warn(
      "[Email] RESEND_API_KEY not configured — lead not emailed.",
      { ...lead, source },
    );
    return { ok: false, skipped: true, error: "Email not configured." };
  }

  const fullName = `${lead.firstName} ${lead.lastName}`.trim();
  const serviceLabel = SERVICE_LABEL[lead.service] ?? lead.service;
  const subject = `INBOUND LEAD — ${serviceLabel} enquiry — ${fullName}`;

  const rows: Array<[string, string]> = [
    ["Service", serviceLabel],
    ["Name", fullName],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["How they heard", lead.howHeard],
    ["Source", source],
  ];

  const text = ["INBOUND LEAD", "", ...rows.map(([label, value]) => `${label}: ${value}`)].join(
    "\n",
  );

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#111;line-height:1.5">
      <p style="margin:0 0 8px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#8a5a00">INBOUND LEAD</p>
      <h2 style="margin:0 0 16px">New ${escapeHtml(serviceLabel)} enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows
          .map(
            ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600;white-space:nowrap;vertical-align:top">${escapeHtml(
            label,
          )}</td>
          <td style="padding:8px 12px;border:1px solid #e5e5e5">${escapeHtml(
            value,
          )}</td>
        </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[Email] non-2xx response", res.status, body);
      return { ok: false, error: "send-failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[Email] network error", err);
    return { ok: false, error: "network" };
  }
}

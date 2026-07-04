// Atlas CRM integration stub.
//
// Replace the body of submitLeadToAtlas() with a fetch() call to the Atlas
// "create lead" / "create contact" endpoint once the API docs are provided.
//
// Required env vars (set on Vercel and in .env.local):
//   ATLAS_API_KEY        — bearer token
//   ATLAS_API_BASE_URL   — e.g. https://api.atlascrm.com/v1
//   ATLAS_LEAD_SOURCE    — optional, defaults to "luckandleverage.com"
//
// Until that is wired up, leads are logged server-side so nothing is lost in dev.

import type { LeadInput } from "./leadSchema";

export type AtlasResult =
  | { ok: true; id?: string }
  | { ok: false; skipped?: boolean; error: string };

export async function submitLeadToAtlas(lead: LeadInput): Promise<AtlasResult> {
  const apiKey = process.env.ATLAS_API_KEY;
  const baseUrl = process.env.ATLAS_API_BASE_URL;
  const source = process.env.ATLAS_LEAD_SOURCE ?? "luckandleverage.com";

  // Until Atlas creds are provisioned, skip (not a hard failure) — the email
  // fallback in actions.ts is responsible for capturing the lead instead.
  if (!apiKey || !baseUrl) {
    console.warn(
      "[Atlas] credentials not configured — skipping Atlas, relying on email fallback.",
      { ...lead, source },
    );
    return { ok: false, skipped: true, error: "Atlas not configured." };
  }

  try {
    const res = await fetch(`${baseUrl}/leads`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        service: lead.service,
        source,
        notes: `How they heard: ${lead.howHeard}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Atlas] non-2xx response", res.status, text);
      return { ok: false, error: "Atlas rejected the lead." };
    }

    const data = (await res.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("[Atlas] network error", err);
    return { ok: false, error: "Could not reach Atlas." };
  }
}

"use server";

import { LeadSchema } from "@/lib/leadSchema";
import { submitLeadToAtlas } from "@/lib/atlas";
import { sendLeadEmail } from "@/lib/email";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export async function submitLead(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    howHeard: formData.get("howHeard"),
    hp: formData.get("hp"),
  };

  const parsed = LeadSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) {
        errors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  // Silently drop bot submissions.
  if (parsed.data.hp) {
    return { status: "success", message: "Thanks. We will be in touch." };
  }

  // Try Atlas CRM and the email fallback in parallel. The lead is captured if
  // either succeeds. We only surface an error when nothing captured it AND at
  // least one channel hard-failed (a misconfigured/skipped channel is not a
  // hard failure — the other channel is expected to carry the lead).
  const [atlas, email] = await Promise.all([
    submitLeadToAtlas(parsed.data),
    sendLeadEmail(parsed.data),
  ]);

  const captured = atlas.ok || email.ok;
  const hardFailure =
    (!atlas.ok && !atlas.skipped) || (!email.ok && !email.skipped);

  if (!captured && hardFailure) {
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email us at jack@luckandleverage.com while we look into it.",
    };
  }

  return {
    status: "success",
    message:
      "Thanks. One of the founders will be in touch within one business day.",
  };
}

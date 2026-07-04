"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type FormState } from "./actions";
import type { Service } from "@/lib/leadSchema";

const initial: FormState = { status: "idle" };

const fieldBase =
  "w-full bg-transparent border-b border-ink/25 px-0 py-3 text-base text-ink placeholder:text-ink/45 focus:outline-none focus-visible:border-lime focus:border-lime transition-colors";
const labelBase =
  "block text-[10px] uppercase tracking-wider text-ink/60 mb-2";

export function ContactForm({ defaultService }: { defaultService?: Service }) {
  const [state, formAction] = useActionState(submitLead, initial);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border border-lime/60 p-8 md:p-10 bg-lime/[0.04]"
      >
        <p className="eyebrow mb-4">Message received</p>
        <p className="font-heading text-3xl md:text-4xl text-lime leading-tight">
          {state.message}
        </p>
        <p className="mt-6 text-sm text-ink/70">
          In the meantime, feel free to read{" "}
          <a href="/obsession-framework" className="text-lime underline-offset-4 hover:underline">
            the Obsession Framework
          </a>
          .
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={formAction} noValidate className="space-y-8">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="border border-red-500/50 bg-red-500/10 text-red-200 text-sm px-4 py-3"
        >
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <Field name="firstName" label="First name" error={err.firstName} autoComplete="given-name" required />
        <Field name="lastName" label="Surname" error={err.lastName} autoComplete="family-name" required />
        <Field name="email" label="Email address" type="email" inputMode="email" error={err.email} autoComplete="email" required />
        <Field name="phone" label="Contact number" type="tel" inputMode="tel" error={err.phone} autoComplete="tel" required />
        <div className="md:col-span-2">
          <Field name="company" label="Company name" error={err.company} autoComplete="organization" required />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="service" className={labelBase}>
            Which service are you interested in discussing with us?
            <span className="text-lime" aria-hidden> *</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue={defaultService ?? ""}
              required
              className={`${fieldBase} appearance-none pr-10 cursor-pointer`}
              aria-invalid={!!err.service}
              aria-describedby={err.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="advisory">Advisory</option>
              <option value="search">Search</option>
            </select>
            <svg
              aria-hidden
              className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-lime"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {err.service && (
            <p id="service-error" className="mt-2 text-xs text-red-300">
              {err.service}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="howHeard" className={labelBase}>
            How did you hear about us?
            <span className="text-lime" aria-hidden> *</span>
          </label>
          <textarea
            id="howHeard"
            name="howHeard"
            required
            rows={2}
            placeholder="Referral, LinkedIn, podcast, event…"
            className={`${fieldBase} resize-y min-h-[48px]`}
            aria-invalid={!!err.howHeard}
            aria-describedby={err.howHeard ? "howHeard-error" : undefined}
          />
          {err.howHeard && (
            <p id="howHeard-error" className="mt-2 text-xs text-red-300">
              {err.howHeard}
            </p>
          )}
        </div>

        {/* Honeypot — hidden from real users */}
        <div className="hidden" aria-hidden>
          <label>
            Leave this field empty
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <div className="pt-6 border-t border-rule">
        <SubmitButton />
        <p className="mt-4 text-xs text-ink/50">
          Your details go directly to the founders. We do not share them.
        </p>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  error,
  required,
  type = "text",
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search" | "none";
}) {
  return (
    <div>
      <label htmlFor={name} className={labelBase}>
        {label}
        {required && (
          <span className="text-lime" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={fieldBase}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 px-7 min-h-[48px] bg-lime text-bg text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:bg-ink hover:text-lime focus-visible:bg-ink focus-visible:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </button>
  );
}

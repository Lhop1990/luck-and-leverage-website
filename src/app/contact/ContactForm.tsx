"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type FormState } from "./actions";
import type { Service } from "@/lib/leadSchema";

const initial: FormState = { status: "idle" };

// Square corners, hairline border, white fill — form primitives are
// styled from the brand tokens (the guidelines define no form palette).
const fieldBase =
  "w-full bg-white border border-ivory-400 rounded-none px-4 py-3 min-h-11 text-base text-charcoal-700 " +
  "placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-800 transition-colors duration-[140ms]";
const labelBase =
  "block font-body font-medium text-[11px] uppercase tracking-label text-charcoal-500 mb-2";

export function ContactForm({ defaultService }: { defaultService?: Service }) {
  const [state, formAction] = useActionState(submitLead, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="border-l-[3px] border-green-500 bg-ivory-100 p-8 md:p-10">
        <p className="eyebrow mb-4">Message received</p>
        <p className="font-heading uppercase text-2xl md:text-3xl text-charcoal-800 leading-[1.1]">
          {state.message}
        </p>
        <p className="mt-6 text-sm text-charcoal-500">
          In the meantime, feel free to read{" "}
          <a
            href="/obsession-framework"
            className="text-green-700 border-b border-charcoal/14 hover:border-green-500 transition-colors"
          >
            the Obsession Framework
          </a>
          .
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={formAction} noValidate className="flex flex-col gap-8">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="border border-error bg-error-surface text-error text-sm px-4 py-3"
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
            <span className="text-green-700" aria-hidden> *</span>
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
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-500"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {err.service && (
            <p id="service-error" className="mt-2 text-xs text-error">
              {err.service}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="howHeard" className={labelBase}>
            How did you hear about us?
            <span className="text-green-700" aria-hidden> *</span>
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
            <p id="howHeard-error" className="mt-2 text-xs text-error">
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

      <div className="pt-6 border-t border-charcoal/14">
        <SubmitButton />
        <p className="mt-4 text-xs text-charcoal-500">
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
          <span className="text-green-700" aria-hidden>
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
        <p id={`${name}-error`} className="mt-2 text-xs text-error">
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
      className="inline-flex items-center justify-center gap-3 px-8 min-h-13 bg-green-500 text-charcoal-800 font-heading font-medium text-[13px] uppercase tracking-nav rounded-none transition-colors duration-[140ms] hover:bg-green-400 active:bg-green-600 active:translate-y-px disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <span aria-hidden>&#8594;</span>}
    </button>
  );
}

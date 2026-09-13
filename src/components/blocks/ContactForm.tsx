"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ serviceContext }: { serviceContext?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Please enter a valid email.";
    if (message.length < 10)
      nextErrors.message = "Tell us a little more about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          service: serviceContext ?? form.get("service"),
          website: form.get("website"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-olive/40 bg-olive/10 p-6 text-sm text-text"
      >
        Thank you — your message has been sent. We usually reply within one
        business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field for basic spam protection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      {!serviceContext && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text">
            Service of interest
          </label>
          <input
            id="service"
            name="service"
            type="text"
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-sm focus-visible:border-accent"
            placeholder="e.g. Villa photography, Google Ads, Branding"
          />
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full border border-line bg-surface px-4 py-3 text-sm focus-visible:border-accent"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-accent">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2 w-full border border-line bg-surface px-4 py-3 text-sm focus-visible:border-accent"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full border border-line bg-surface px-4 py-3 text-sm focus-visible:border-accent"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-accent">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          Something went wrong sending your message. Please try again or
          email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent px-6 py-3 text-sm font-medium text-text-inverse hover:bg-[#a15f3d] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

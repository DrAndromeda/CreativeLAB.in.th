import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  // Honeypot: bots fill hidden fields, humans never see them.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 422 });
  }

  // NOTE: no email/CRM provider is wired up yet — see NOTES.md.
  // Before launch, replace this log with a real delivery integration
  // (e.g. Resend, SES, or a CRM webhook) and add rate limiting.
  console.info("[contact] lead received", {
    name,
    email,
    service: body.service ?? null,
    messageLength: message.length,
  });

  return NextResponse.json({ ok: true });
}

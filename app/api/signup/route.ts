import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, source, offer } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const token = process.env.SELFETAPE_SIGNUP_TOKEN;
    if (!token || token.length < 32) {
      return NextResponse.json({ error: "Signup temporarily unavailable" }, { status: 503 });
    }

    const res = await fetch("https://crm.selfetape.com/api/website-signups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, firstName, lastName, source, offer }),
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.error("CRM signup rejected:", res.status);
      return NextResponse.json({ error: "Signup failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup request failed");
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

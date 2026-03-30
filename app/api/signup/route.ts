import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const res = await fetch("https://crm.selfetape.com/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic UGhpbGlwOlJpY2Npbw==",
      },
      body: JSON.stringify({
        email,
        firstName: firstName || "",
        lastName: lastName || "",
        tags: ["Waitlist"],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("CRM error:", res.status, text);
      return NextResponse.json({ error: "Signup failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

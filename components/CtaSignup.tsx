"use client";

import { useState, useEffect } from "react";

export function CtaSignup({ label = "Join the actor beta list" }: { label?: string }) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          source: typeof window !== "undefined" ? window.location.pathname : "cta",
          offer: "Self-Tape Emergency Kit",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setOpen(false);
        }, 2500);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <button className="cta-trigger" onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div className="signup-overlay" onClick={() => setOpen(false)}>
          <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="signup-close" onClick={() => setOpen(false)}>×</button>
            <h3>Get early access</h3>
            <p>Join the actor beta list and get the Self-Tape Emergency Kit: a last-minute audition checklist for lighting, sound, reader setup, slate, title card, and export.</p>
            {status === "success" ? (
              <div className="signup-success">✓ You&apos;re on the beta list. The checklist is coming with launch updates.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="signup-row">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Joining..." : status === "error" ? "Something went wrong — try again" : "Send me the kit + early access"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

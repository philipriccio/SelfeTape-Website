"use client";

import { useState, useEffect } from "react";

export function CtaSignup() {
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
        body: JSON.stringify({ firstName, lastName, email }),
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
        Join the Waitlist
      </button>

      {open && (
        <div className="signup-overlay" onClick={() => setOpen(false)}>
          <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="signup-close" onClick={() => setOpen(false)}>×</button>
            <h3>Join the Waitlist</h3>
            <p>Be the first to know when Self-e-Tape launches.</p>
            {status === "success" ? (
              <div className="signup-success">✓ You&apos;re on the list!</div>
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
                  {status === "loading" ? "Joining..." : status === "error" ? "Something went wrong — try again" : "Join Waitlist"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

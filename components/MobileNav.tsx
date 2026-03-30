"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-hamburger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      {open ? (
        <div className="mobile-nav-panel">
          <a href="#story" className="nav-link" onClick={() => setOpen(false)}>Our Story</a>
          <a href="#features" className="nav-link" onClick={() => setOpen(false)}>Features</a>
          <a href="#studio" className="nav-link" onClick={() => setOpen(false)}>Studio</a>
          <a href="#residuals" className="nav-link" onClick={() => setOpen(false)}>Residuals</a>
          <a href="#pricing" className="nav-link" onClick={() => setOpen(false)}>Pricing</a>
          <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>Blog</Link>
          <a href="#join" className="nav-cta" onClick={() => setOpen(false)}>Join Waitlist</a>
        </div>
      ) : null}
    </>
  );
}

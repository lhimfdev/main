"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get("website")) return; // honeypot
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const message = String(d.get("message") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) {
      setStatus("Please enter your name, a valid email and a message.");
      return;
    }
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent("LHIMF website message from " + name)}` +
      `&body=${encodeURIComponent(message + "\n\n" + name + " (" + email + ")")}`;
    setStatus("Your email app should open with this message ready. It has not been sent yet.");
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true">
        <label>Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label>Full name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="btn" type="submit" style={{ justifySelf: "start", cursor: "pointer" }}>Send message →</button>
      <p role="status" aria-live="polite" className="note">{status}</p>
    </form>
  );
}

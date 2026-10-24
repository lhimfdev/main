"use client";

import { useState } from "react";
import { PACKAGES, SITE, peso } from "@/lib/site";

export default function OrderForm({ defaultPackage }: { defaultPackage: string }) {
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get("website")) return; // honeypot
    const g = (k: string) => String(d.get(k) || "").trim();
    const pkg = PACKAGES.find((p) => p.id === g("package"));
    if (!g("name") || !/^\S+@\S+\.\S+$/.test(g("email")) || !pkg) {
      setStatus("Please enter your name, a valid email and choose a package.");
      return;
    }
    const body = [
      `Package: ${pkg.n} (${peso(pkg.p)})`,
      `Profile type: ${g("type")}`,
      `Name: ${g("name")}`,
      `Business / brand: ${g("brand") || "-"}`,
      `Email: ${g("email")}`,
      `Mobile: ${g("mobile") || "-"}`,
      `Social media links: ${g("socials") || "-"}`,
      `Design preferences: ${g("design") || "-"}`,
      `Notes: ${g("notes") || "-"}`,
    ].join("\n");
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent("LHIMF order inquiry — " + pkg.n)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with this inquiry ready. It has not been sent yet. No payment is collected.");
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true">
        <label>Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label>
        Package
        <select name="package" defaultValue={defaultPackage} required>
          {PACKAGES.map((p) => (
            <option key={p.id} value={p.id}>{p.n} — {peso(p.p)}</option>
          ))}
        </select>
      </label>
      <label>
        Profile type
        <select name="type" defaultValue="Personal">
          <option>Personal</option>
          <option>Business</option>
        </select>
      </label>
      <label>Full name<input name="name" required autoComplete="name" /></label>
      <label>Business / brand name (optional)<input name="brand" autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Mobile (optional)<input name="mobile" type="tel" autoComplete="tel" /></label>
      <label>Social media links<textarea name="socials" rows={3} /></label>
      <label>Design preferences<textarea name="design" rows={3} /></label>
      <label>Notes<textarea name="notes" rows={3} /></label>
      <button className="btn" type="submit" style={{ justifySelf: "start", cursor: "pointer" }}>Send order inquiry →</button>
      <p role="status" aria-live="polite" className="note">{status}</p>
    </form>
  );
}

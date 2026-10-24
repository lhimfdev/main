"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    const r = document.documentElement;
    const dark = r.dataset.theme
      ? r.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme:dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
    try {
      localStorage.setItem("lhimf-theme", r.dataset.theme);
    } catch {}
  };

  return (
    <header>
      <div className="w nav">
        <Link className="logo" href="/" aria-label="LHIMF home">
          <Logo />
          LHIMF
        </Link>

        <nav id="nav" className={open ? "open" : ""} aria-label="Main">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tools">
          <button className="ic" onClick={toggleTheme} aria-label="Toggle dark mode">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z" />
            </svg>
          </button>
          <Link className="ic bare" href="/order" aria-label="Order your card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 3h3l2.5 12h11L21 7H6" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
          </Link>
          <Link className="pill d" href="/order">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18M16 14.5h2" />
            </svg>
            LHIMF ID →
          </Link>
          <button
            className="ic menu"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nav"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

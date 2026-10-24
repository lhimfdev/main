
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="footer-content">
          <Link href="/" className="footer-brand">
            <Image
              src="/logo.png"
              alt="LHIMF Logo"
              width={44}
              height={44}
              className="footer-logo"
            />

          </Link>

          <div className="footer-contact">
            <a href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>

            <a href={SITE.phoneHref}>
              {SITE.phone}
            </a>
          </div>

          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="footer-separator">/</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} LHIMF. All rights reserved.
          </p>
          <p className="footer-tagline">
            Designed to connect. Built to impress.
          </p>
        </div>
      </div>
    </footer>
  );
}

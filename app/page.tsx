
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LHIMF | Premium NFC Calling Cards & Digital Profiles",
  description:
    "Connect your physical identity to your digital world with LHIMF premium NFC calling cards and personalized digital profile websites.",
};

const FEATURES = [
  {
    label: ["NFC", "Technology"],
    d: "M8 8a6 6 0 010 8M12 5a10 10 0 010 14M16 3a13 13 0 010 18",
  },
  {
    label: ["Multiple", "Links"],
    d: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  },
  {
    label: ["Social Media", "& More"],
    d: "M8 11l8-4M8 13l8 4",
    circles: true,
  },
  {
    label: ["Secure", "& Reliable"],
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  },
];

const WHY = [
  {
    number: "01",
    title: "Tap to Connect",
    description:
      "Share your digital profile through a compatible NFC-enabled smartphone.",
  },
  {
    number: "02",
    title: "Your Identity, Your Design",
    description:
      "Personalize your card to reflect your personal brand or business.",
  },
  {
    number: "03",
    title: "Everything in One Place",
    description:
      "Bring supported contact information, social profiles, and useful links together.",
  },
  {
    number: "04",
    title: "Built for Real Connections",
    description:
      "Make networking, introductions, and customer engagement simpler.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Choose Your Card",
    description:
      "Explore the available LHIMF NFC card packages and choose the option that suits your needs.",
  },
  {
    number: "02",
    title: "Personalize Your Profile",
    description:
      "Bring your contact details, supported social links, and digital identity together in one place.",
  },
  {
    number: "03",
    title: "Tap and Connect",
    description:
      "Let others access your digital profile using a compatible NFC-enabled device.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-ghost" aria-hidden="true">
          LHIMF
        </div>

        <div className="w">
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <div className="eyebrow">
                LHIMF · PHYSICAL NFC CARDS + DIGITAL PROFILES
              </div>

              <p className="home-kicker">
                ONE TAP.
                <br />
                INFINITE CONNECTIONS.
              </p>

              <h1 className="home-title">
                Make every introduction{" "}
                <strong>unforgettable.</strong>
              </h1>

              <p className="home-lead">
                Discover premium NFC calling cards that connect your
                physical identity to your digital world. Share your
                profile, contact information, and online presence with
                a simple tap.
              </p>

              <div className="home-actions">
                <Link className="btn" href="/product">
                  EXPLORE NFC CARDS{" "}
                  <span aria-hidden="true">→</span>
                </Link>

                <Link className="btn o" href="/about">
                  DISCOVER LHIMF
                </Link>
              </div>

              <div className="home-trust-note">
                <span
                  className="home-note-line"
                  aria-hidden="true"
                />
                <p>
                  A physical NFC calling card connected to your own
                  one-page digital profile. Compatibility depends on
                  the receiving device and configuration.
                </p>
              </div>
            </div>

            {/* Clean image without a box or decorative labels */}
            <div className="home-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="home-product-image"
                src="/hand.webp"
                alt="Hand holding an LHIMF premium NFC calling card"
                width={1290}
                height={942}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Feature strip */}
          <div
            className="home-feature-strip"
            aria-label="Product highlights"
          >
            {FEATURES.map((feature) => (
              <div
                className="home-feature"
                key={feature.label[0]}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.circles && (
                    <>
                      <circle cx="6" cy="12" r="2" />
                      <circle cx="18" cy="6" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </>
                  )}

                  <path d={feature.d} />
                </svg>

                <span>
                  {feature.label[0]}
                  <br />
                  {feature.label[1]}
                </span>
              </div>
            ))}
          </div>

          <div className="home-bottom-link">
            <span>CONNECT / SHARE / GROW</span>

            <Link href="/product">
              FIND YOUR NFC CARD{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="alt rv home-benefits">
        <div className="w">
          <div className="eyebrow">
            THE LHIMF ADVANTAGE
          </div>

          <div className="home-benefits-heading">
            <h2>
              YOUR DIGITAL IDENTITY.
              <br />
              <strong>ONE TAP AWAY.</strong>
            </h2>

            <p>
              More than a card. A simpler way to introduce yourself,
              share your details, and build meaningful connections.
            </p>
          </div>

          <div className="g4 home-benefits-grid">
            {WHY.map((item) => (
              <article
                className="home-benefit"
                key={item.number}
              >
                <span className="home-benefit-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="note home-compatibility-note">
            NFC compatibility may vary by device and configuration.
            Devices without NFC may require another available sharing method.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="rv home-how">
        <div className="w">
          <div className="eyebrow">
            SIMPLE BY DESIGN
          </div>

          <h2>
            THREE STEPS.
            <br />
            <strong>ONE SMARTER CONNECTION.</strong>
          </h2>

          <div className="home-steps">
            {STEPS.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="home-how-action">
            <Link className="btn o" href="/about">
              LEARN HOW IT WORKS{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fin rv home-final">
        <div className="w">
          <div className="eyebrow">
            YOUR NEXT CONNECTION STARTS HERE
          </div>

          <h2>
            MAKE YOUR NEXT
            <br />
            INTRODUCTION COUNT.
          </h2>

          <p>
            Bring your physical and digital presence together with
            LHIMF premium NFC calling cards and personalized profiles.
          </p>

          <div className="home-final-actions">
            <Link className="btn" href="/product">
              EXPLORE NFC CARDS{" "}
              <span aria-hidden="true">→</span>
            </Link>

            <Link className="btn o" href="/contact">
              CONTACT LHIMF
            </Link>
          </div>

          <span className="home-final-caption">
            LHIMF · CONNECT / SHARE / GROW
          </span>
        </div>
      </section>
    </>
  );
}

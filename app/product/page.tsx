
import type { Metadata } from "next";
import Link from "next/link";
import PackageCards from "@/components/PackageCards";

export const metadata: Metadata = {
  title: "NFC Calling Cards | LHIMF",
  description:
    "Explore LHIMF NFC calling card packages. Connect your physical card to a personalized digital profile and share your professional identity with a tap.",
};

const BENEFITS = [
  {
    number: "01",
    title: "Tap to Connect",
    description:
      "Share your digital profile through a compatible NFC-enabled smartphone.",
  },
  {
    number: "02",
    title: "Your Digital Profile",
    description:
      "Bring your contact details and social links together in one convenient place.",
  },
  {
    number: "03",
    title: "Made for You",
    description:
      "Choose a package that suits your personal identity or business needs.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Product introduction */}
      <section className="product-hero rv">
        <div className="w">
          <div className="product-hero-content">
            <div className="eyebrow">THE LHIMF COLLECTION</div>

            <h1 className="product-title">
              YOUR CARD.
              <br />
              <strong>YOUR CONNECTION.</strong>
            </h1>

            <p className="product-description">
              More than a traditional calling card. Discover NFC cards
              connected to your own digital profile — designed to help
              you share your identity, contact information, and online
              presence with a simple tap.
            </p>

            <div className="product-actions">
              <Link href="#packages" className="btn">
                EXPLORE PACKAGES <span aria-hidden="true">↓</span>
              </Link>

              <Link href="/about" className="btn o">
                HOW IT WORKS
              </Link>
            </div>

            <p className="product-caption">
              SMARTER NETWORKING. SIMPLIFIED.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="alt rv">
        <div className="w">
          <div className="eyebrow">WHY LHIMF</div>

          <h2>
            A SMALL CARD.
            <br />
            A BIGGER DIGITAL PRESENCE.
          </h2>

          <div className="g3 product-benefits">
            {BENEFITS.map((benefit) => (
              <article className="product-benefit" key={benefit.number}>
                <span>{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Package selection */}
      <section id="packages" className="product-packages rv">
        <div className="w">
          <div className="product-package-heading">
            <div className="eyebrow">FIND YOUR FIT</div>

            <h2>
              CHOOSE YOUR
              <br />
              CONNECTION.
            </h2>

            <p>
              Explore our available packages and find the right combination
              of NFC card personalization and digital profile features
              for your needs.
            </p>
          </div>

          <PackageCards />

          <p className="product-note">
            Need help choosing?{" "}
            <Link href="/contact">Contact our team</Link> for assistance.
          </p>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="rv">
        <div className="w">
          <div className="product-cta">
            <div className="eyebrow">YOUR NEXT CONNECTION STARTS HERE</div>

            <h2>
              READY TO MAKE
              <br />
              YOUR FIRST IMPRESSION?
            </h2>

            <p>
              Choose your package and take the next step toward a more
              connected professional identity.
            </p>

            <Link href="#packages" className="btn">
              FIND YOUR PACKAGE <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

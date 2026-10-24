
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact LHIMF | Get in Touch",
  description:
    "Get in touch with LHIMF for NFC calling cards, digital profile websites, package inquiries, and assistance with your order.",
};

const CONTACT_OPTIONS = [
  {
    number: "01",
    label: "EMAIL US",
    title: SITE.email,
    description:
      "Send your questions, inquiries, or project requirements directly to our email.",
    href: `mailto:${SITE.email}`,
    action: "SEND AN EMAIL",
  },
  {
    number: "02",
    label: "CALL OR MESSAGE",
    title: SITE.phone,
    description:
      "Reach out to discuss your NFC card, digital profile, or order requirements.",
    href: SITE.phoneHref,
    action: "CONTACT US",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Contact hero */}
      <section className="contact-hero rv">
        <div className="w">
          <div className="contact-hero-content">
            <div className="eyebrow">WE'RE HERE TO HELP</div>

            <h1 className="contact-title">
              LET'S START A
              <br />
              <strong>CONNECTION.</strong>
            </h1>

            <p className="contact-intro">
              Have a question about our NFC calling cards or digital
              profile websites? We're here to help you find the right
              solution for your personal brand or business.
            </p>

            <div className="contact-hero-actions">
              <Link className="btn" href="#contact-form">
                SEND AN INQUIRY <span aria-hidden="true">↓</span>
              </Link>

              <Link className="btn o" href="/product">
                EXPLORE PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="alt rv">
        <div className="w">
          <div className="eyebrow">GET IN TOUCH</div>

          <h2>
            WE'D LOVE TO
            <br />
            HEAR FROM YOU.
          </h2>

          <p className="contact-section-intro">
            Choose the contact method that works best for you.
            Whether you're exploring our services or ready to order,
            let's talk about what you need.
          </p>

          <div className="g3 contact-options">
            {CONTACT_OPTIONS.map((option) => (
              <article className="pk contact-option" key={option.number}>
                <span className="contact-option-number">
                  {option.number}
                </span>

                <small>{option.label}</small>

                <h3 className="contact-option-title">
                  {option.title}
                </h3>

                <p>{option.description}</p>

                <a
                  className="contact-option-link"
                  href={option.href}
                >
                  {option.action} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}

            <article className="pk contact-option">
              <span className="contact-option-number">03</span>

              <small>READY TO ORDER?</small>

              <h3 className="contact-option-title">
                Let's build your digital identity.
              </h3>

              <p>
                Explore our packages and submit an order inquiry
                for your preferred NFC card.
              </p>

              <Link className="contact-option-link" href="/order">
                START YOUR ORDER <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="rv" id="contact-form">
        <div className="w">
          <div className="contact-form-layout">
            <div className="contact-form-copy">
              <div className="eyebrow">SEND US A MESSAGE</div>

              <h2>
                TELL US
                <br />
                WHAT YOU NEED.
              </h2>

              <p>
                Fill out the form with your questions or requirements.
                Provide enough detail so we can better understand your
                inquiry.
              </p>

              <div className="contact-form-note">
                <span aria-hidden="true">↗</span>
                <p>
                  Interested in an NFC card? You can also visit our
                  product page to compare available packages.
                </p>
              </div>

              <Link className="btn o" href="/product">
                VIEW NFC PACKAGES
              </Link>
            </div>

            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="alt rv">
        <div className="w">
          <div className="contact-final">
            <div className="eyebrow">YOUR NEXT STEP STARTS HERE</div>

            <h2>
              MAKE YOUR NEXT
              <br />
              CONNECTION COUNT.
            </h2>

            <p>
              Discover a smarter way to share your contact information
              with LHIMF NFC cards and personalized digital profiles.
            </p>

            <Link className="btn" href="/product">
              DISCOVER LHIMF <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

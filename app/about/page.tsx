
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LHIMF | Smart NFC Cards & Digital Identity",
  description:
    "Discover LHIMF, where premium NFC calling cards meet personalized digital profile websites. Learn how it works, explore customization, and get answers to common questions.",
};

const STEPS = [
  {
    number: "01",
    title: "Choose Your Package",
    description:
      "Find the NFC card and digital profile package that fits your personal or business needs.",
  },
  {
    number: "02",
    title: "Personalize Your Experience",
    description:
      "Share your preferred design, name, contact information, social links, and profile content.",
  },
  {
    number: "03",
    title: "Review Your Details",
    description:
      "Review your design preferences and profile information before your order proceeds to production.",
  },
  {
    number: "04",
    title: "Tap. Connect. Share.",
    description:
      "Present your NFC card to a compatible smartphone and let your digital profile make the introduction.",
  },
];

const FEATURES = [
  {
    number: "01",
    title: "One Simple Tap",
    description:
      "Share your digital profile through a compatible NFC-enabled smartphone without manually typing a web address.",
  },
  {
    number: "02",
    title: "Your Digital Identity",
    description:
      "Bring your contact details, social media links, and other supported profile content together in one place.",
  },
  {
    number: "03",
    title: "Designed Around You",
    description:
      "Personalize your card and profile to reflect your identity, profession, or business brand.",
  },
  {
    number: "04",
    title: "Made for Modern Networking",
    description:
      "Give clients, colleagues, and potential customers a convenient way to access your information.",
  },
];

const FAQ = [
  {
    question: "What is LHIMF?",
    answer:
      "LHIMF offers NFC calling cards connected to personalized, one-page digital profile websites. It brings your physical card and online identity together in one convenient experience.",
  },
  {
    question: "What is an NFC calling card?",
    answer:
      "An NFC calling card contains a small Near Field Communication chip configured to share information, commonly through a web link. When used with a compatible phone, it can open your digital profile.",
  },
  {
    question: "How does the card work?",
    answer:
      "Bring the card close to the appropriate NFC reading area of a compatible smartphone. The phone may display a prompt or open the linked profile, depending on its settings and configuration.",
  },
  {
    question: "Do I need an application?",
    answer:
      "In many cases, no dedicated app is needed to open a web profile. Compatibility depends on the phone, its settings, and how the card is configured.",
  },
  {
    question: "Can I customize my card?",
    answer:
      "Yes. You can share your preferred design, name, and relevant business or personal details during your order inquiry. Final options depend on your selected package.",
  },
  {
    question: "What can I include in my digital profile?",
    answer:
      "Your profile can include your name or business name, contact details, social media links, and other supported content according to your package.",
  },
  {
    question: "Can I use LHIMF for my business?",
    answer:
      "Yes. LHIMF is suitable for personal networking, freelancers, professionals, entrepreneurs, and businesses looking for a convenient way to share their information.",
  },
  {
    question: "Can I update my profile after ordering?",
    answer:
      "Update availability depends on your package and service arrangement. Contact LHIMF to confirm the options available for your profile.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Visit the product page, choose your preferred package, and submit the order inquiry. Payment is not collected through the inquiry form.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero rv">
        <div className="w">
          <div className="about-hero-content">
            <div className="eyebrow">GET TO KNOW LHIMF</div>

            <h1 className="about-title">
              YOUR IDENTITY.
              <br />
              <b>ONE SMARTER CONNECTION.</b>
            </h1>

            <p className="about-intro">
              We bring physical networking and digital identity together
              through premium NFC calling cards and personalized digital
              profile websites — designed to help you share who you are
              with a single tap.
            </p>

            <div className="about-actions">
              <Link className="btn" href="/product">
                EXPLORE NFC CARDS <span aria-hidden="true">→</span>
              </Link>

              <Link className="btn o" href="/contact">
                TALK TO US
              </Link>
            </div>

            <div className="about-note">
              SMARTER NETWORKING. A MORE PERSONAL CONNECTION.
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section className="alt rv">
        <div className="w">
          <div className="about-intro-grid">
            <div>
              <div className="eyebrow">OUR PURPOSE</div>
              <h2>
                MORE THAN A CARD.
                <br />
                <b>A DIGITAL FIRST IMPRESSION.</b>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                First impressions matter. Whether you are building your
                professional network, introducing your business, or
                connecting with new clients, sharing your information
                should be simple and memorable.
              </p>

              <p>
                LHIMF combines a physical NFC calling card with a
                personalized digital profile, giving people a convenient
                way to discover your contact details and online presence.
              </p>

              <p>
                Our goal is to make everyday introductions more
                convenient, more professional, and more connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="rv">
        <div className="w">
          <div className="eyebrow">THE LHIMF EXPERIENCE</div>

          <h2>
            BUILT FOR THE WAY
            <br />
            YOU CONNECT TODAY.
          </h2>

          <div className="g4 about-features">
            {FEATURES.map((feature) => (
              <article className="about-feature" key={feature.number}>
                <span className="about-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="alt rv" id="how-it-works">
        <div className="w">
          <div className="eyebrow">HOW IT WORKS</div>

          <h2>
            FOUR STEPS.
            <br />
            ONE BETTER CONNECTION.
          </h2>

          <p className="about-section-lead">
            From choosing your package to sharing your digital identity,
            getting started with LHIMF is straightforward.
          </p>

          <ol className="st about-steps">
            {STEPS.map((step) => (
              <li key={step.number}>
                <b>{step.title}</b>
                <span>{step.description}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="rv">
        <div className="w">
          <div className="about-custom">
            <div>
              <div className="eyebrow">MAKE IT YOURS</div>

              <h2>
                YOUR BRAND.
                <br />
                YOUR DETAILS.
                <br />
                YOUR CONNECTION.
              </h2>

              <p>
                Create a card and digital profile that reflect your
                professional identity. Share your design preferences
                and the information you want people to discover.
              </p>

              <Link className="btn" href="/order">
                START YOUR ORDER <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-custom-details">
              <div>
                <span>01</span>
                <p>Personal or business identity</p>
              </div>
              <div>
                <span>02</span>
                <p>Contact details and social links</p>
              </div>
              <div>
                <span>03</span>
                <p>Personalized card design</p>
              </div>
              <div>
                <span>04</span>
                <p>Digital profile content based on your package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt rv">
        <div className="w">
          <div className="eyebrow">NEED TO KNOW MORE?</div>

          <h2>
            FREQUENTLY ASKED
            <br />
            QUESTIONS.
          </h2>

          <p className="about-section-lead">
            Everything you need to know before getting started with LHIMF.
          </p>

          <div className="faq about-faq">
            {FAQ.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span className="about-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="about-faq-cta">
            <p>Still have questions? We are here to help.</p>
            <Link className="btn o" href="/contact">
              CONTACT LHIMF <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rv">
        <div className="w">
          <div className="fin about-final">
            <div className="eyebrow">YOUR NEXT INTRODUCTION STARTS HERE</div>

            <h2>
              MAKE EVERY
              <br />
              CONNECTION COUNT.
            </h2>

            <p>
              Upgrade the way you share your identity with an NFC calling
              card and a digital profile designed around you.
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

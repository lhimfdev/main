import type { Metadata } from "next";
import OrderForm from "@/components/OrderForm";
import { PACKAGES } from "@/lib/site";

export const metadata: Metadata = { title: "Order Inquiry | LHIMF" };

export default function OrderPage({
  searchParams,
}: {
  searchParams: { package?: string };
}) {
  const requested = searchParams.package;
  const defaultPackage = PACKAGES.some((p) => p.id === requested) ? (requested as string) : PACKAGES[0].id;

  return (
    <section className="rv">
      <div className="w">
        <div className="eyebrow">Order</div>
        <h2>START YOUR ORDER INQUIRY.</h2>
        <p style={{ maxWidth: 640, color: "var(--mute)", margin: 0 }}>
          Tell us about your card and profile. This is an inquiry only — no payment is collected here, and LHIMF
          will confirm the details with you before production.
        </p>
        <OrderForm defaultPackage={defaultPackage} />
      </div>
    </section>
  );
}

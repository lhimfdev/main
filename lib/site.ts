export const SITE = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "lhimfdev@gmail.com",
  phone: "+63 123 456 7890",
  phoneHref: "tel:+631234567890",
};

export type Pkg = {
  id: string;
  n: string;
  o: number;
  p: number;
  f: string[];
  s: string;
  pop?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    id: "basic", n: "Basic", o: 549, p: 349,
    f: ["Premium NFC card with customized website", "Name, contact information, and social media", "One-page website", "Personal or business profile", "2–4 links"],
    s: "https://basic.lhimf.online/",
  },
  {
    id: "personalized", n: "Personalized", o: 899, p: 699,
    f: ["Premium NFC card with customized website", "Name, contact information, and social media", "One-page website", "Personal or business profile", "2–4 images", "4–7 links", "Contact information"],
    s: "https://personalized.lhimf.online/",
  },
  {
    id: "advertising", n: "Advertising", o: 1299, p: 999, pop: true,
    f: ["Premium NFC card with customized website", "Name, contact information, and social media", "One-page website", "Personal or business profile", "4–8 images", "Optional 30-second video", "8–10 links", "Contact information"],
    s: "https://elvicentefilms.lhimf.online/",
  },
];

export const peso = (n: number) => "₱" + n.toLocaleString("en-PH");

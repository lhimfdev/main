
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  metadataBase: new URL("https://lhimf.online"),
  title: {
    default: "LHIMF | NFC Cards & Digital Profiles",
    template: "%s | LHIMF",
  },
  description:
    "Discover premium LHIMF NFC calling cards linked to personalized digital profile websites. Share your contact information with a simple tap.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

// Applies the saved theme before first paint.
const themeScript = `try{var t=localStorage.getItem("lhimf-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="ann">
          🦇 HALLOWEEN SPECIAL — YOUR CONNECTION, REIMAGINED.
        </div>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}

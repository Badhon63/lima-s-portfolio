import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lima — Full-Stack Developer & CS Student",
  description:
    "Portfolio of Lima — a Computer Science student and full-stack developer crafting warm, editorial interfaces.",
  openGraph: {
    title: "Lima — Full-Stack Developer & CS Student",
    description:
      "A field-note style portfolio: projects, skills, and studies from an aspiring full-stack developer.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="night"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}

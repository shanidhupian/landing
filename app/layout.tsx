import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shani Dhupian - Wholesaler of Cotton Fabric, Lycra Fabric & Bakery Box",
  description: "Shani Dhupian - Leading wholesaler and distributor of cotton fabric, lycra fabric, and bakery boxes since 2009 in Surat, Gujarat. Quality products at competitive prices.",
  keywords: "cotton fabric, lycra fabric, bakery box, fabric wholesaler, Surat, Gujarat, textile trader",
  authors: [{ name: "Shani Dhupian" }],
  openGraph: {
    title: "Shani Dhupian - Fabric Wholesaler",
    description: "Leading wholesaler of cotton fabric, lycra fabric, and bakery boxes in Surat, Gujarat",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

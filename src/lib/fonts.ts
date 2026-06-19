import { Space_Grotesk, Inter } from "next/font/google";

// Body font — Inter (clean, legible for dense coverage copy)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Space Grotesk (geometric, technical, precision feel)
export const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

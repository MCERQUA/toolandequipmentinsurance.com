import localFont from "next/font/local";

// Body font — Inter (clean, legible for dense coverage copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Heading font — Space Grotesk (geometric, technical, precision feel)
export const headingFont = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

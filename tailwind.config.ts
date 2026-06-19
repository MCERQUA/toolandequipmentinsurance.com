import type { Config } from "tailwindcss";

/* ============================================================
   TOOLS & EQUIPMENT INSURANCE — "Precision" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to industrial graphite/steel (primary) /
   safety amber (secondary) / signal yellow (accent).
   clay = industrial graphite · sage = safety amber · gold = signal yellow
   · cream = paper · sand = caliper sand
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        cream: "#FBF8F3",          // page background (warm paper)
        sand: "#F4F2EC",           // alt section bg (caliper sand)
        white: "#FFFFFF",          // cards
        // === Primary — Industrial Graphite/Steel (token name: clay) ===
        clay: {
          DEFAULT: "#2B2D42",      // primary — industrial graphite/steel
          dark: "#1E2032",
          light: "#3D4060",
          50: "#EDEEF2",
          100: "#D6D8E1",
          200: "#AEB2C7",
          300: "#858BAC",
          400: "#5C6491",
          500: "#3D4060",
          600: "#2B2D42",
          700: "#1E2032",
          800: "#141523",
          900: "#0A0B12",
        },
        // === Secondary — Safety Amber/Yellow (token name: sage) ===
        sage: {
          DEFAULT: "#F2A900",      // secondary — safety amber
          dark: "#C48700",
          light: "#F8C240",
          50: "#FFF8E6",
          100: "#FFEDB3",
          200: "#F8C240",
          300: "#F2A900",
          400: "#D99500",
          500: "#C48700",
          600: "#9E6C00",
        },
        // === Accent — Signal Yellow (token name: gold) ===
        gold: {
          DEFAULT: "#FFD23F",      // accent — bright signal yellow
          dark: "#E0B800",
          light: "#FFE487",
          50: "#FFFBE6",
          100: "#FFF5B3",
          200: "#FFE487",
          300: "#FFD23F",
          400: "#F5C400",
          500: "#E0B800",
          600: "#B08F00",
        },
        // === Text ===
        espresso: "#161826",       // headings (deep graphite ink)
        cocoa: "#3A3D52",          // body (graphite-slate)
        mocha: "#6B6E80",          // muted (steel-slate)
        // === Borders / dividers ===
        adobe: "#DEDCD4",          // light steel border
        adobeDark: "#C8C6BE",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F4F2EC 40%, #FBF6E6 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(242,169,0,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(43,45,66,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2B2D42 0%, #3D4060 100%)",
        "sage-gradient": "linear-gradient(135deg, #F2A900 0%, #F8C240 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFD23F 0%, #FFE487 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(43, 45, 66, 0.20), 0 4px 12px -6px rgba(22, 24, 38, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(43, 45, 66, 0.25), 0 10px 30px -10px rgba(22, 24, 38, 0.10)",
        card: "0 2px 8px -2px rgba(22, 24, 38, 0.06), 0 1px 3px -1px rgba(22, 24, 38, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(43, 45, 66, 0.22), 0 8px 20px -8px rgba(22, 24, 38, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(43, 45, 66, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

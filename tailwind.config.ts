import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        heading: "var(--heading)",
        body: "var(--body)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        urbanist: ["Urbanist", "var(--font-urbanist)", "sans-serif"],
        lufga: ["Lufga", "var(--font-lufga)", "sans-serif"],
      },
      fontSize: {
        "96": [
          "clamp(36px, 5.634vw + 14.87px, 96px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "48": [
          "clamp(40px, 0.751vw + 37.18px, 48px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "47": [
          "clamp(20px, 2.561vw + 10.13px, 47px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "32": [
          "clamp(18px, 0.91vw + 18.9px, 32px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "20": [
          "clamp(12px, 0.751vw + 9.18px, 20px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "20-16": [
          "clamp(16px, 0.376vw + 14.59px, 20px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "20-12": [
          "clamp(12px, 0.751vw + 9.18px, 20px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
        "20-10": [
          "clamp(10.62px, 0.881vw + 7.32px, 20px)",
          { lineHeight: "100%", letterSpacing: "-0.015em" },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("activeMobileNav", [
        ".activeMobileNav &",
        "&.activeMobileNav",
        ".activeMobileNav&",
        "& .activeMobileNav",
      ]);
    }),
  ],
};
export default config;

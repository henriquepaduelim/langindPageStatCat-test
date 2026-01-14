import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        strong: "var(--shadow-strong)",
      },
      maxWidth: {
        content: "var(--container-lg)",
        "content-md": "var(--container-md)",
        "content-sm": "var(--container-sm)",
      },
      spacing: {
        section: "var(--space-section)",
        hero: "var(--space-hero)",
        stack: "var(--space-stack)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "var(--line-display)", letterSpacing: "-0.02em" }],
        headline: ["var(--text-headline)", { lineHeight: "var(--line-tight)", letterSpacing: "-0.01em" }],
        title: ["var(--text-title)", { lineHeight: "var(--line-tight)" }],
        body: ["var(--text-body)", { lineHeight: "var(--line-body)" }],
        small: ["var(--text-small)", { lineHeight: "var(--line-body)" }],
      },
    },
  },
  plugins: [],
};

export default config;

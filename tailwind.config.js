/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14141b", // Dark background color
        secondary: "#a9abb5", // Light text color
        accent: "#848480", // Accent color
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.015em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.005em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "7xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.015em",
        wider: "0.03em",
        widest: "0.06em",
      },
      lineHeight: {
        none: "1",
        tight: "1.15",
        snug: "1.25",
        normal: "1.5",
        relaxed: "1.75",
        loose: "2",
      },
    },
  },
  plugins: [],
};

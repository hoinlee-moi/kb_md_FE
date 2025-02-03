import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // { pattern: /^w-\[\d{1,3}%\]$/ },
    { pattern: /text-(main|sub|gray|warning)/ },
    { pattern: /stroke-(main|sub|gray|warning)/ },
    {
      pattern: /text-(main|sub|gray|warning)-foreground/,
      variants: [
        "hover",
        "focus",
        "peer-focus",
        "peer-checked",
        "has-[:checked]",
      ],
    },
    {
      pattern: /text-(main|sub|gray|warning)/,
      variants: [
        "hover",
        "focus",
        "peer-focus",
        "peer-checked",
        "has-[:checked]",
      ],
    },
    {
      pattern: /border-(main|sub|gray|warning)/,
      variants: ["has-[:checked]"],
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        kb: {
          main: "#FFBC00",
          sub: "#FFCC00",
          gray: "#60584C",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "modal-open": {
          from: { transform: "scale(95%)", opacity: "0%" },
          to: { transform: "scale(100%)", opacity: "100%" },
        },
        "modal-close": {
          from: { transform: "scale(100%)", opacity: "100%" },
          to: { transform: "scale(95%)", opacity: "0%" },
        },
        "opacity-open": {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
        "opacity-close": {
          from: { opacity: "100%" },
          to: { opacity: "0%" },
        },
        "toast-ani": {
          "0%, 100%": { opacity: "0%" },
          "10%, 95%": { opacity: "100%" },
        },
        "spinner-circle": {
          "0%": { "stroke-dashoffset": "200%" },
          "75%": { "stroke-dashoffset": "-320%" },
          "100%": {
            "stroke-dashoffset": "-350%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-in-out",
        "accordion-up": "accordion-up 0.2s ease-in-out",
        "modal-open": "modal-open 0.3s ease-in-out forwards",
        "modal-close": "modal-close 0.2s ease-in-out",
        "toast-ani": "toast-ani 3s ease-in-out forwards",
        "spinner-circle": "spinner-circle 0.8s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

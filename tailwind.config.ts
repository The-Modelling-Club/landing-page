import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        statistic: "url('/jro_rich.jpg')",
      },
      colors: {
        primary: "#2C323E",
        secondary: "#93AAE0;",
        accent: " #FF7700",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        paragraph: "var(--font-paragraph)",
        heading: "var(--font-heading)",
      },
    },
  },
  plugins: [],
} satisfies Config;

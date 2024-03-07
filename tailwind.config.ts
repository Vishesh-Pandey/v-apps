import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--primary-text)",
        secondary: "var(--secondary-text)",
        tertiary: "var(--tertiary-text)",
        // Add more text colors as needed
      },
      backgroundColor: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary-bg)",
        tertiary: "var(--bg-tertiary-bg)",
        // Add more background colors as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

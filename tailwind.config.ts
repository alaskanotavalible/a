import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D10",
          soft: "#11151B"
        },
        paper: "#FFFFFF",
        stone: {
          50: "#F7F7F7",
          100: "#EFEFEF",
          200: "#E3E3E3",
          300: "#CFCFCF",
          400: "#AFAFAF",
          500: "#8C8C8C",
          600: "#6A6A6A",
          700: "#4A4A4A",
          800: "#2B2B2B",
          900: "#141414"
        },
        heat: {
          DEFAULT: "#D18B2C",
          soft: "#F2B35B"
        }
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem"
      },
      boxShadow: {
        premium:
          "0 1px 0 rgba(0,0,0,0.04), 0 16px 40px rgba(0,0,0,0.10)",
        soft:
          "0 1px 0 rgba(0,0,0,0.03), 0 10px 24px rgba(0,0,0,0.08)"
      },
      letterSpacing: {
        premium: "0.02em"
      }
    }
  },
  plugins: []
};

export default config;

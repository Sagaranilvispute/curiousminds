import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe5",
        ink: "#1f2a2c",
        muted: "#5f6b6e",
        coral: "#ef6c3f",
        coralDeep: "#bf4b2a",
        saffron: "#f6c261",
        teal: "#1c7c7d"
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        body: ["var(--font-space-grotesk)"]
      },
      boxShadow: {
        glow: "0 24px 60px rgba(31, 42, 44, 0.12)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.08)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;

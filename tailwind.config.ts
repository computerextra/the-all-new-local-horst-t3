import { nextui } from "@nextui-org/react";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FFD34E",
            secondary: "#EE457E",
            background: "#F4E8D1",
          },
        },
        dark: {
          colors: {
            primary: "#FFD34E",
            secondary: "#EE457E",
            background: "#E1CA9E",
          },
        },
      },
    }),
  ],
} satisfies Config;

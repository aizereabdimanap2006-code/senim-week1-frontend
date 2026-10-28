import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        senim: {
          bg: "#FFFFFF",
          soft: "#FCE7F0",
          line: "#D0D5DF",
          pink: "#F9BBD9",
          rose: "#F052A8",
          deep: "#B83278",
          lav: "#F5F5F7",
          ink: "#202938",
          mut: "#737C8E",
        },
      },
      fontFamily: { serif: ["Georgia", "serif"] },
    },
  },
} satisfies Config;

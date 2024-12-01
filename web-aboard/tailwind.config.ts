import type { Config } from 'tailwindcss';
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          500: '#243831',
          300: '#2B5F44',
          100: '#D8E9E4',
        },
        golden: '#C5A365',
        black: '#000000',
        white: '#FFFFFF',
        text: '#191919',
        textSecondary: '#A0AFBA',
        grey: {
          100: '#191919',
          300: '#191919',
        },
        success: '#49A569',
      },
    },
  },
  plugins: [],
};

export default config;

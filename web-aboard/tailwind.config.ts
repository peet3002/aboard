import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          500: '#254F3E',
          300: '#326D57',
          100: '#DFF1EC',
        },
        golden: '#C6A56A',
        black: '#000000',
        white: '#FFFFFF',
        text: '#1A1A1A',
        grey: {
          100: '#D3D3D3',
          300: '#A9A9A9',
        },
        success: '#41A047',
      },
    },
  },
  plugins: [],
};

export default config;

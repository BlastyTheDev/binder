import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "navbar-color": "#151515",
      "page-background": "#111111",
      "greyed-text": "#8D8D8D",
      "separator": "#343434",
      "select-highlight": "#202020",
      "get-method": "#008D51",
      "post-method": "#C99B36",
      "put-method": "#348FEB",
      "delete-method": "#F23333",
    },
  },
  plugins: [],
};
export default config;

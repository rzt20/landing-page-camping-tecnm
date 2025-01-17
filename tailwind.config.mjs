import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //modo claro
        primaryClaro: "#FF6363",
        secondaryClaro: "#4a5568",

        //modo oscuro
        primary: "#FF6363",
        secondary: "#ddd",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [animations],
};

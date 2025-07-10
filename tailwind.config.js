/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme"; // ← এটা যোগ করতে হবে

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // ✅ Dark mode support
  plugins: [heroui()], // ✅ HeroUI plugin activate
}


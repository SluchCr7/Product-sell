/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary : "var(--Red_Hat_Text)"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        accent: {
          Rose50: "hsl(20, 50%, 98%)",
          Rose100: "hsl(13, 31%, 94%)",
          Rose300: "hsl(14, 25%, 72%)",
          Rose400: "hsl(7, 20%, 60%)",
          Rose500: "hsl(12, 20%, 44%)",
          Rose900: "hsl(14, 65%, 9%)",
        }
      },
    },
  },
  plugins: [],
};

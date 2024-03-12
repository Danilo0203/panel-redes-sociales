/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "714px",
      lg: "924px",
      xl: "1120px",
      "2xl": "1288px",
      "3xl": "1498px",
    },
    extend: {
      colors: {
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        ToggleDark1: "hsl(210, 78%, 56%)",
        ToggleDark2: "hsl(146, 68%, 55%)",
        ToggleLightTheme: "hsl(230, 22%, 74%)",
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-Top": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
        "Desaturated-Blue": "hsl(228, 34%, 66%)",
        "White-Light": "hsl(0, 0%, 100%)",
        "Very-Pale-Blue": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue": "hsl(228, 12%, 44%)",
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
      },
      fontFamily: {
        Inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {},
    },
  },
  plugins: [],
};

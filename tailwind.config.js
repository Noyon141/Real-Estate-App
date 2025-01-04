/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:["Rubik-Regular","sans-serif"],
        "rubik-light":["Rubik-Light","sans-serif"],
        "rubik-medium":["Rubik-Medium","sans-serif"],
        "rubik-semibold":["Rubik-SemiBold","sans-serif"],
        "rubik-bold":["Rubik-Bold","sans-serif"],
        "rubik-extrabold":["Rubik-ExtraBold","sans-serif"],
      },
      colors:{
        primary:{
          "1":"#1A1A19",
          "2":"#373A40",
          "3":"#686D76",
        },
        accent:{
          100:"#fbfbfd",
        },
        danger:{
          DEFAULT: "#f75555"
        }
      }
    },
  },
  plugins: [],
  
  darkMode: 'class',
}
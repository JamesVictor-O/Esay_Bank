/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_desktop': "url('/src/components/assets/bg-intro-desktop.svg')",
        'hero-bg': "url('/src/assets/Hero.jpg')",
      },
      colors: {
        Dark_blue: 'hsl(233, 26%, 24%)',
        Lime_Green: 'hsl(136, 65%, 51%)',
        Bright_cran: 'hsl(192, 70%, 51%)',
        Grayish_blue: 'hsl(233, 8%, 62%)',
        Light_Grayish_blue: 'hsl(220, 16%, 96%)',
        Light_Gray: 'hsl(0, 0%, 98%)',
        White: "hsl(0, 0%, 100%)",
        inTransit: '#139A0748',
      },
    },
  },
  plugins: [],
}


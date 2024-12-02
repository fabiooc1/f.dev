/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#000',
        'gray-300': '#333',
        'green-100': '#CAEBCF',
        'green-500': '#2ECC71',
        'white-400': '#f4f4f4',
        'white-900': '#f9f9f9',
      },
      fontFamily: {
        baloo_bhai_2: 'Baloo Bhai 2, sans-serif',
        raleway: 'Raleway, sans-serif',
      },
      screens: {
        mobile: {
          max: "640px"
        },
        tablet: {
          min: "641px",
          max: "768px"
        },
        laptop: {
          max: "1024px"
        },
      },
    },
  },
  plugins: [],
}


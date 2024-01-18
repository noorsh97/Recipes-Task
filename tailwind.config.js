/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gray4: "#757575",
      gainsboro: "#E1E1E1",
      solitude: "#F2F4F7",
      whiteSmoke: "#F5F5F5",
      fontFamily: {
        custom: ['Cairo', 'sans'],
      },
    },
  },
  plugins: [],
}


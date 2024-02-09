/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:'Inter_700Bold',
        subTitle: 'Inter_500Medium',
        body: 'Inter_400Regular'
      }
    },
  },
  plugins: [],
}


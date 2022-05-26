module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F28C18",
          secondary: "#6D3A9C",
          accent: "#51A800",
          neutral: "#1B1D1D",
          background: "#ffffff",
          color: "#222222",
          "base-100": "#000000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

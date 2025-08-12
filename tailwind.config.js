module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "70%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 5s ease-in-out",
      },
    },
  },
  plugins: [require('daisyui'),],
};



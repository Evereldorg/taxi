export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        DEFAULT: 'blur(10px)', // настройка по умолчанию для эффекта блюра
      },
      colors: {
        primary: "#000000", // черный
        secondary: "#FFCC00", // желтый
        white: "#FFFFFF", // белый
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: "translateY(50px)", opacity: 0 },
          '100%': { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};


@media (max-width: 768px) {
  .hero-content {
    padding: 20px;
  }
  .service-card {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  .service-card {
    font-size: 0.9rem;
  }
  .fleet-card {
    height: 300px;
  }
}
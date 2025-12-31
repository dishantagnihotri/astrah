/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        astrah: {
          // BRAND ACCENTS
          primary: "#00E5FF", // Aqua Neon
          gradientStart: "#6A7CFF", // Blue
          gradientEnd: "#BC7BFF", // Violet
          // DARK THEME
          darkBg: "#0B0F17",
          darkCard: "#111620",
          darkBorder: "#1E242D",
          darkTextPrimary: "#FFFFFF", // 90% opacity in CSS
          darkTextSecondary: "#D2D6DE",
          // LIGHT THEME
          lightBg: "#F8FBFD",
          lightCard: "#FFFFFF",
          lightBorder: "#E5E8EC",
          lightTextPrimary: "#0A0F16",
          lightTextSecondary: "#556074",
          // STATUS COLORS
          success: "#00C78A",
          warning: "#FFB84D",
          error: "#FF5263",
        },
      },
      backgroundImage:{
        'astra-gradient-accent' : "var(--astra-gradient-accent)",
        'astra-gradient-aqua' : "var(--astra-gradient-aqua)"
      },
      boxShadow: {
        astra: {
          "shadow-card-dark": "0px 4px 18px rgba(0, 0, 0, 0.45)",
          "shadow-card-light": "0px 4px 22px rgba(0, 0, 0, 0.08)",
          'glow-aqua': 'var(--astra-glow-aqua)'
        },
      },
      borderRadius: {
        astra: {
          "radius-card": "14px",
          "radius-button": "8px",
          "radius-input": "10px",
          "radius-orb": "100%",
        },
      },
    },
  },
  plugins: [],
};

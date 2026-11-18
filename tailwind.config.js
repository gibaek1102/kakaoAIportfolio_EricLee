module.exports = {
  content: ["./src/App.tsx"],
  theme: {
    extend: {
      // Single accent: the sky scale is replaced with indigo so every existing sky-* class picks up one restrained accent.
      colors: {
        sky: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8",
          500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b"
        }
      }
    }
  },
  plugins: []
};

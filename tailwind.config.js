module.exports = {
  content: ["./src/App.tsx"],
  theme: {
    extend: {
      // Single accent: the sky scale is replaced with indigo so every existing sky-* class picks up one restrained accent.
      colors: {
        sky: { 50:"#f5f0ff",100:"#ebe0ff",200:"#d6c2ff",300:"#b595ff",400:"#9161f7",500:"#5e17eb",600:"#4d12c4",700:"#3d0ea0",800:"#2d0b7a",900:"#1f0854",950:"#12053a" }
      }
    }
  },
  plugins: []
};

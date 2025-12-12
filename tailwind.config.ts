import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",    
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],  
        serif: ["var(--font-serif)"], 
      },
      colors: {
        brand: {
          light: "#EAF4FC",   
          DEFAULT: "#3B82F6", 
          dark: "#1E3A8A",    
          success: "#22C55E", 
          text: "#1F2937",    
        }
      }
    },
  },
  plugins: [],
};
export default config;
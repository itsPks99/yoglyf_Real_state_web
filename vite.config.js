import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Ensures the frontend is built correctly for Vercel
    emptyOutDir: true, // Clean old builds
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Proxy API requests during development
    },
  },
});

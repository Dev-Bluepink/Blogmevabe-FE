import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/auth": {
        target: "https://forum-hngc.onrender.com",
        changeOrigin: true,
        secure: true, // Since you're accessing an HTTPS endpoint, it's recommended to set secure to true
      },
    },
  },
});

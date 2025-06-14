import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: './', // to deploy to GitHub Pages without custom domain
  server: {
    host: "0.0.0.0",
    proxy: {
      "/socket.io": {
        target: "http://127.0.0.1:8080/socket.io",
        changeOrigin: true,
        ws: true,
      },
    },
  },
  plugins: [basicSsl(), tailwindcss(), solid()],
});

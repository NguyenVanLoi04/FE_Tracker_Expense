import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["admin-tracker-expense-production.up.railway.app"],
  },
  preview: {
    host: true,
    port: 4173,
  },
});

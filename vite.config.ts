import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    port: 3000
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    WindiCSS(),
    AutoImport({
      imports: ["vue", "vue/macros"],
      dts: true,
    }),
    Components({
      dts: true,
    }),
    Icons({ autoInstall: true }),
  ]
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: join(currentDir, "./app/components/ui"),
  },
  tailwindcss: {
    configPath: join(currentDir, "./tailwind.config.js"),
    cssPath: join(currentDir, "./app/assets/css/tailwind.css"),
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  alias: {
    "@core": join(currentDir, "./framework"),
    "@/lib/utils": join(currentDir, "./app/lib/utils"),
    "@/components/ui": join(currentDir, "./app/components/ui"),
  },
});

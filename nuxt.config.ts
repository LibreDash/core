// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@vueuse/nuxt",
  ],
  components: [
    {
      path: join(currentDir, "./app/components"),
      ignore: [join(currentDir, "./app/components/ui")],
    },
    {
      path: join(currentDir, "./app/components/ui"),
      extensions: [".vue"],
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    configPath: join(currentDir, "./tailwind.config.js"),
    cssPath: join(currentDir, "./app/assets/css/tailwind.css"),
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  icon: {
    mode: "svg",
  },
  alias: {
    "@core": join(currentDir, "./framework"),
    "@/lib/utils": join(currentDir, "./app/lib/utils"),
    "@/components/ui": join(currentDir, "./app/components/ui"),
  },
});

import withNuxt from "./.playground/.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";

export default withNuxt(
  {
    settings: {
      tailwindcss: {
        config: useNuxtApp().tailwindcss.configPath,
      },
    },
  },
  ...tailwind.configs["flat/recommended"],
  prettier,
);

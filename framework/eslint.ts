import type { Linter } from "eslint";
import type {
  ResolvableFlatConfig,
  FlatConfigComposer,
} from "eslint-flat-config-utils";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

import withNuxt from "../.playground/.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";

const currentDir = dirname(fileURLToPath(import.meta.url));

export function withLibreDash(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.Config> {
  return withNuxt(
    ...configs,
    {
      settings: {
        tailwindcss: {
          config: join(currentDir, "./tailwind.config.js"),
        },
      },
    },
    ...tailwind.configs["flat/recommended"],
    prettier,
  );
}

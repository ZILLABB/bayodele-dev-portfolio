import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      // Optional: configure specific tailwindcss rules
      // 'tailwindcss/classnames-order': 'warn',
      // 'tailwindcss/no-custom-classname': 'warn',
      // 'tailwindcss/no-contradicting-classname': 'error',
      ...tailwindcssPlugin.configs.recommended.rules // Apply recommended rules
    },
    // If your linter still doesn't recognize Tailwind directives in CSS files,
    // you might need to tell ESLint to parse .css files or use a CSS-specific linter like Stylelint.
    // For now, this focuses on Tailwind classes in JS/TSX.
  }
];

export default eslintConfig;

import nextPlugin from "eslint-config-next";

const eslintConfig = [
  ...nextPlugin,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "storybook-static/**", "node_modules/**"],
  },
];

export default eslintConfig;

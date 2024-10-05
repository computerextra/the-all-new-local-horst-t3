/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;

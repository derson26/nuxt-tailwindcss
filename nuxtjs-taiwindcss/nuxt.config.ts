export default defineNuxtConfig({
    alias: {
        // '@': resolve(__dirname, '/'),
        assets: "/<rootDir>/assets"
    },
    css: [
        "~/assets/main.css",
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })

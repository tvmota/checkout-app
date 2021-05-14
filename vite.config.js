import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import autopreprocess from "svelte-preprocess";

const preprocess = autopreprocess({
  postcss: {
    plugins: [
      require('postcss-nested'),
      require("tailwindcss")
    ],
  },
});

export default defineConfig({
  plugins: [svelte({ preprocess })],
  optimizeDeps: {
    include: ['svelte-hero-icons'],
  },
});

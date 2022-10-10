import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image()],
  output: "server",
  adapter: vercel()
});
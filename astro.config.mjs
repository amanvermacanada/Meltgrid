import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://meltgridcanada.ca",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/homepage-concept"),
    }),
  ],
});

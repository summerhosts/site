// @ts-check
import { defineConfig } from "astro/config";

import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://summerhosts.netlify.app",
  integrations: [sitemap({ changefreq: ChangeFreqEnum.MONTHLY })], // https://docs.astro.build/en/guides/integrations-guide/sitemap/
});

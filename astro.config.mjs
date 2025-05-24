// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import starlightImageZoom from "starlight-image-zoom";
// import starlightLinksValidator from "starlight-links-validator";
import starlightScrollToTop from "starlight-scroll-to-top";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://boranuzun.github.io",
  base: "/homelab-test/",
  integrations: [
    starlight({
      title: "homelab-docs",
      logo: {
        replacesTitle: true,
        light: "./src/assets/homelab-light.svg",
        dark: "./src/assets/homelab-dark.svg",
      },
      favicon: "/images/favicon.svg",
      head: [
        // Ajouter une icône ICO de secours pour Safari.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/images/favicon.ico",
            sizes: "32x32",
          },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
      lastUpdated: true,
      defaultLocale: "root",
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: "English",
          lang: "en",
        },
        // French docs in `src/content/docs/fr/`
        fr: {
          label: "French",
          lang: "fr",
        },
      },
      components: {
        // Header: "./src/components/CustomHeader.astro",
        // LanguageSelect: "./src/components/CustomLanguageSelect.astro",
        ThemeSelect: "./src/components/CustomThemeSelect.astro",
      },
      expressiveCode: {
        // https://expressive-code.com/guides/themes/
        // themes: ["dracula", "starlight-light"],
        // useStarlightDarkModeSwitch: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/boranuzun/homelab-docs",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "intro/",
        },
        {
          label: "Encryption",
          autogenerate: { directory: "encryption" },
        },
        {
          label: "OpenTofu",
          autogenerate: { directory: "opentofu" },
        },
      ],
      customCss: ["./src/styles/global.css"],
      editLink: {
        baseUrl: "https://github.com/boranuzun/homelab-docs/tree/main/",
      },
      plugins: [
        // https://github.com/HiDeoo/starlight-image-zoom
        starlightImageZoom(),
        // https://github.com/frostybee/starlight-scroll-to-top
        starlightScrollToTop({
          tooltipText: "Back to top",
          showTooltip: true,
          svgPath: "M5 15L12 8L19 15",
          borderRadius: "25",
        }),
        // starlightLinksValidator(),
      ],
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-FR",
        },
      },
      // Custom serialize function to fix malformed URLs
      serialize: (item) => {
        // Remove duplicate base URLs from malformed URLs
        let cleanUrl = item.url;
        const baseUrl = "https://boranuzun.github.io/homelab-test/";

        // Fix URLs that have the base URL duplicated
        if (cleanUrl.includes(baseUrl + "https://")) {
          cleanUrl = cleanUrl.replace(
            baseUrl + "https://boranuzun.github.io/homelab-test/",
            baseUrl
          );
        }

        return {
          url: cleanUrl,
          changefreq: item.changefreq,
          lastmod: item.lastmod,
          priority: item.priority,
        };
      },
      // Filter out malformed URLs
      filter: (page) => {
        return (
          !page.includes("/404") &&
          page.startsWith("https://boranuzun.github.io/homelab-test/")
        );
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

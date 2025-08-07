// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlightImageZoom from "starlight-image-zoom";
// import starlightLinksValidator from "starlight-links-validator";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightScrollToTop from "starlight-scroll-to-top";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://boranuzun.github.io",
  base: "/homelab-docs/",
  integrations: [
    starlight({
      title: "homelab-docs",
      logo: {
        replacesTitle: true,
        light: "./src/assets/homelab-light.svg",
        dark: "./src/assets/homelab-dark.svg",
      },
      favicon: "/favicon.svg",
      head: [
        // Ajouter une icône ICO de secours pour Safari.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
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
        // ThemeSelect: "./src/components/CustomThemeSelect.astro",
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
          label: "OpenTofu",
          autogenerate: { directory: "opentofu" },
        },
        {
          label: "Encryption",
          autogenerate: { directory: "encryption" },
        },
        {
          label: "NixOS",
          autogenerate: { directory: "nixos" },
        },
        {
          label: "Containers",
          autogenerate: { directory: "containers" },
        },
        {
          label: "CI/CD",
          autogenerate: { directory: "cicd" },
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
        starlightDocSearch({
          appId: "4Y838HGCJW",
          apiKey: "8719430c9c01ad3075584f20f8b04d76",
          indexName: "boranuzunio",
          insights: true,
        }),
        // https://github.com/HiDeoo/starlight-theme-rapide
        starlightThemeRapide(),
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
        const baseUrl = "https://boranuzun.github.io/homelab-docs/";

        // Fix URLs that have the base URL duplicated
        if (cleanUrl.includes(baseUrl + "https://")) {
          cleanUrl = cleanUrl.replace(
            baseUrl + "https://boranuzun.github.io/homelab-docs/",
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
          page.startsWith("https://boranuzun.github.io/homelab-docs/")
        );
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

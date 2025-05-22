// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightImageZoom from "starlight-image-zoom";
import starlightScrollToTop from "starlight-scroll-to-top";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      logo: {
        light: "./src/assets/homelab-light.svg",
        dark: "./src/assets/homelab-dark.svg",
      },
      favicon: "/images/favicon.svg",
      //   defaultLocale: "en",
      //   locales: {
      //     // English docs in `src/content/docs/en/`
      //     en: {
      //       label: "English",
      //     },
      //     // French docs in `src/content/docs/fr/`
      //     fr: {
      //       label: "French",
      //       lang: "fr",
      //     },
      //   },
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
          autogenerate: { directory: "introduction" },
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
          threshold: 30,
          svgPath: "M12 4L7 9H9V16H15V9H17L12 4M10 16L12 20L14 16",
        }),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

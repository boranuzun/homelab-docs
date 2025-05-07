import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import type { PluginOptions as SearchLocalOptions } from "@easyops-cn/docusaurus-search-local";

const chConfig = {
  components: { code: "MyCode" },
  syntaxHighlighting: {
    theme: "github-dark",
  },
};

const searchLocalOptions = {
  hashed: true,
  // language: ["en", "zh"], // Optional
  // forceIgnoreNoIndex: true, // Optional
};

const config: Config = {
  title: "homelab-docs",
  tagline: "devops homelab",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://boranuzun.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/homelab-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "boranuzun", // Usually your GitHub org/user name.
  projectName: "homelab-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          beforeDefaultRemarkPlugins: [[remarkCodeHike, chConfig]],
          recmaPlugins: [[recmaCodeHike, chConfig]],
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "homelab-docs",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "localeDropdown",
          sidebarId: "localeDropdown",
          position: "right",
          label: "Languages",
        },

        // { to: "/blog", label: "Blog", position: "left" },
        
        // {
        //   href: "https://github.com/boranuzun/homelab-docs",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "light",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Tutorial",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       // {
      //       //   label: "Blog",
      //       //   to: "/blog",
      //       // },
      //       {
      //         label: "homelab-docs",
      //         href: "https://github.com/boranuzun/homelab-docs",
      //       },
      //       {
      //         label: "homelab-infra",
      //         href: "https://github.com/boranuzun/homelab-infra",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Boran UZUN. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      searchLocalOptions,
    ],
  ],
};

export default config;

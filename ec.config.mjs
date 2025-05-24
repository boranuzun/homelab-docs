import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
  defaultProps: {
    // Disable line numbers by default
    showLineNumbers: false,
    // But enable line numbers for certain languages
    overridesByLang: {
      "js,ts,html,yaml,json": {
        showLineNumbers: true,
      },
    },
  },
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "🏗 Scaffold-Stylus | Docs",
  tagline: "Open-source toolkit for building dapps",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.scaffoldstylus.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Arb-Stylus",
  projectName: "scaffold-stylus",
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        includeParentCategoriesInPageTitle: true,
      },
    ],
  ],
  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      async: true,
      defer: true,
      "data-domain": "docs.scaffoldstylus.io",
    },
  ],

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // sidebarCollapsible: false,
          sidebarCollapsed: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Arb-Stylus/scaffold-stylus-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/thumbnail.jpg",
      navbar: {
        title: "Scaffold-Stylus | Docs",
        logo: {
          alt: "scaffold-stylus-logo",
          src: "img/logo.svg",
        },
        items: [
          // commented until Scaffold-Stylus website is launched
          // {
          //   href: 'https://scaffoldstylus.io/',
          //   label: 'Scaffold-Stylus Website',
          //   position: 'left',
          // },
          {
            href: "https://github.com/Arb-Stylus/scaffold-stylus-docs",
            label: "GitHub Docs",
            position: "right",
          },
          {
            href: "https://github.com/Arb-Stylus/scaffold-stylus",
            label: "GitHub Scaffold-Stylus",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Built with ♥ at BuidlGuidl",
            items: [
              {
                label: "BuidlGuidl Website",
                to: "https://buidlguidl.com/",
              },
              {
                label: "BuidlGuidl Twitter",
                to: "https://twitter.com/buidlguidl",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "Scaffold-Stylus GitHub",
                href: "https://github.com/Arb-Stylus/scaffold-stylus",
              },
              {
                label: "Docs GitHub",
                href: "https://github.com/Arb-Stylus/scaffold-stylus-docs",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/ScaffoldStylus",
              },
              {
                label: "Telegram",
                href: "https://t.me/joinchat/F7nCRK3kI93PoCOk",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@austingriffith3550/playlists",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scaffold-Stylus Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

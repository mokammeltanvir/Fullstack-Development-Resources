import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Fullstack Development Resources",
  description: "Resources of fullstack development in Bengali and English",
  head: [["link", { rel: "icon", href: "/docs/public/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Resources", link: "/resources" },
      { text: "Contributors", link: "/contributor" },
    ],

    sidebar: [
      {
        text: "All Resources",
        items: [
          { text: "Programming", link: "/programming" },
          { text: "Laravel", link: "/laravel/index" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mokammeltanvir",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/mokammeltanvir",
      },
      {
        icon: "facebook",
        link: "https://facebook.com/mokammelhossaintanvir",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/mokammeltanvir/",
      },
      {
        icon: "website",
        link: "https://mokammeltanvir.me/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Mokammel Tanvir",
    },
  },
});

require("dotenv").config();

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@elegantstack/gatsby-theme-flexiblog-minimal-v2",
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        sources: {
          contentful: true,
          local: false,
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: "ServerlessPros",
    name: "ServerlessPros",
    description:
      "Our team drives to bring serverless technology to your front door",
    address: "US",
    email: "contact@serverlesspros.com",
    phone: "+1 (888) 888-8888",

    //Site Social Media Links
    social: [
      {
        name: "Github",
        url: "https://github.com/serverlesspros",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/serverlesspros",
      },
      {
        name: "Instagram",
        url: "https://github.com/gatsbyjs",
      },
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: "Home",
        slug: "/",
      },
      {
        name: "Contact",
        slug: "/contact",
      },
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: "Quick Links",
        items: [
          {
            name: "About Us",
            slug: "/about",
          },
          {
            name: "Contact Us",
            slug: "/contact",
          },
        ],
      },
      {
        title: "Legal Stuff",
        items: [
          {
            name: "Privacy Notice",
            slug: "/",
          },
          {
            name: "Cookie Policy",
            slug: "/",
          },
          {
            name: "Terms Of Use",
            slug: "/",
          },
        ],
      },
    ],
  },
};

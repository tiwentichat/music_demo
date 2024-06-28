module.exports = {
  title: 'Guide.TripinChina.Help',
  tagline: 'Developing with Docusaurs',
  url: 'https://tripinChina.Help',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tripinChina.Help',
  projectName: 'Guide.TripinChina.Help',
  onBrokenLinks: 'ignore',

  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans', 'fr', 'ru', 'ko'],


  localeConfigs: {
    en: {
      label: 'English',
      direction: 'ltr',
    },
    'zh-Hans': {
      label: '中文',
      direction: 'ltr',
    },
    
},

  },
  
  themeConfig: {
    prism: {
      darkTheme: require('./src/theme/prism-dark-theme-chialisp'),
      theme: require('./src/theme/prism-light-theme-chialisp'),
    },

    
    navbar: {
      title: 'Guide.TripinChina.Help',
      logo: {
        alt: 'TripinChina.Help Logo',
        src: 'img/logo.svg',
      },
      items: [
        
        {
          href: 'https://tripinChina.Help',
          label: 'Cover Page',
          position: 'left',
        },
       
        {
            type: 'localeDropdown',
            position: 'right',
          },
        
        

      ],
    },
   
    footer: {
      style: 'dark',
      
      
      copyright: `© ${new Date().getFullYear()} <a href="https://tripinChina.Help" target="_blank">TripinChina.Help</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],
  scripts: [
    {
      src: '/js/matomo.js',
      async: true,
      defer: true,
    },
  ],
};

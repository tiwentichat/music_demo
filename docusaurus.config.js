module.exports = {
  title: 'Sunodemo.GowithAI.Help',
  tagline: 'Developing with Docusaurs',
  url: 'https://Sunodemo.GowithAI.Help',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Sunodemo.GowithAI.Help',
  projectName: 'Sunodemo.GowithAI.Help',
  onBrokenLinks: 'ignore',

  trailingSlash: true,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en','zh-Hans'],


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
      title: 'Sunodemo.GowithAI.Help',
      logo: {
        alt: 'TripinChina.Help Logo',
        src: 'img/logo.svg',
      },
      items: [
        
        {
          href: 'https://sunotag.gowithai.help',
          label: 'Suno-Tag-Selector | 标签选择器',
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

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSergo',
  tagline: 'An open, language-agnostic cloud-native microservice governance specification',
  url: 'https://opensergo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  trailingSlash: true,

  organizationName: 'opensergo', // Usually your GitHub org/user name.
  projectName: 'opensergo.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: "English",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      "zh-cn": {
        label: "简体中文",
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 
            'https://github.com/opensergo/opensergo.github.io/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/opensergo/opensergo.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-48TJZ5FK9M',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        //title: 'OpenSergo',
        logo: {
          alt: 'OpenSergo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-opensergo/intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://developer.aliyun.com/ebook/7565?spm=opensergo-website.topbar.0.0.0', label: 'Microservices Governance Technology Whitepaper', position: 'left'},
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: 'https://github.com/opensergo/opensergo-specification',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/what-is-opensergo/intro',
              },
              {
                label: 'Quick Start',
                to: '/docs/quick-start/quick-start-dashboard',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label:'Dingtalk Group(34826335)',
                to: '/docs/community/opensergo-community/#dingtalk',
              },
              {
                label:'WeChat Group',
                to: '/docs/community/opensergo-community/#wechat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opensergo/opensergo-specification',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} OpenSergo Authors. Built with Docusaurus.`,
      },
      // Refer https://docusaurus.io/docs/seo#global-metadata
      metadata: [
        {
            name: 'keywords',
            content: 'OpenSergo,OpenSergo官网,微服务治理,服务治理,微服务,Sentinel,限流,熔断,全链路灰度,无损上下线,microservice governance'
        },
    ],
      prism: {
        additionalLanguages: ['java'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [

      // 接入开源官网的流量统计
      [
          'docusaurus-plugin-includes',
          {
              injectedHtmlTags: {
                  headTags: [
                      {
                          tagName: 'meta',
                          attributes: {
                              // For Baidu SEO
                              name: 'baidu-site-verification',
                              content: 'code-5EKRXnGHhT',
                          },
                      },
                      {
                        tagName: 'meta',
                        attributes: {
                            name: 'aes-config',
                            content: 'pid=xux-opensource&user_type=101&uid=&username=&dim10=OpenSergo',
                        },
                    },
                  ],
                  preBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
                            id: 'beacon-aplus',
                            exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
                        },
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
                        },
                    },
                ],
              }
          },
      ],
    ],
    scripts: [
      {
        src: '//g.alicdn.com/mamba/assets/0.0.8/mse-arc-ui.min.js',
      },
    ],
    stylesheets: [
      {
        href: '//g.alicdn.com/mamba/assets/0.0.8/mse-arc-ui.min.css',
      },
    ],
};

module.exports = config;

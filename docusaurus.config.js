const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Forcode',
  tagline: 'Somos um Instituto de pesquisa focado em tecnologias Tokens e Cryptoativos',
  url: 'https://forcode.com.br/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'FORCODE',
  projectName: 'site',
  titleDelimiter: '- ',
  themeConfig: {
    navbar: {
      title: 'Forcode',
      logo: {
        alt: 'ForCode Logo',
        src: 'img/logo.svg'
      },
      items: [
        { to: '/wiki', label: 'Inicio', position: 'left' },
        { to: '/html', label: 'Html', position: 'left' },
        { to: '/blockchain-development-tutorials', label: 'Tutoriais', position: 'left' },
        { to: '/blockchain-development-tools', label: 'Ferramentas', position: 'left' },
        { to: '/blockchain-developer-jobs', label: 'Jobs', position: 'left' },
        {
          href: '#',
          label: 'Discord',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Blockchain Development Tutorial',
              to: '/wiki/blockchain-development-tutorial'
            },
            {
              label: 'Tutorials',
              to: '/blockchain-development-tutorials'
            },
            {
              label: 'Tools',
              to: '/blockchain-development-tools'
            },
            {
              label: 'Jobs',
              to: '/blockchain-developer-jobs'
            },
            {
              label: 'Testnet Faucets',
              to: '/blockchain-testnet-faucets'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://cryptodevhub.io/discord'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cryptodevhub'
            }
          ]
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cryptodevhub'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Instituto Forcode | Pesquisa e desenvolvimento de tecnologias`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cryptodevhub/site/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsDir: 'wiki',
        docsRouteBasePath: '/wiki'
      }
    ]
  ],
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "792c3446689844a497532f469b2d394b"}'
    }
  ]
}

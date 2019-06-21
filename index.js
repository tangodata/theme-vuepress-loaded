//const path = require('path')

module.exports = (options, ctx) => ({
  extend: '@vuepress/theme-default',

////////////////////////////////////
// Stylesheet includes
// bulma
// fontawesome
////////////////////////////////////

  head: [
    ['link', {
      rel: "icon",
      href: "/favicon.ico"
    }],
/*
    ['link', {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/assets/favicons/apple-touch-icon.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/favicons/favicon-32x32.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/assets/favicons/favicon-16x16.png"
    }],
    ['link', {
      rel: "manifest",
      href: "/assets/favicons/site.webmanifest"
    }],
    ['link', {
      rel: "mask-icon",
      href: "/assets/favicons/safari-pinned-tab.svg",
      color: "#3a0839"
    }],
    ['link', {
      rel: "shortcut icon",
      href: "/assets/favicons/favicon.ico"
    }],
    ['meta', {
      name: "msapplication-TileColor",
      content: "#3a0839"
    }],
    ['meta', {
      name: "msapplication-config",
      content: "/assets/favicons/browserconfig.xml"
    }],
    ['meta', {
      name: "theme-color",
      content: "#ffffff"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
      crossorigin: 'anonymous'
    }]
  ],
*/

////////////////////////////////////
// Vuepress Plugins -- add features
// clean url, dehydrate,
// name chunks, PWA,
// medium zoom, nprogress
// back to top,
// sitemap, feed, seo,
// add comments vssue
////////////////////////////////////

plugins: [
    'clean-urls',
    'named-chunks',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    ['dehydrate',{
      //noSSR: '404.html',
      //noScript: '**/*.html'
      //without script, does slide menu work?
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }],
    'seo',
    'sitemap',

  /*:
    'vuepress-plugin-blog-multidir',
    'blog-multidir',
    'alias',
    'tabs',

    ['@vuepress/blog', {
      postsDir: 'posts',
      permalink: '/:year/:month/:slug'
    }],

    ['container', {
      type: 'right',
      defaultTitle: '',
    }],

    ['container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
  */
  ],

////////////////////////////////////
// Markdown - add several syntax
// definition list
// attribute class
////////////////////////////////////

  markdown: {
    toc: { includeLevel: [1, 2] },
    anchor: { permalink: false },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-attrs'))
/*
      md.use(require('markdown-it-wikicustom')
        ({
          baseURL: '/wiki/',
          makeAllLinksAbsolute: true,
          htmlAttributes: {
            'class':'wikilink',
            'rel':'nofollow'
          }
        })
      )
*/
    },
  },

////////////////////////////////////
// Webpack modifications
// yaml, pug,
// sass, scss
////////////////////////////////////

configureWebpack: {
  module: {
    rules: [{
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    }]
  }
},

})
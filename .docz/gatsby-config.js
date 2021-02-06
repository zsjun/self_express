const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Z Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/zsj/work/zUi/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Z Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/zsj/work/zUi',
          templates:
            '/Users/zsj/work/zUi/node_modules/docz-core/dist/templates',
          docz: '/Users/zsj/work/zUi/.docz',
          cache: '/Users/zsj/work/zUi/.docz/.cache',
          app: '/Users/zsj/work/zUi/.docz/app',
          appPackageJson: '/Users/zsj/work/zUi/package.json',
          appTsConfig: '/Users/zsj/work/zUi/tsconfig.json',
          gatsbyConfig: '/Users/zsj/work/zUi/gatsby-config.js',
          gatsbyBrowser: '/Users/zsj/work/zUi/gatsby-browser.js',
          gatsbyNode: '/Users/zsj/work/zUi/gatsby-node.js',
          gatsbySSR: '/Users/zsj/work/zUi/gatsby-ssr.js',
          importsJs: '/Users/zsj/work/zUi/.docz/app/imports.js',
          rootJs: '/Users/zsj/work/zUi/.docz/app/root.jsx',
          indexJs: '/Users/zsj/work/zUi/.docz/app/index.jsx',
          indexHtml: '/Users/zsj/work/zUi/.docz/app/index.html',
          db: '/Users/zsj/work/zUi/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)

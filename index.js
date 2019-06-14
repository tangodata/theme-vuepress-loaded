module.exports = {
  extend: '@vuepress/theme-default',
  configureWebpack: {
/*
    resolve: {
      alias: {
        'Data': path.resolve(__dirname, '../../data'),
        'Bundle': path.resolve(__dirname, '../../bundle')
      },
    },
*/
    module: {
      rules: [{
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      }]
    }
  },
}
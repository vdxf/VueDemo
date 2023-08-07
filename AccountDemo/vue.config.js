const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:true,
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})


const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // 自定义网页图标
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico'
    }
  },
  // 自定义网页标题
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '观光车调度系统' // 自定义的网页标题
      return args
    })
  }
})

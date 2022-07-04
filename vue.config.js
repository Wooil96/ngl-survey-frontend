const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
    // api 요청이 이쓸 때 어디에서 처리할지를 설정
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/public', // 배포 파일의 위치를 지정
})

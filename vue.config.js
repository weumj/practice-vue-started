const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      extensions: ['vue', 'vuex', 'ts', 'js', 'json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          ws: true,
          changeOrigin: true,
        },
      },
    },
  },
};

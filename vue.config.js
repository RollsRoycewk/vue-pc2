const path = require("path");

module.exports = {
  // 当前配置会和vue 的webpack合并
  // 配置路径别名(可以简写路径)
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@views": path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
  // 修改了配置,一定要重启才生效
  devServer: {
    proxy: {
      "api/": {
        target: "http://182.92.128.115", // 允许跨域
        changeOrigin: true,
        // pathRewrite: {  // 重写路径
        //   "^api": "",
        // },
      },
    },
  },
};

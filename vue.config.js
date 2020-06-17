module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/_variables.scss";
        @import "~@/scss/_mixins.scss"; `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    }
  }
};

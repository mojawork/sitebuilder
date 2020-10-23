module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    disableHostCheck: true,
    https: false,
    hot: true,
    overlay: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  devServer: {
    public: 'localhost:8082',
    disableHostCheck: true,
    host: 'localhost',
    port: 8082,
  },
  configureWebpack: {
    plugins: [
      // new TsconfigPathsPlugin({
      //   /* options: see below */
      // }),
    ],
  },
};

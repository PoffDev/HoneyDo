module.exports = {

  // will allow errors in console to display on correct page and line
  devtool: 'source-map',

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "app/public/bundle.js",
    publicPath: './app/public'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader?name=/images/[name].[ext]"
      }
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit=10000'
      // } // inline base64 URLs for <=10k images, direct URLs for the rest
    ]
  }

}
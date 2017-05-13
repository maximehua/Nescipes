module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style!css?importLoaders=2&sourceMap&localIdentName=[local]__[hash:base64:5]!less-loader'
      },
      {
        test: /\.css/,
        loader: 'style!css?importLoaders=2&sourceMap&localIdentName=[local]__[hash:base64:5]'
      },
    ],
    loaders: [
      {
          test: /\.less/,
          loader: 'style!css!less',
      },
      {
          test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
          loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack',
      },
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

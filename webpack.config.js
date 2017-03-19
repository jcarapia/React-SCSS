const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: __dirname,
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         url: false
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
            loader: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
      }
    ]
  },
  plugins: [
    extractSass
  ]

}
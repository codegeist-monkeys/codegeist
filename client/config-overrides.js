const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: function(config, env) {
    // Uncomment these next 2 changes when developing
    // config.devtool = 'eval-source-map';
    // config.plugins = [
    //   new webpack.DefinePlugin({
    //       "process.env": {
    //           NODE_ENV: JSON.stringify("development")
    //       }
    //   })
    // ];
    config.entry = {
      "server": './src/index.js'
    };
    config.output = {
      path: path.resolve(__dirname, "../public/js"),
      filename: 'app.js',
      library: "app"
    };
    config.resolve = {
      extensions: ['.js', '.jsx', '.css']
    };
    config.module = {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
          }
          }
        },
        {
          test: /\.png$/,
          exclude: /node_modules/,
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: '/js'
            }
          }],
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader',
          ]
        },
      ]
    };
    return config;
  },


  paths: function(paths, env) {
    paths.appBuild = path.resolve(__dirname, '../public/js');
    return paths;
  }
}

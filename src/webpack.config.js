var path = require("path");
var webpack = require("webpack");


module.exports = {
    entry: './index.js',
    output: {
        path: path.join( __dirname, '../js' ),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                 exclude: /(node_modules|bower_components)/,
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                      presets: [
                         require.resolve('babel-preset-es2015'),
                         require.resolve('babel-preset-react'),
                               ]
                 }
             }
         ]
     },
     watch: true,
     stats: {
         colors: true
     },
     devServer: { inline: true },
     devtool: 'cheap-module-source-map'
 };
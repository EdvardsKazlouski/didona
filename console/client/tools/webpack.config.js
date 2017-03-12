var path = require('path');
var Webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '../src/index.es'),

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'index.js'
    },

    devtool: 'inline-source-map',

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            }, {
                test: /\.es$/,
                loader: 'babel-loader'
            }, {
                test: /\.ttf$/,
                loader: 'base64-font-loader'
                // loader: 'url-loader?limit=65000&mimetype=application/octet-stream'
                // loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },

    resolve: {
        extensions: [ '.js', '.es', '.scss' ],
        modules: [ path.resolve(__dirname, '../src'), path.resolve(__dirname, '../src/script'), path.resolve(__dirname, '../src/style'), 'node_modules']
    },

    plugins: []

};

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
}));

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
    }, output: {
        comments: false,
    }})
);

module.exports = webpackConfig;

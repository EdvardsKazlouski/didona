import Webpack from 'webpack';
import path from 'path';

// webpack plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

// constants
import { WEBPACK } from '../env/config';

export default [
    // new Webpack.optimize.CommonsChunkPlugin({
    //     name: [ WEBPACK.DEV_SERVER_VENDOR_NAME ],
    //     minChunks: Infinity,
    // }),

    new Webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
        title: 'Remote',
        template: path.join(__dirname, '../../src/templates/index.ejs'),
    }),
];

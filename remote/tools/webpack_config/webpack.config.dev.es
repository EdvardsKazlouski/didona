import path from 'path';

// constants
import { WEBPACK } from '../env/config';

// utils
import loaders from '../utils/loaders';
import resolve from '../utils/resolve';
import commonPlugins from '../plugins/common_plugins';
import devPlugins from '../plugins/dev_plugins';

export default {
    entry: {
        [WEBPACK.DEV_SERVER_APP_NAME]: [
            'webpack-dev-server/client?http://localhost:8899/',
            'webpack/hot/dev-server',
            path.join(__dirname, '../../index.web.js'),
        ]
    },

    output: {
        path: WEBPACK.DEV_SERVER_PUBLIC_PATH,
        filename: '[name]-build.js',
        publicPath: WEBPACK.DEV_SERVER_PUBLIC_PATH,
    },

    module: {
        loaders,
    },

    resolve,

    plugins: devPlugins.concat(commonPlugins),
};

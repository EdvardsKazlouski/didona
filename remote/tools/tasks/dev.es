import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import CLC from 'cli-color';

// constants
import { WEBPACK } from '../env/config';
import WebpackDevConfig from '../webpack_config/webpack.config.dev';

const server = {
    port: WEBPACK.DEV_SERVER_PORT,
    host: WEBPACK.DEV_SERVER_HOST,

    options: {
        hot: true,

        publicPath: WEBPACK.DEV_SERVER_PUBLIC_PATH,

        stats: {
            colors: true,
            assets: false,
        },

        noInfo: true,

        historyApiFallback: {
            index: `${WEBPACK.DEV_SERVER_PUBLIC_PATH}index.html`,
        },
    },
};

const devServer = new WebpackDevServer(Webpack(WebpackDevConfig), server.options);

devServer.listen(
    WEBPACK.DEV_SERVER_PORT,
    WEBPACK.DEV_SERVER_HOST,
    (error) => {
        if (error) {
            console.log(error);
        }
        console.log(CLC.blue('\nWelcome to remote development.\n'));
    }
);

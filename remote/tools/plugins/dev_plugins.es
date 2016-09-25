import Webpack from 'webpack';
import CLC from 'cli-color';

export default [
    new Webpack.HotModuleReplacementPlugin(),

    new Webpack.SourceMapDevToolPlugin({
        exclude: 'node_modules',
        columns: true,
    }),

    function compileStartLogPlugin () {
        this.plugin('compile', () => {
            console.log(CLC.yellow('Build start.'));
        });
    },

    function compoleDoneLogPlugin () {
        this.plugin('done', (status) => {
            if (status.compilation.errors && status.compilation.errors.length) {
                console.log(CLC.red(status.compilation.errors));
            } else {
                console.log(CLC.blue('\nSuccess build.\n'));
            }

        });
    },
];

import path from 'path';

export default [
    {
        test: /\.(js|jsx|es)$/,
        loader: 'babel',
    }, {
        test: /\.json$/,
        loader: 'json',
    }
];

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const PRODUCTION = 'production';

module.exports = (env, argv) => {
    const environment = argv.mode;

    const plugins = [];

    if (environment === PRODUCTION) {
        plugins.push(
            new CopyPlugin([
                {
                    from: path.resolve(
                        __dirname,
                        'node_modules/photoeditorsdk/assets'
                    ),
                    to: path.resolve('src/libs/assets/photoeditor_assets'),
                },
                {
                    from: path.resolve(__dirname, 'src/react/assets'),
                    to: path.resolve('src/libs/assets/photoeditor_assets'),
                },
            ])
        );
    }

    return {
        mode: 'production',
        entry: './src/main.js',
        devtool: 'source-map',
        output: {
            path: path.resolve('src/libs/'),
            filename: '[name].js',
            publicPath: 'src/libs/',
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    };
};

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    module: {
        rules: [{
                "test": /\.html$/,
                "exclude": /\.styl$/,
                "loader": "raw-loader"
            },
            {
                enforce: 'post',
                test: /\.ts$/,
                use: { loader: 'istanbul-instrumenter-loader' },
                exclude: /(node_modules|.spec\.ts$)/
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: './src/tsconfig.spec.json'
                }
            },
            {
              test: /\.ts$/,
              loader: 'awesome-typescript-loader',
              options: {
                  configFileName: './src/tsconfig.spec.json'
              }
            },
            {
              test: /\.ts$/,
              use: ['angular2-template-loader']
            }
        ]
    },
    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(@angular|esm5)/, './src', {}),
        new CopyWebpackPlugin([{
            from: "./app/*/static/**/*",
            to: "./"
        }]),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            test: /\.(ts|js)($|\?)/i

        })
    ]
};

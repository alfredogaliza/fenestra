const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {

    mode: "production",

    entry: {
        "fenestra.bundle": "./build/js/index.js",
        "messages/ptbr": "./build/js/messages/pt-br.js",
        base: "./build/css/base.css",
        theme: "./build/css/theme.css"
    },

    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'dist/'),
        library: 'Fenestra',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
              }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': "ReactDOM"
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new IgnoreEmitPlugin(/(base|theme)\.js$/)
    ]

}
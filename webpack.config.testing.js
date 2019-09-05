const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {

    mode: "development",

    entry: {
        main: "./build/js/test.js",
        base: "./build/css/base.css",
        theme: "./build/css/theme.css"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'test')
    },

    devServer: {
        contentBase: path.join(__dirname, 'test'),
        compress: true,
        port: 9000
     },

    optimization: {
        minimize: false
    },

    externals: {
        'react': 'React',
        'react-dom': "ReactDOM"
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

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/test.html',
            excludeAssets: [/(base|theme)\.js/]
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new IgnoreEmitPlugin(/(base|theme)\.js$/),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
}
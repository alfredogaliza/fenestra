const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
module.exports = {

    mode: "production",

    entry: {
        fenestra: "./src/index.js",
        base: "./src/styles/base.scss",
        theme: "./src/styles/theme.scss"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'build/'),
        library: 'Fenestra',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
              }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': "ReactDOM"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new IgnoreEmitPlugin(/^(base|theme)\.bundle.js$/)
    ]

}
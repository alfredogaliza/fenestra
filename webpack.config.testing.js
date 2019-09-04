const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",

    entry: "./src/test.js",

    output: {
        filename: "main.js",
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

    module: {
        rules: [
            {
                test: /.jsx?/,
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
        new HtmlWebpackPlugin({
            template: 'src/templates/test.html'
        }),
        new MiniCssExtractPlugin()
    ],
}
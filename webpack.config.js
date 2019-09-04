const path = require('path');

module.exports = {

    entry: "./src/index.js",

    output: {
        filename: "fenestra.bundle.js",
        path: path.resolve(__dirname, 'build/'),
        library: 'Fenestra',
        libraryTarget: 'umd'
    },

    devServer: {
        contentBase: path.join(__dirname, 'example'),
        compress: true,
        port: 9000
     },

    optimization: {
        minimize: false
    },

    module: {
        rules: [{
            test: /.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    externals: {
        'react': 'React',
        'react-dom': "ReactDOM"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}
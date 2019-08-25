
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
        port: 5000,
        contentBase: path.join(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    
    externals: {
        'react': 'React'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}
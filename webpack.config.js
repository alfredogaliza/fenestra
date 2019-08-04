const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'js/fenestra.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',      
        publicPath: '/dist/',      
        umdNamedDefine: true 
    },
    externals: {
        // Don't bundle react or react-dom      
        react: {
            commonjs: "react",
            commonjs2: "react",
            //amd: "React",
            //root: "React"
        }
    },
    module: {
        rules: [
            { parser: { amd: false } },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
        alias: {            
            'react': path.resolve(__dirname, './node_modules/react')
        }
    },
}
const path = require('path');

const WRITE_DIR = path.resolve(__dirname, './public/');

const APP_DIR = path.resolve(__dirname, './module.jsx');

const version = 'v3.0.3';

module.exports = {
    devtool: false,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    cache: false,
    mode: 'development',
    entry: APP_DIR,
    output: {
        path: WRITE_DIR,
        publicPath: WRITE_DIR,
        filename: version + '.app.js',
        pathinfo: false
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    }
};
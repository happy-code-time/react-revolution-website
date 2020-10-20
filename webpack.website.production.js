const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

const JavaScriptObfuscator = require('webpack-obfuscator');

const Dotenv = require('dotenv-webpack');

const WRITE_DIR = path.resolve(__dirname, './public/');

const APP_DIR = path.resolve(__dirname, './website.jsx');

const version = 'v3.0.2';

module.exports = {
    devtool: false,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    cache: false,
    mode: 'production',
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
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
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
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'public/images'),
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    plugins: [
        new Dotenv(),
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        },
            /**
             * Exclude files
             */
            ['']
        )
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
        ],
    }
};
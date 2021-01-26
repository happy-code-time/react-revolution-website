const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    cache: false,
    entry: path.resolve(__dirname, 'website.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
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
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'public/images'),
                use: 'url-loader?limit=10000'
            }
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    plugins: [
        new Dotenv()
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.watch = true;
        config.watchOptions = {
            ignored: /node_modules/,
            poll: 1000
        };
        // config.devtool = 'eval-source-map';
        config.devtool = false;
        config.mode = 'development';
        config.output.filename = '16116511825217789770258561.js';
        config.performance = {
            hints: 'error'
        };
        config.optimization = {
            splitChunks: {}
        };
    }

    if (argv.mode === 'production') {
        config.devtool = false;
        config.mode = 'production';
        config.output.filename = '16116511825217789770258561.js';
        config.performance = {
            hints: false
        };
        config.optimization = {
            minimize: true,
            mangleWasmImports: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            mergeDuplicateChunks: true,
            flagIncludedChunks: true,
            concatenateModules: true,
            nodeEnv: 'production',
        }
    }

    return config;
};
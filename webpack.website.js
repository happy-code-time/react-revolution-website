const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const version = '4.0.3';

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
    const filename = 'v'+version+'.app.js';

    if (argv.mode === 'development') {
        config.watch = true;
        config.watchOptions = {
            ignored: /node_modules/,
            poll: 1000
        };
        config.devtool = 'eval-source-map';
        config.mode = 'development';
        config.output.filename = `${filename}`;
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
        config.output.filename = `${filename}`;
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
            minimizer: [
                new TerserPlugin({
                    test: /\.jsx|.js(\?.*)?$/i,
                    exclude: /\/node_modules/,
                    parallel: true,
                    terserOptions: {
                        nameCache: null,
                        ie8: true,
                        keep_fnames: false,
                        safari10: true,
                        keep_classnames: false,
                        extractComments: true,
                        ecma: 6
                    },
                    // minify: (file, sourceMap) => {
                    //     const uglifyJsOptions = {
                    //         compress: true,
                    //         ie8: false,
                    //         keep_fnames: false,
                    //         sourceMap: false,
                    //         warnings: false,
                    //         toplevel: false
                    //     };

                    //     if (sourceMap) {
                    //         uglifyJsOptions.sourceMap = {
                    //             content: sourceMap,
                    //         };
                    //     }

                    //     return require('uglify-js').minify(file, uglifyJsOptions);
                    // }
                }),
            ],
        }
    }

    return config;
};
const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const runSequence = require('gulp4-run-sequence');
const gulpSass = require("gulp-sass");
const fs = require("fs");
const run = require('gulp-run');
var exec = require('child_process').exec;
const { performance } = require('perf_hooks');

const timestamp = Math.floor(Date.now() / 1000);
const randomHash = `${timestamp}${Math.floor(Math.random() * 1000000)}${Math.floor(Math.random() * 1000000)}${Math.floor(Math.random() * 1000000)}`;

const modules = [
    "Accordion",
    "Articles",
    "ArticlesImages",
    "Astronaut404",
    "Breadcrumbs",
    "Cards",
    "CardsScroll",
    "CardsScrollCallback",
    "Clouds404",
    "CloudsMountains404",
    "Container",
    "CustomSuggestion",
    "DarkLines404",
    "DragDropArea",
    "DragDropList",
    "FullScreenListArray",
    "FullScreenListObject",
    "FullScreenOverlay",
    "GlobalMessages",
    "Icons",
    "InputAnimation",
    "InputFile",
    "InputFileDragDrop",
    "InputSuggestionArray",
    "InputSuggestionObject",
    "Lightbulb404",
    "ListSwitch",
    "LoadingBoxTop",
    "LoadOnScroll",
    "Menu",
    "MenuDropDown",
    "MenuHeight",
    "MenuHoverX",
    "MenuHoverY",
    "Modal",
    "Overlay",
    "PagerDynamic",
    "PagerStatic",
    "Picture404",
    "PopupBox",
    "PopupData",
    "PopupHover",
    "ReadMore",
    "ReadMoreCallback",
    "Ribbon",
    "RibbonMultiple",
    "ScrollTo",
    "SideBar",
    "Slider",
    "SliderCards",
    "SliderFullscreen",
    "SliderItems",
    "SourceCode",
    "Stars",
    "Steps",
    "StepsGenerator",
    "StepsGeneratorDragDrop",
    "Table",
    "TextWriter",
    "Timeline",
    "TimelineList",
    "Water404",
    // Functions
    "Functions/addGlobalMessage",
    "Functions/disableHtmlScroll",
    "Functions/enableHtmlScroll",
    "Functions/isObject",
    "Functions/scrollTopListener",
    "Functions/urlExtract",
    "Functions/uuid"
];

const removeDirs = [
    './public/**/*',
    './react-revolution/_Configurations/**/*',
    './react-revolution/Functions/**/*',
    './react-revolution/Functions',
];

modules.map( dirAndModuleName => {
    removeDirs.push(`./react-revolution/${dirAndModuleName}/index.js`);
    removeDirs.push(`./react-revolution/${dirAndModuleName}`);
});

/**
 * Clean
 */
gulp.task('clean', function (done) {
    del.sync(removeDirs,
        {
            dot: true
        });
    done();
});

/**
 * Clean css files
 */
gulp.task('clean:css', function (done) {
    del.sync(
        [
            './public/css/**/*',
            './public/css',
        ],
        {
            dot: true
        });
    done();
});

/**
 * Compress images
 */
gulp.task('compress:images', function (done) {
    gulp.src('./ImagesToCompress/*.{png,jpg,jpeg,gif,ico}')
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest('./public/images'));
        done();
});

/**
 * Copy font awesome
 */
gulp.task('copy:ff', function (done) {
    gulp.src([
        './fontawesome-free-5.12.1-web/**/*'
    ])
        .pipe(gulp.dest('./public/fontawesome-free-5.12.1-web/'));
    done();
});

gulp.task('copy:css:scss:modules', (done) => {
    // Copy global scss files 
    gulp.src(`react-revolution/_Sass/**/*.scss`).pipe(gulp.dest(`react-revolution/scss/`));
    console.log('Copy sass files done');
    // Copy global css files 
    gulp.src("react-revolution/_Sass/**/*.scss").pipe(gulpSass({ outputStyle: "compressed" })).pipe(gulp.dest("react-revolution/css/"));
    console.log('Copy css files done');
    done();
});


const buildModuleProduction = (filename, cb) => {
    return new Promise( (resolve, reject) => {
        exec('cd react-revolution && node ./node_modules/webpack/bin/webpack.js --config ./_Configurations/' + filename + ' --module-bind js=babel-loader', function (err, stdout, stderr) {
            console.log(stderr);
            cb(err);

            if(err){
                reject(err)
            }
            else{
                resolve(true);
            }
        });
    })
};

gulp.task('create:webpack:files', async function(cb){

    const timeStart = performance.now();
    const info = [];

    for(let x = 0; x <= modules.length-1; x++){
        const moduleName = modules[x];
        const innerStart = performance.now();

        let filename = "webpack.config." + moduleName + ".production.js";
        let entry  = `'./_Modules/${moduleName}/index.js'`;
        let outputPath = `path.resolve(__dirname, '../${moduleName}')`;

        if(-1 !== moduleName.indexOf('Functions/')){
            const fnName = moduleName.replace('Functions/', '');
            filename = "webpack.config.function." + fnName + ".production.js";
            entry  = `'./_Functions/${fnName}.js'`;
            outputPath = `path.resolve(__dirname, '../Functions/${fnName}')`;
        }

        let data = `
        const TerserPlugin = require('terser-webpack-plugin');
        const Dotenv = require('dotenv-webpack');
        const path = require('path');

        module.exports = {
        optimization: {
            minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                ecma: undefined,
                warnings: false,
                parse: {},
                compress: {},
                mangle: true,
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
                }
            }),
            ],
        },
        cache: false,
        mode: 'production',
        entry: `+entry+`,
        output: {
            path: `+outputPath+`,
            filename: 'index.js',
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, '**/*'),
                    exclude: /(node_modules|bower_components|public|production.js|_Sass)/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                    ]
                }
                ]
            },
            externals: {
                'react': 'commonjs react'
            },
            plugins: [
                new Dotenv(),
            ]
        };`;

        fs.writeFile("./react-revolution/_Configurations/" + filename, data, cb);
        run('clear').exec();

        await buildModuleProduction(filename, cb)
        .then( () => {
                let ms = (performance.now() - innerStart);
                let s = ms/1000;
                run('npm run chmod:2775').exec();
                info.push(`[${x+1}]\n\t${moduleName}\n\t- ${ms} ms\n\t- ${s} s`);

                ms = (performance.now() - timeStart);
                s = ms/1000;
                const  m = s/60;

                setTimeout(() => {
                    run('clear').exec();
                }, 5000);

                setTimeout(() => {
                    if(x == modules.length-1){
    
                        for(let i = 0; i <= info.length-1; i++){
                            console.log(info[i]);
                        }
    
                        console.log(`\n\n[+] Builded ${modules.length-1} modules\n[+] Builded in ${s} seconds\n[+] Builded in ${m} minutes`);
                    }
                }, 10000);
            }
        )
        .catch( e => {
            throw new Error(`Module build failed: ${filename}. ${e}`);
        });
    }
});

gulp.task('create:websites:webpack', function (done) {
    
    const webpackData = `const path = require('path');
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
                test: \/\\.jsx\?$\/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    }
                }
            },
            {
                test: \/\\.css$\/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: \/\\.scss$/\,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\\.woff(2)?(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\\.(ttf|eot|svg)(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,
                use: "file-loader"
            },
            {
                test: \/\\.(png|jpg)$\/,
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
        config.output.filename = '`+randomHash+`.js';
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
        config.output.filename = '`+randomHash+`.js';
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
            // minimizer: [
            //     new TerserPlugin({
            //         test: /\\.jsx|.js(\\?.*)?$\/i,
            //         exclude: \/node_modules/\,
            //         parallel: true,
            //         terserOptions: {
            //             nameCache: null,
            //             ie8: true,
            //             keep_fnames: false,
            //             safari10: true,
            //             keep_classnames: false,
            //             extractComments: true,
            //             ecma: 6
            //         },
            //     }),
            // ],
        }
    }

    return config;
};`;

    fs.writeFile("./webpack.website.js", webpackData, done);
});

gulp.task('create:module:webpack', function (done) {
    
    const webpackData = `const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    cache: false,
    entry: path.resolve(__dirname, 'module.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: \/\\.jsx\?$\/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    }
                }
            },
            {
                test: \/\\.css$\/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: \/\\.scss$/\,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\\.woff(2)?(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\\.(ttf|eot|svg)(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,
                use: "file-loader"
            },
            {
                test: \/\\.(png|jpg)$\/,
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
        config.output.filename = '`+randomHash+`.js';
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
        config.output.filename = '`+randomHash+`.js';
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
                    test: /\\.jsx|.js(\\?.*)?$\/i,
                    exclude: \/node_modules/\,
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
                }),
            ],
        }
    }

    return config;
};`;

    fs.writeFile("./webpack.module.js", webpackData, done);
});

gulp.task('create:websites:html', function (done) {
const htmlData = `
<!DOCTYPE html>
<html>
<head>
    <title>React Revolution</title>
    <meta charset="utf-8">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
    <link rel="canonical" href="http://react-revolution.j.pl/">
    <link rel="alternate" href="http://react-revolution.j.pl/" hreflang="x-default">
    <link rel="alternate" href="https://react-revolution.j.pl/" hreflang="en">
    <meta name="description" content="React Revolution for React">
    <meta name="author" content="David Janitzek">
    <link rel="stylesheet" href="./public/fontawesome-free-5.12.1-web/css/all.css" />
    <link rel="stylesheet" href="./public/css/react-revolution.css" />
    <link rel="stylesheet" href="./public/css/index.css" />
</head>
<body>
    <div id="app"></div>
</body>
<script src='./public/`+randomHash+`.js'></script>
</html>
`;
    fs.writeFile("./index.html", htmlData, done);
});

gulp.task('copy:css:rr', function (done) {
    gulp.src("Website/Scss/react-revolution.css").pipe(gulpSass({ outputStyle: "compressed" }).on("error", gulpSass.logError)).pipe(gulp.dest("public/css"));
    done();
});
/**
 * Multiple task runner
 */
gulp.task('compile', function (callback) {
    runSequence(
        [
            'clean',
            'copy:ff',
            'copy:css:rr',
            'compress:images',
            'create:websites:webpack',
            'create:module:webpack',
            'create:websites:html',
            'copy:css:scss:modules',
            'create:webpack:files',
        ],
        callback);
});

/**
 * Multiple task runner
 */
gulp.task('module', function (callback) {
    runSequence(
        [
            'clean',
            'copy:ff',
            'copy:css:rr',
            'compress:images',
            'create:websites:webpack',
            'create:module:webpack',
            'create:websites:html',
            'copy:css:scss:modules'
        ],
        callback);
});

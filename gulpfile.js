const gulp = require('gulp');

const del = require('del');

const imagemin = require('gulp-imagemin');

const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const runSequence = require('gulp4-run-sequence');

const sass = require("gulp-sass");

const fs = require("fs");

const run = require('gulp-run');

var exec = require('child_process').exec;

const version = 'v3.0.0';

const modules = [
    "Accordion",
    "Articles",
    "ArticlesImages",
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
    "LoadingBoxTop",
    "LoadOnScroll",
    "MenuClickHorizontal",
    "Modal",
    "PagerDynamic",
    "PagerStatic",
    "PopupBox",
    "ReadMore",
    "ReadMoreCallback",
    "ScrollTo",
    "SideBar",
    "SourceCode",
    "Table",
    "TextWriter",
    "Timeline",
    "Water404",
];

const removeDirs = [
    './public/**/*',
    './react-revolution/_Configurations/**/*',
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

/**
 * Compile single scss for modules
 */
gulp.task('build:css:modules', function (done) {
    gulp.src("react-revolution/_Sass/**/*.scss").pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)).pipe(gulp.dest("public/react-revolution/"+version+"/css"));
    done();
});

/**
 * Compile all scss from modules to single css file
 */
gulp.task('build:css:all', function (done) {
    gulp.src("react-revolution/_Sass/react-revolution.scss").pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)).pipe(gulp.dest("public/react-revolution/"+version+"/css"));
    done();
});

/**
 * Copy sass file to public folder
 */
gulp.task('copy:css:modules', function (done) {
    gulp.src("react-revolution/_Sass/**/*.scss").pipe(gulp.dest("public/react-revolution/"+version+"/scss"));
    done();
});

const buildModuleProduction = (filename, cb) => {
    return new Promise( (resolve, reject) => {
        exec('cd react-revolution && node ./node_modules/webpack/bin/webpack.js --config ./_Configurations/' + filename + ' --module-bind js=babel-loader', function (err, stdout, stderr) {
            console.log(stdout);
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

const buildModuleProductionObfucated = (filenameObfuscated, cb) => {
    return new Promise( (resolve, reject) => {
        exec('cd react-revolution && node ./node_modules/webpack/bin/webpack.js --config ./_Configurations/' + filenameObfuscated + ' --module-bind js=babel-loader', function (err, stdout, stderr) {
            console.log(stdout);
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

const runReactRevolutionBuild = (cb) => {
    return new Promise( (resolve, reject) => {
        exec('cd react-revolution && node ./node_modules/webpack/bin/webpack.js --config webpack.config.production.js --module-bind js=babel-loader', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
    
            if(err){
                reject(err)
            }
            else{
                resolve(true);
            }
        });
    });
};

const runReactRevolutionObfscatedBuild = (cb) => {
    return new Promise( (resolve, reject) => {
        exec('cd react-revolution && node ./node_modules/webpack/bin/webpack.js --config webpack.config.obfuscated.production.js --module-bind js=babel-loader', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
    
            if(err){
                reject(err)
            }
            else{
                resolve(true);
            }
        });
    });
};

const runWebsiteBuild = (cb) => {
    return new Promise( (resolve, reject) => {
        exec('node node_modules/webpack/bin/webpack.js --config webpack.website.production.js --module-bind js=babel-loader --progress --profile --colors', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
    
            if(err){
                reject(err)
            }
            else{
                resolve(true);
            }
        }); 
    });
}

gulp.task('create:webpack:files', async function(cb){

    for(let x = 0; x <= modules.length-1; x++){
        const moduleName = modules[x];

        if('PRODUCTION' !== moduleName){
            const filename = "webpack.config." + moduleName + ".production.js";
            const filenameObfuscated = "webpack.config.obfuscator." + moduleName + ".production.js";
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
            entry: './_Modules/`+moduleName+`/index.js',
            output: {
                path: path.resolve(__dirname, '../`+moduleName+`'),
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
    
            // data = `
            // const TerserPlugin = require('terser-webpack-plugin');
    
            // const Dotenv = require('dotenv-webpack');
    
            // const path = require('path');
    
            // const JavaScriptObfuscator = require('webpack-obfuscator');

            // module.exports = {
            // optimization: {
            //     minimizer: [
            //     new TerserPlugin({
            //         cache: true,
            //         parallel: true,
            //         sourceMap: true, // Must be set to true if using source-maps in production
            //         terserOptions: {
            //         ecma: undefined,
            //         warnings: false,
            //         parse: {},
            //         compress: {},
            //         mangle: true,
            //         module: false,
            //         output: null,
            //         toplevel: false,
            //         nameCache: null,
            //         ie8: false,
            //         keep_classnames: undefined,
            //         keep_fnames: false,
            //         safari10: false,
            //         }
            //     }),
            //     ],
            // },
            // cache: false,
            // mode: 'production',
            // entry: './_Modules/`+moduleName+`/index.js',
            // output: {
            //     path: path.resolve(__dirname, '../Obfuscated/`+moduleName+`'),
            //     filename: 'index.js',
            //     libraryTarget: 'commonjs2'
            // },
            // module: {
            //     rules: [
            //         {
            //             test: /\.js$/,
            //             include: path.resolve(__dirname, '**/*'),
            //             exclude: /(node_modules|bower_components|public|production.js|_Sass)/,
            //             use: {
            //             loader: 'babel-loader',
            //             options: {
            //                 presets: ['env']
            //             }
            //             }
            //         },
            //         {
            //             test: /\.scss$/,
            //             use: [
            //             "style-loader",
            //             "css-loader",
            //             "sass-loader"
            //             ]
            //         }
            //         ]
            //     },
            //     externals: {
            //         'react': 'commonjs react'
            //     },
            //     plugins: [
            //         new Dotenv(),
            //         new JavaScriptObfuscator({
            //             rotateUnicodeArray: true
            //         },
            //             /**
            //              * Exclude files
            //              */
            //             ['']
            //         )
            //     ],
            // };`;
    
            // fs.writeFile("./react-revolution/_Configurations/" + filenameObfuscated, data, cb);

            await buildModuleProduction(filename, cb)
            .then( () => {
                    console.log(`Module build done: ${filename}`)
                    run('npm run chmod:2775').exec();
                }
            )
            .catch( e => {
                console.log(`Module build failed: ${filename}. ${e}`)
            });

            // await buildModuleProductionObfucated(filenameObfuscated, cb)
            // .then( () => {
            //         console.log(`Module build done: ${filenameObfuscated}`)
            //         run('npm run chmod:2775').exec();
            //     }
            // )
            // .catch( e => {
            //     console.log(`Module build failed: ${filename}. ${e}`)
            // });
        }
        else{
            /**
             * Run main module build
             */
            await runReactRevolutionBuild(cb);
            await runReactRevolutionObfscatedBuild(cb);
            await runWebsiteBuild(cb);
        }
    }
});

/**
 * Multiple task runner
 */
gulp.task('compile', function (callback) {
    runSequence(
        [
            'clean',
            'copy:ff',
            'compress:images',
            'build:css:modules',
            'build:css:all',
            'copy:css:modules',
            'create:webpack:files',
        ],
        callback);
});

/**
 * Websites scss watcher
 */
gulp.task('buildSassWebsite', function () {
    return gulp.src(['Website/Scss/index.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
});
gulp.task('watch:sass', function () {
    gulp.watch('Website/Scss/**/*', gulp.series('buildSassWebsite'));
});

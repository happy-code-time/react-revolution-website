const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const runSequence = require('gulp4-run-sequence');
const sass = require("gulp-sass");
const fs = require("fs");
const run = require('gulp-run');
var exec = require('child_process').exec;
const { performance } = require('perf_hooks');

const version = 'v5.0.1';

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
    "ReadMore",
    "ReadMoreCallback",
    "ScrollTo",
    "SideBar",
    "Slider",
    "SliderCards",
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
            './public/react-revolution/'+version+'/css/**/*',
            './public/react-revolution/'+version+'/scss/**/*',
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


gulp.task('build:css:website', function (done) {
    gulp.src("Website/Scss/**/*.scss").pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)).pipe(gulp.dest("public/css"));
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
 * Multiple task runner
 */
gulp.task('sass', function (callback) {
    runSequence(
        [
            'clean:css',
            'build:css:modules',
            'build:css:all',
            'copy:css:modules',
            'build:css:website'
        ],
        callback);
});

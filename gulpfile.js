const gulp = require('gulp');

const del = require('del');

const imagemin = require('gulp-imagemin');

const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const runSequence = require('gulp4-run-sequence');

const sass = require("gulp-sass");

const run = require('gulp-run');

const version = 'v1.1.2';

/**
 * Clean
 */
gulp.task('clean', function (done) {
    del.sync([
        './public/**/*',
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
                // imagemin.gifsicle(),
                // imagemin.optipng(),
                // imagemin.svgo(),
                // imageminJpegRecompress()
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
    gulp.src("react-revolution/sass/**/*.scss").pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)).pipe(gulp.dest("public/react-revolution/"+version+"/css"));
    done();
});

/**
 * Compile all scss from modules to single css file
 */
gulp.task('build:css:all', function (done) {
    gulp.src("react-revolution/sass/react-revolution.scss").pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)).pipe(gulp.dest("public/react-revolution/"+version+"/css"));
    done();
});

/**
 * Copy sass file to public folder
 */
gulp.task('copy:css:modules', function (done) {
    gulp.src("react-revolution/sass/**/*.scss").pipe(gulp.dest("public/react-revolution/"+version+"/scss"));
    done();
});

gulp.task('set:rights', function (done) {
    run('npm run chmod:2775').exec();
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
            'compress:images',
            'build:css:modules',
            'build:css:all',
            'copy:css:modules',
            'set:rights'
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

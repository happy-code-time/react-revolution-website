const gulp = require('gulp');
const del = require('del');
const runSequence = require('gulp4-run-sequence');
const { performance } = require('perf_hooks');
const CompressImagesAll = require('compress-images-all');
const path = require('path');
const dartSass = require('sass');
const gulpSass = require("gulp-sass");
const sass = gulpSass(dartSass);
/**
 * Clean
 */
gulp.task('clean', function (done) {
    del.sync(
        [
            './public/css/**/*',
            './public/images/**/*',
        ],
        {
            dot: true
        });
    done();
});
/**
 * Compress images
 */
gulp.task('compress:images', async () => {
    return await new Promise(async (resolve, reject) => {
        const start = performance.now();
        const ci = new CompressImagesAll();
        ci.setSource(path.join(__dirname, '/ImagesToCompress'));
        ci.setDestination(path.join(__dirname, '/public/images'));
        ci.setExtensions(['jpg', 'jpeg', 'png', 'gif', 'ico', 'webp', 'nef', 'svg']);
        ci.setCachedDirectory(path.join(__dirname, '/ImagesToCompressTmp/'))

        await ci
            .start()
            .then(() => {
                const end = performance.now();
                ci.logger(`Done in: ${end - start}ms | ${(end - start) / 1000}s | ${(end - start) / 1000 / 60}min`);
                resolve();
            })
            .catch((e) => {
                ci.logger(`Image compression failed with error: ${e}`);
                reject(e);
            })
        ;
    });
});
/**
 * Style to public path
 */
gulp.task('website:style', () => {
    return gulp
        .src([`Website/style/website.scss`])
        .pipe(sass())
        .pipe(gulp.dest(`public/css/`))
    ;
});
/**
 * Styles series
 */
gulp.task('style', gulp.series('website:style'));
/**
 * Style watcher
 */
gulp.task("css:watch", () => {
    return gulp.watch(
        [
            'Website/style/website.scss'
        ],
        gulp.series("style"))
    ;
});

/**
 * Multiple task runner
 */
gulp.task('compile', function (callback) {
    runSequence(
        [
            'clean',
            'website:style',
            'compress:images',
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
            'website:style',
            'compress:images',
        ],
        callback
    );
});

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');



function optimizeHTML() {
    console.log('1');
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}
exports.optimizeHTML = optimizeHTML;



function buildJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}
exports.buildJS = buildJS;





function optimizeCSS() {
    return gulp.src('src/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}
exports.optimizeCSS = optimizeCSS;



function createDist() {
    return gulp.src('*.*', { read: false })
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.dest('dist/css'));
}

exports.createDist = createDist;



exports.default = gulp.series(createDist, gulp.parallel(optimizeHTML, optimizeCSS, buildJS));



const
    {src, dest} = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    svgo = require('gulp-svgo'),
    watch = require('gulp-watch');

const
    sassPath = ['sass/*'],
    imgPath = ['img/*'],
    svgPath = ['svg/*'];

function defaultTask() {}

function css() {
    return src(sassPath)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(dest('css'));
}

function img() {
    return src(imgPath)
        .pipe(imagemin())
        .pipe(dest('images'));
}

function svg() {
    return src(svgPath)
        .pipe(svgo())
        .pipe(dest('images/svg'));
}

function wcss() {
    css();
    watch(sassPath, css);
}

exports.default = defaultTask;
exports.css = css;
exports.svg = svg;
exports.img = img;
exports.wcss = wcss;

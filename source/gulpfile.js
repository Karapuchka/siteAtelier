const {src, parallel, series, dest, watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require('browser-sync').create();

function browsersync(){
    browserSync.init({
        server: {
            baseDir: 'source/'
        }
    });
}

function cleanDist(){
    return del('dist');
}

function watching(){
    watch(['source/styles/style.scss'], styles)
    watch(['source/scripts/main.js'], scripts)
    watch(['source/index.html']).on('change', browserSync.reload)
}

function styles(){
    return src('source/styles/style.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('style.min.css'))
            .pipe(autoprefixer({
                overrideBrowserlist: ['last 10 version'],
                grid: true
            }))
            .pipe(dest('source/styles'))
            .pipe(browserSync.stream())
}

function scripts(){
    return src([               
        'source/scripts/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('source/scripts'))
        .pipe(browserSync.stream())
}

function build(){
    return src([
        'source/index.html',
        'source/styles/style.min.css',
        'source/scripts/main.min.js',
        'source/fonts/**/*',
        'source/images/**/*',
        'source/pages/*.html'
    ], {base: 'source'})
    .pipe(dest('dist'))
}

exports.cleanDist = cleanDist;
exports.watching = watching;
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.build = build;

exports.default = series(cleanDist, parallel(scripts, styles), build, parallel(browsersync, watching));
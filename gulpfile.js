/*
 * Dependencias
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify')
    cleanCSS = require('gulp-clean-css');
/*
 * Configuración de las tareas 'demo'
 */
gulp.task('demo', function () {
    gulp.src('js/source/*.js')
        .pipe(concat('compilacion.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});

gulp.task('sass', function () {
    return gulp.src('./assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./assets/css/'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./assets/css/*.scss', ['sass']);
});

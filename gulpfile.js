var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('main', function() {
    return gulp
        .src('./build/main.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('runtime', function() {
    return gulp
        .src([
            './build/main~polyfills.js',
            './build/polyfills.js',
            './build/runtime.js',
        ])
        .pipe(concat('runtime.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('elements', function() {
    return gulp
        .src('./build/*.js')
        .pipe(concat('elements.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function() {
    return gulp
        .src('./build/styles.css')
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['elements', 'main', 'runtime', 'rename']);

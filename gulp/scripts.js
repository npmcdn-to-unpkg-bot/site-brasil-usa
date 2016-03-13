'use strict'

var gulp        = require('gulp'),
    browserSync = require('browser-sync').get('static-boilerplate'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    eslint      = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src(['src/js/**/*.js'])
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(eslint.failAfterError());
});

gulp.task('javascript', ['eslint'], function() {
  return gulp.src([
      './node_modules/vanilla-masker/build/vanilla-masker.min.js',
      './node_modules/fastclick/lib/fastclick.js',
      './src/js/main.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

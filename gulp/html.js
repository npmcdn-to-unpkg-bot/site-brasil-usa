'use strict';

var gulp       = require('gulp'),
    include    = require('gulp-include'),
    minifyHtml = require('gulp-htmlmin');

gulp.task('html', function() {
  return gulp.src(['src/*.html','src/include/*.html'])
    .pipe(include())
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

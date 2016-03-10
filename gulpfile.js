'use strict';

var gulp = require('gulp');

require('./gulp/serve');
require('./gulp/scripts');
require('./gulp/styles');
require('./gulp/images');
require('./gulp/fonts');
require('./gulp/html');
require('./gulp/clean');

gulp.task('build', ['html', 'css', 'javascript', 'images', 'fonts']);
gulp.task('build:production', ['build', 'clean', 'css:production']);
gulp.task('default', ['serve']);

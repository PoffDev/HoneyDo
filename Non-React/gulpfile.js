'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('style', function(){
	gulp.src('app/public/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/public/css'));
});

gulp.task('watch', function(){
	gulp.watch('app/public/sass/**/*.scss', ['style']);
})
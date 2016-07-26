var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
	gulp.src('app/public/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pip(gulp.dest('app/public/css'))
});

gulp.task('watch', function(){
	gulp.watch('app/public/sass/**/*.scss', ['sass']);
})
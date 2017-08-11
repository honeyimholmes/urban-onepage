var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() { 
	return gulp.src('sass/**/*.scss') 
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compact'
	}).on('error', sass.logError))
		.pipe(sourcemaps.write()) 
		.pipe(gulp.dest('css')) 
});


gulp.task('serve', ['sass'], function() {
	
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	
	gulp.watch("sass/**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});
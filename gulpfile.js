var gulp =require('gulp');

gulp.task('hello', function(){
	console.log('Hello Zell');
})

var plugins = require('gulp-load-pluggins')();

var source = './js/app.js';

var destination = './dist';

gulp.task('minify', funtion(){
	return gulp.src(destination +'' )
	
})
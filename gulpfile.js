var gulp =require('gulp');
var uglify = require('gulp-uglify')
var minifyInline = require('gulp-minify-inline');

gulp.task('hello', function(){
	console.log('Hello Zell');
})

var plugins = require('gulp-load-plugins')();

var source = './js';

var destination = './dist/';

gulp.task('uglify', function(){
	gulp.src(source +'/app.js')
	.pipe(uglify())
	.pipe(gulp.dest(destination));


});
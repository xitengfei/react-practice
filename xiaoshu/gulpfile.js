'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var browserify = require('browserify');
var shim = require('browserify-shim');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload  = browserSync.reload;

var config = {
	dist:'./dist/',
	src:'./make-redux/'
};

gulp.task('clean', function(cb) {
	del.sync([config.dist]);
	cb();
});

gulp.task('copy',function(){
	return gulp.src(config.src+'*.html')
	.pipe(gulp.dest(config.dist));
});

gulp.task('scripts', function() {
	return browserify(config.src+'main.js')
		.transform(babelify, {
			presets: ['es2015', 'react', 'stage-0']
		})
		// .transform(shim)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest(config.dist));
});

gulp.task('styles',function(){
	gulp.src(config.src+'css/**/*')
	.pipe(gulp.dest(config.dist+'css/'));
});


gulp.task('watch', ['build'], browserSync.reload);

// BrowserSync
gulp.task('serve', ['build'], function() {
	browserSync({
		server: {
			baseDir: config.dist
		},
		open: true,
		online: false,
		notify: true,
	});

	gulp.watch([
		config.src+'**/*.{js,jsx}',
		config.src+'*.html',
	],['watch']);
	//gulp.watch("bundle.js").on('change', browserSync.reload);
});

gulp.task('build', ['copy', 'styles', 'scripts']);

gulp.task('default', ['clean', 'build']);


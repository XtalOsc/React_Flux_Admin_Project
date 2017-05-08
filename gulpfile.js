"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //open a URL in web browser

var config = {
  port: 9006,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }//end paths
}//end config

//Start local development server
gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });//end connect function
});//end gulp.task

gulp.task('open', ['connect'], function(){
  gulp.src('dist/index.html')
      .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});//end gulp.task function

//get HTML files,put them in destination path then reload
gulp.task('html', function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload());
});//end gulp.task function

gulp.task('default', ['html', 'open']);

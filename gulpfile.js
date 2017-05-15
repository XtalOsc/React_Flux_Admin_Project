"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //open a URL in web browser
var browserify = require('browserify') //bundles JS
var reactify = require('reactify') //transforms React JSX to JS
var source = require('vinyl-source-stream') //use conventional text streams with Gulp
var concat = require('gulp-concat') //concatenates files
var lint = require('gulp-eslint') //lint JS files, including JSX

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }//end paths
}//end config

//Start local development server
gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });//end connect.server
});//end gulp.task connect function

gulp.task('open', ['connect'], function(){
  gulp.src('dist/index.html')
      .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});//end gulp.task open function

//get HTML files,put them in destination path then reload
gulp.task('html', function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload());
});//end gulp.task html function

gulp.task('js', function(){
  browserify(config.paths.mainJs)
  .transform(reactify)
  .bundle()
  .on('error', console.error.bind(console))//show errors on console
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.paths.dist + '/scripts'))
  .pipe(connect.reload());
});//end gulp.task js function

gulp.task('css', function(){
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dist + '/css'));
})//end gulp.task css function

gulp.task('images', function() {
  gulp.src(config.paths.images)
  .pipe(gulp.dest(config.paths.dist + '/images'))
  .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
  .pipe(gulp.dest(config.paths.dist));
})//end gulp.task images function

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
  .pipe(lint({config: 'eslint.config.json'}))
  .pipe(lint.format());
})//end gulp.task lint function

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js , ['js', 'lint']);
});//end gulp.task watch function

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);

'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var argv = require('yargs').argv;

gulp.task('test', function (done) {
  karma.start({
    configFile: process.env.PWD + '/karma.conf.js',
    singleRun: !argv.tdd
  }, done);
});
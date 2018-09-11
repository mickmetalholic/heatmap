const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const rollupConfig = require('./rollup.config');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const pump = require('pump');

gulp.task('clean', function() {
  if (process.env.NODE_ENV === 'development') { return }
  const options = {
    force: true,
  };
  return del([
    '../dist/**/*',
    '../es/**/*',
    '../definitions/**/*'
  ], options);
});

gulp.task('compile', ['clean'], function() {
  const tsResult = gulp.src('../src/**/*.ts')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(tsProject());

  tsResult.on('error', function(e) {
    console.error(e.message);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  });

  tsResult.js
    .pipe(babel())
    .pipe(gulp.dest('../es')) // es module
    .pipe(rollup(rollupConfig))
    .pipe(rename('heatmap.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../dist')) // umd
    .pipe(connect.reload());

  if (process.env.NODE_ENV === 'production') {
    tsResult.dts.pipe(gulp.dest('definitions'));
  }
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
  });
});

gulp.task('watch', function() {
  gulp.watch('../src/**/*', ['compile']);
  gulp.watch('../test/**/*', function (event) {
    gulp.src(event.path).pipe(connect.reload());
  });
});

gulp.task('compress', ['compile'], function(cb) {
  pump([
    gulp.src('../dist/heatmap.js'),
    uglify(),
    rename({ suffix: '.min' }),
    gulp.dest('../dist')
  ], cb);
});

gulp.task('dev', ['compile', 'webserver', 'watch']);
gulp.task('build', ['compress']);

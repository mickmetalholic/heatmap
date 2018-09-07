const gulp = require('gulp');
const merge = require('merge2');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const babel = require('gulp-babel');
const rollup = require('rollup');
const rollupConfig = require('./rollup.config');

gulp.task('compile', ['clean'], function() {
  const tsResult = tsProject.src().pipe(tsProject());
  tsResult.on('error', console.log)
  return merge(
    tsResult.js.pipe(babel()).pipe(gulp.dest('es')),
    tsResult.dts.pipe(gulp.dest('definitions'))
  );
});

gulp.task('cjs', ['compile'], function() {
  return gulp.src('es/**/*.js')
    .pipe(babel({
      'plugins': ['@babel/plugin-transform-modules-commonjs']
    }))
    .pipe(gulp.dest('lib')).on('error', console.log);
});

gulp.task('umd', ['compile'], async function() {
  const bundle = await rollup.rollup(rollupConfig);
  await bundle.write({
    file: './dist/heatmap.js',
    format: 'umd',
    name: 'Heatmap',
    sourcemap: true
  });
});

gulp.task('clean', function() {
  // TODO: 
});

gulp.task('build', ['cjs', 'umd']);

import gulp from 'gulp';
import gless from 'gulp-less';
import gutil from 'gulp-util';
import browserify from 'browserify';
import tsify from 'tsify';

let devFolder = './app/';
let destFolder = './build/';

gulp.task('browserify', () => {

});

gulp.task('less', () => {
  return gulp
    .src(devFolder + 'less/style.less')
    .pipe(gless())
    .on('error', (err) => {
      gutil.log(gutil.colors.red.bold('[Less error]'));
      gutil.log(gutil.colors.bgRed('filename: ') +' '+ err.filename);
      gutil.log(gutil.colors.bgRed('lineNumber: ') +' '+ err.lineNumber);
      gutil.log(gutil.colors.bgRed('extract: ') + err.extract.join(' '));
    })
    .pipe(gulp.dest())
});

gulp.task('watch', () => {
  gulp.watch(devFolder + '**/*.ts', ['browserify']);
  gulp.watch(devFolder + 'less/*.less', ['less']);
});

gulp.task('dist', ['browserify', 'less']);
gulp.task('default', ['dist', 'watch']);

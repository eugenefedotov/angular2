import gulp from 'gulp';
import gless from 'gulp-less';
import gutil from 'gulp-util';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';

let devFolder = './app';
let buildFolder = './build';

gulp.task('browserify', () => {
  return browserify({
    entries : 'app/bootstrap.ts',
    debug   : true
  })
    .plugin(tsify, {
      target                 : 'es5',
      experimentalDecorators : true
    })
    .bundle()
    .on('error', function (err) {
      gutil.log(gutil.colors.red.bold('[browserify error]'));
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(buildFolder));
});

gulp.task('less', () => {
  return gulp
    .src(devFolder + '/less/style.less')
    .pipe(gless())
    .on('error', (err) => {
      gutil.log(gutil.colors.red.bold('[Less error]'));
      gutil.log(gutil.colors.bgRed('filename: ') + ' ' + err.filename);
      gutil.log(gutil.colors.bgRed('lineNumber: ') + ' ' + err.lineNumber);
      gutil.log(gutil.colors.bgRed('extract: ') + err.extract.join(' '));
    })
    .pipe(gulp.dest(buildFolder + '/css'))
});

gulp.task('watch', () => {
  gulp.watch(devFolder + '/**/*.ts', ['browserify']);
  gulp.watch(devFolder + '/less/*.less', ['less']);
});

gulp.task('build', ['browserify', 'less']);
gulp.task('default', ['build', 'watch']);

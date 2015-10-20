import gulp from 'gulp'

import browserSync from 'browser-sync'
import postcss from 'gulp-postcss'
import plumber from 'gulp-plumber'
import uglify from 'gulp-uglify'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

// postcss processors
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import extend from 'postcss-extend'
import color from 'postcss-color-function'
import simpleVars from 'postcss-simple-vars'
import cssImport from 'postcss-import'
import cssnano from 'cssnano'

// -------------------------
// JS
// -------------------------
gulp.task('js', () =>
  browserify({
    entries: './src/js/index.js',
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./src/build/js'))
  .pipe(browserSync.stream())
)

// -------------------------
// PostCSS
// -------------------------
gulp.task('css', () => {
  return gulp.src('./src/css/style.css')
    .pipe(plumber())
    .pipe(postcss([
      cssImport,
      simpleVars,
      extend,
      nested,
      color,
      autoprefixer({browsers: ['last 2 versions']}),
      cssnano
    ]))
    .pipe(gulp.dest('./src/build/css/'))
    .pipe(browserSync.stream())
})

// -------------------------
// Browser Sync
// -------------------------
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
})

// -------------------------
// Watch Task
// -------------------------
gulp.task('watch', ['js', 'css', 'browser-sync'], () => {
  gulp.watch('./src/js/**/*', ['js'])
  gulp.watch('./src/css/**/*.css', ['css'])
  gulp.watch('./src/**/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch'])

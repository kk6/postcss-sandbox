import gulp from 'gulp'

import browserSync from 'browser-sync'
import postcss from 'gulp-postcss'
import plumber from 'gulp-plumber'

// postcss processors
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import extend from 'postcss-extend'
import color from 'postcss-color-function'
import simpleVars from 'postcss-simple-vars'
import cssImport from 'postcss-import'
import cssnano from 'cssnano'


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
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
})

// -------------------------
// Browser Sync
// -------------------------
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

// -------------------------
// Watch Task
// -------------------------
gulp.task('watch', ['css', 'browser-sync'], () => {
  gulp.watch('./src/css/**/*.css', ['css'])
  gulp.watch('*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch'])

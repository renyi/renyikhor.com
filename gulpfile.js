const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const pkg = require('./package.json');


gulp.task('css', function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(rev())
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  return gulp.src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(rev())
    .pipe(gulp.dest('./js'));
});

// Default task
gulp.task('default', gulp.series(['css', 'js']));

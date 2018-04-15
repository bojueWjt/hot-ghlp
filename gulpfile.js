var gulp = require('gulp')
var livereload = require('gulp-livereload')
var exec = require('child_process').exec
var less = require('gulp-less')
var replace = require('gulp-replace');

gulp.task('less', function() {
  gulp.src('public/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'))
    .pipe(livereload())
})


gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('views/*.html', function(file) {
    livereload.changed(file.path)
  })

  gulp.watch('public/less/*.less', ['less'])

  gulp.watch('public/js/*.js', function(file) {
    livereload.changed(file.path)
  })
})

gulp.task('start', function() {
  exec('npm start')
})

gulp.task('dist', function() {
  gulp.src('./views/*.html')
    .pipe(replace('src="js', 'src="./js'))
    .pipe(gulp.dest('./dist'))

  gulp.src('./public/js/*.js')
    .pipe(gulp.dest('./dist/js'))

  gulp.src('./public/css/*.css')
    .pipe(gulp.dest('./dist/css'))

  gulp.src('./public/img/*.+(jpeg|jpg|png)')
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('default', ['start', 'watch'])



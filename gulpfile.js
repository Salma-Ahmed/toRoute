var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngmin = require('gulp-ngmin'),
    imagemin = require('gulp-imagemin');
 


var coffeeSources = ['scripts/hello.coffee'],
    jsSources = ['scripts/*.js'],
    jsSourcesAng = ['scriptsAng/*.js'],
    sassSources = ['styles/*.scss'],
    imgSources = ['images/*'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';


gulp.task('log', function() {
  gutil.log('== My First Task ==')
});

/*gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest(outputDir))
});*/

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
  .pipe(connect.reload())
});

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});

gulp.task('js', function() {
   gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});
gulp.task('angular', function () {
        gulp.src( jsSourcesAng)
        .pipe(ngmin({dynamic: true}))
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload());
});
gulp.task('compress', () =>
    gulp.src(imgSources)
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
);

gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('connect', function() {    
  connect.server({
    root: '.',
    livereload: true
  })    
});

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(jsSourcesAng, ['angular']);      
  gulp.watch(imgSources, ['compress']);      
  gulp.watch(htmlSources, ['html']);        
});




gulp.task('default', ['html','coffee', 'js','compress', 'sass','angular', 'connect', 'watch']);
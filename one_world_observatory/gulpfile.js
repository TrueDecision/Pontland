var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

function css_style(done){
  gulp.src('./src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
  done();
}

function sync(done){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserReload(done){
  browserSync.reload();
  done();
}

function sassConcat(done) {
  return gulp.src('./src/sass/partials/**/*.sass')
    .pipe(concat('main.sass'))
    .pipe(gulp.dest('./src/sass/'));
    done();
}

function jsConcatBuild(done) {
  return gulp.src('./src/js/partials/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src/js/'))
    .pipe(gulp.dest('./build/js/'))
    done();
}


function watchFiles(){
  gulp.watch("./src/js/partials/**/*.js", jsConcatBuild);
  gulp.watch("./src/sass/partials/**/*.sass", sassConcat);
  gulp.watch("./src/sass/*.sass", css_style);
  gulp.watch("./**/*.html", browserReload);
  gulp.watch("./**/*.php", browserReload);
  gulp.watch("./**/*.js", browserReload);
}


gulp.task('default', gulp.parallel(sync, watchFiles));

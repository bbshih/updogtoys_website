var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var rename = require( 'gulp-rename' );
var changed = require('gulp-changed');

// Minify HTML
var minifyHTML = require('gulp-minify-html');
gulp.task('html', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './dist';

  gulp.src(htmlSrc)
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// Compile sass, remove unused CSS and prep for use
var sass = require('gulp-ruby-sass');
var uncss = require('gulp-uncss');
var prefix = require( 'gulp-autoprefixer' );
var lint = require('gulp-csslint');
var minifycss = require( 'gulp-minify-css' );

gulp.task('css', function() {
  var scssSrc = './src/css/app.scss',
        cssDst = './dist/css',
        htmlSrc = './src/index.html';
  return gulp.src('./src/scss/app.scss')
    .pipe(sass())
    .on('error', function (err) { console.log(err.message); })
    .pipe(prefix('last 3 versions'))
    .pipe(lint())
    .pipe(gulp.dest(cssDst))
    .pipe(uncss({
      html: [htmlSrc],
      ignore: [/.overlay.*/, /\.effects.*/, /\.fancybox*/]
    }
    ))
    .pipe(gulp.dest(cssDst))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(cssDst))
    .pipe(reload({ stream:true }));
});

// Uglify, concat scripts together and sourcemap
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
  var jsDst = './dist/js';
  gulp.src(['./src/js/waypoints.min.js',
            './src/js/bootstrap.js',
            './src/js/modernizr.js',
            './src/js/jquery.fancybox.js',
            './src/js/jquery.fancybox-media.js',
            './src/js/app.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(jsDst))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(jsDst));
});

// Optimize images
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
gulp.task('img', function () {
    return gulp.src('src/img/**/*')
        .pipe(changed('dist/img/**/*'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
    return gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('dist/fonts/'));
});

// Deploy to server
var rsync = require('rsyncwrapper').rsync;
var gutil = require('gulp-util');

gulp.task('deploy', function() {
  rsync({
    ssh: true,
    src: './dist/',
    dest: 'bstandards@hugh-williamson.dreamhost.com:~/updogtoys.com/',
    recursive: true,
    syncDest: true,
    args: ['--verbose']
  }, function(error, stdout, stderr, cmd) {
      gutil.log(stdout);
  });
  notify({ message: 'deploy complete'});
});

// Watch files for changes
// Compile Sass, Upload and Reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './dist/'
    }
  });
  gulp.watch('src/scss/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js', reload]);
  gulp.watch('src/img/**/*', ['img', reload]);
  gulp.watch('src/index.html', ['html', reload]);
  // gulp.watch('src/**/*', ['deploy']);
});

gulp.task('build', ['html', 'js', 'css', 'img', 'fonts']);

gulp.task('freshdep', ['critical', 'deploy']);

gulp.task('default', ['build', 'serve']);

// Critical CSS
var critical = require('critical');
gulp.task('copystyles', function () {
    return gulp.src(['dist/css/app.min.css'])
        .pipe(rename({
            basename: "site" // site.css
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('critical', ['build', 'copystyles'], function (cb) {
    critical.generateInline({
        base: 'dist/',
        src: 'index.html',
        styleTarget: 'css/app.min.css',
        htmlTarget: 'index.html',
        minify: true,
        width: 320,
        height: 480,
        minify: true
    },cb);
});

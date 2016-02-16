var gulp = require('gulp');
var notify = require('gulp-notify');
var rename = require( 'gulp-rename' );
var changed = require('gulp-changed');

// Minify HTML
// var minifyHTML = require('gulp-minify-html');
gulp.task('html', function() {
  var htmlSrc = './src/layout/*.liquid',
      htmlDst = './up-dog-toys-2-83629830/layout';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(gulp.dest(htmlDst));

  var htmlTemplatesSrc = './src/templates/*.liquid',
      htmlTemplatesDst = './up-dog-toys-2-83629830/templates';

  gulp.src(htmlTemplatesSrc)
    .pipe(changed(htmlTemplatesDst))
    .pipe(gulp.dest(htmlTemplatesDst));

  var htmlSnippetsSrc = './src/snippets/*.liquid',
      htmlSnippetsDst = './up-dog-toys-2-83629830/snippets';

  gulp.src(htmlSnippetsSrc)
    .pipe(changed(htmlSnippetsDst))
    .pipe(gulp.dest(htmlSnippetsDst));
});

// Prep CSS
var sass = require('gulp-ruby-sass');
var prefix = require( 'gulp-autoprefixer' );
var lint = require('gulp-csslint');

gulp.task('css', function() {
  var cssDst = './up-dog-toys-2-83629830/assets';
  return sass('./src/scss/app.scss')
    .on('error', function (err) { console.log(err.message); })
    .pipe(prefix('last 3 versions'))
    .pipe(lint())
    .pipe(gulp.dest(cssDst));
});

// Uglify, concat scripts together
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function() {
  var jsDst = './up-dog-toys-2-83629830/assets';
  gulp.src(['./src/js/waypoints.min.js',
            './src/js/bootstrap.js',
            './src/js/modernizr.js',
            './src/js/jquery.fancybox.js',
            './src/js/jquery.fancybox-media.js',
            './src/js/app.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDst));
});

// Optimize images
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

var imgSrc = 'src/img/**/*',
    imgDst = 'up-dog-toys-2-83629830/assets';
gulp.task('img', function () {
    return gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(imgDst));
});

gulp.task('fonts', function() {
    return gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('up-dog-toys-2-83629830/assets/'));
});

gulp.task('locales', function() {
    return gulp.src(['src/locales/*'])
        .pipe(changed(imgDst))
        .pipe(gulp.dest('up-dog-toys-2-83629830/locales/'));
});

// Watch files for changes
gulp.task('serve', function() {
  gulp.watch('src/scss/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/img/**/*', ['img']);
  gulp.watch('src/**/*.liquid', ['html']);
  gulp.watch('src/**/*.json', ['locales']);
});

gulp.task('default', ['html', 'js', 'css', 'img', 'fonts', 'locales']);

// Watches single files
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');

gulp.task('shopifywatch', function() {
  return watch('up-dog-toys-2-83629830/+(assets|layout|config|snippets|templates|locales)/**')
.pipe(gulpShopify('b16d97ede7575eee88ccc10166262c3b', '7dca3f09363da78c8e6b01ba991abaaf', 'up-dog-toys-2.myshopify.com', ''));
});

// Default gulp action when gulp is run
gulp.task('swatch', [
  'shopifywatch'
]);

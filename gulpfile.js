var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

var paths = {
    /*sass: ['./scss/!**!/!*.scss']*/
    sass: ['./scss/**/*.scss'],
    js: [
        './www/js/directives/*.js',
        './www/js/services/**/**/*.js',
        './www/state/**/*.js'
    ],
    html: [
        './www/state/**/*.html'
    ],
    css:[
        './www/state/**/*.css'
    ]
};

gulp.task('default', [
    'combine-js',
    'minify-css',
    /*'minify-html',*/
    'sass',
    'make-templatecache'
]);

gulp.task('combine-js', function () {
    return gulp.src(paths.js)

        .pipe(concat('app.all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/final/js'));
});

gulp.task('minify-css', function() {
    return gulp.src(paths.css)
        .pipe(minifyCss())
        .pipe(gulp.dest('./www/final/css'));
});

/*gulp.task('minify-html', function() {
    return gulp.src(paths.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./www/final/minify-html'));
});*/

gulp.task('make-templatecache', function () {
    return gulp.src(paths.html)
        .pipe(templateCache('templates.js',
            {
                module:'templatescache',
                standalone:true,
                root : './www/state'
            }))
        .pipe(gulp.dest('./www/final/js'));
});



gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

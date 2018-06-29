const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
/*
TOP LEVEL FUNCTIONS
gulp.task -> define tasks
gulp.src -> point to files to use
gulp.dest -> points to folder to output
gulp.watch -> watch files and folders for changes
*/

// logs message
gulp.task('message', function(){
    return console.log('gulp is running');
});

//copy all html files
gulp.task('copyHtml', function (){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('imageMin', function (){ 
    gulp.src('src/images/*')
     .pipe(imagemin())
     .pipe(gulp.dest('dist/images'))
});

//Minify js
gulp.task('minify', function (){
    gulp.src('src/js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('dist/js'))
});

// Compile Sass
gulp.task('sass', function (){
    gulp.src('src/sass/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('dist/css'));
});
// prefix does not work??

// prefix css 
// gulp.task('prefix', function (){
//     gulp.src('dist/css/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 4 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist/css'))
// });

// scripts concat
gulp.task('scripts', function (){
    gulp.src('src/js/*.js')
     .pipe(concat('main.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);

gulp.task ('watch' ,function (){
   gulp.watch('src/js/*.js', ['scripts']);
   gulp.watch('src/images/*', ['imageMin']);
   gulp.watch('src/sass/*.scss', ['sass']);
//    gulp.watch('src/css/*.css', ['prefix']);
   gulp.watch('src/*.html', ['copyHtml']);
});


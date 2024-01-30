const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function Style(){

    return gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'))

}


function Images(){

    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))

}


exports.default = gulp.parallel(Style, Images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(Style))
}
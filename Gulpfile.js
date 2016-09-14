var gulp = require('gulp');
// var tsc = require('gulp-typescript');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

var typescriptSrc = './src/app/**/*.ts';
var es5Dest = './src/dist/es5';

var es2015Dest = './src/dist/es2015';
var commonjsDest = './src/dist/commonjs';

// gulp.task('toes5', function () {
//     gulp.src(typescriptSrc)
//         .pipe(tsc({
//             module: "amd",
//             target: "es5"
//         }))
//         .pipe(gulp.dest(es5Dest))
// });


// gulp.task('toes2015', function () {
//     gulp.src(typescriptSrc)
//         .pipe(tsc({
//             module: "amd",
//             target: "es2015"
//         }))
//         .pipe(gulp.dest(es2015Dest))
// });


// gulp.task('toCommonJs', function () {
//     gulp.src(typescriptSrc)
//         .pipe(tsc({
//             module: "commonjs",
//             target: "es5"
//         }))
//         .pipe(gulp.dest(commonjsDest))
// });


// gulp.task('watch', function () {
//     gulp.watch([typescriptSrc], ['toes5']);
// });


gulp.task('run', [], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 5000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        logPrefix: 'angularin20typescript',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './src',
            middleware: superstatic({ debug: false })
        }
    });
});
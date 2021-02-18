const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('message', async function(){
	return console.log('Gulp is running...');
});

gulp.task('html', async function(){
	gulp.src('./*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('minifyimage', () =>
	gulp.src('src/images/*')
	  .pipe(imagemin())
	  .pipe(gulp.dest('dist/images'))
	  .pipe(browserSync.stream())
);

gulp.task('minifyjs', async function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});

gulp.task('minifysass', async function(){
	gulp.src('src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('minifyfont', () =>
	gulp.src('src/fonts/*')
	  .pipe(imagemin())
	  .pipe(gulp.dest('dist/fonts'))
);

gulp.task('default', gulp.series('message', 'html', 'minifyimage', 'minifyjs', 'minifysass', 'minifyfont'));

gulp.task('watch', function(){
	browserSync.init({
		server: {
			baserDir: './'
		}
	});
	gulp.watch('src/js/*.js', gulp.series(['minifyjs']));
	gulp.watch('src/images/*', gulp.series(['minifyimage']));
	gulp.watch('src/sass/*.scss', gulp.series(['minifysass']));
	gulp.watch('src/fonts/*', gulp.series(['minifyfont']));
	gulp.watch('./*.html').on('change', browserSync.reload);
});



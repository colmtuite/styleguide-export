var path = require('path'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	merge = require('merge-stream'),
	Eyeglass = require("eyeglass");

var rootDir = __dirname,
	distDir =  path.join(rootDir, 'dist'),
	assetsDir = path.join(rootDir, 'assets');

function sassify() {
	var options = {
		outputStyle: 'compressed',
		// eyeglass options
		eyeglass: {
			root: rootDir,
			buildDir: path.join(distDir, 'site', 'assets'),
			assets:  {
				relativeTo: '/thisisahack',
				sources: [{
			        directory: assetsDir,
			        globOpts: {
			          pattern: "images/**/*"
			        }
				}]
			}
		}
	};
	var eyeglass = new Eyeglass(options, sass);

	return sass(eyeglass.options).on('error', sass.logError);
}

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('clean:css', function () {
	return gulp.src('dist/css', {read: false})
        .pipe(clean());
});

gulp.task('clean:site', function () {
	return gulp.src('dist/site', {read: false})
        .pipe(clean());
});

gulp.task('build:css', ['clean'], function() {
    return gulp.src('src/sass/all.scss')
        .pipe(sassify())
		.pipe(rename({
			basename: 'styleguide'
		}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build:site', ['build:css'], function() {
	var site = gulp.src('src/site/**/*')
		.pipe(gulp.dest('dist/site'));
	var css = gulp.src('dist/css/styleguide.css')
		.pipe(gulp.dest('dist/site/assets/css'));

	return merge(site, css);
});

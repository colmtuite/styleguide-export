var path = require('path'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	merge = require('merge-stream'),
	eyeglass = require("eyeglass");

var rootDir = __dirname,
	assetsDir = path.join(rootDir, 'assets');

function sassify(compressed) {
	var outputStyle = compressed ? 'compressed' : 'expanded';
	return sass(eyeglass({
		// sass options
		outputStyle: outputStyle
	},{
		// eyeglass options
		assets: {
			// Add assets except for js and sass files
			sources: [
				{
					directory: assetsDir, globOpts: { ignore: ["**/*.js", "**/*.scss"] }
				}
			]
		}
	})).on('error', sass.logError);
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
	return gulp.src('dist/css', {read: false})
        .pipe(clean());
});

gulp.task('css', ['clean'], function() {
    return gulp.src('src/sass/all.scss')
        .pipe(sassify())
		.pipe(rename({
			basename: 'styleguide'
		}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('site', ['css'], function() {
	var site = gulp.src('src/site/**/*')
		.pipe(gulp.dest('dist/site'));
	var assets = gulp.src('assets/**/*')
		.pipe(gulp.dest('dist/site/assets'));
	var css = gulp.src('dist/css/styleguide.css')
		.pipe(gulp.dest('dist/site/assets/css'));

	return merge(site, assets, css);
});

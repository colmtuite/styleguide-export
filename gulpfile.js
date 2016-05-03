const yargs = require('yargs');
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const Eyeglass = require('eyeglass');
const webpackConfig = require('./webpack.config.js');

const paths = {
    root: __dirname,
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
};

function sassify() {
    const options = {
        outputStyle: 'compressed',
        // eyeglass options
        eyeglass: {
            root: paths.root,
            assets: {
                httpPrefix: 'assets',
                relativeTo: '/marvel-styleguide',
                sources: [{
                    directory: path.resolve(paths.src, 'assets'),
                    globOpts: {
                        pattern: 'images/**/*',
                    },
                }],
            },
        },
    };
    const eyeglass = new Eyeglass(options, sass);

    return sass(eyeglass.options).on('error', sass.logError);
}

gulp.task('clean', () => (
    gulp.src('dist', { read: false })
        .pipe(clean())
));

gulp.task('clean:css', () => (
    gulp.src('dist/css', { read: false })
        .pipe(clean())
));

gulp.task('clean:site', () => (
    gulp.src('dist/site', { read: false })
        .pipe(clean())
));

gulp.task('build:css', ['clean:css'], () => (
    gulp.src('src/sass/all.scss')
        .pipe(sassify())
        .pipe(rename({
            basename: 'styleguide',
        }))
        .pipe(gulp.dest('dist/css'))
));

gulp.task('build:site', ['clean:site'], done => {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    );
    webpack(webpackConfig, (err, stats) => {
        console.log(err, stats);
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            colors: true,
        }));
        done();
    });
});

gulp.task('watch:css', () => {
    const sassGlob = path.join(paths.src, 'sass/**/*.scss');
    return gulp.watch(sassGlob, ['build:css']);
});

gulp.task('watch:site', ['clean:site'], () => {
    webpackConfig.watch = true;
    webpack(webpackConfig, (err, stats) => {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            colors: true,
        }));
    });
});

gulp.task('default', ['clean', 'build:css', 'watch:css'], () => {
    yargs.option('port', {
        alias: 'p',
        describe: 'port to run webpack-dev-server on',
        default: 9000,
    });
    const port = yargs.argv.port;
    const uri = `http://localhost:${port}/`;
    webpackConfig.entry.unshift(
        `webpack-dev-server/client?${uri}`,
        'webpack/hot/dev-server'
    );
    const compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, webpackConfig.devServer).listen(port, 'localhost', err => {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log('[webpack-dev-server]', uri);
    });
});

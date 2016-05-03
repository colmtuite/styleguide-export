const path = require('path');
const webpack = require('webpack');
const Eyeglass = require('eyeglass');
const autoprefixer = require('autoprefixer');

const paths = {
    root: __dirname,
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
};

const eyeglass = new Eyeglass({
    outputStyle: 'compressed',
    // eyeglass options
    eyeglass: {
        root: paths.root,
        buildDir: path.resolve(paths.dist, 'site'),
        assets: {
            httpPrefix: path.join('styleguide', 'assets'),
            sources: [{
                directory: path.resolve(paths.src, 'assets'),
                globOpts: {
                    pattern: 'images/**/*',
                },
            }],
        },
    },
});

module.exports = {
    context: path.join(paths.src, 'site'),
    devtool: 'source-map',

    entry: [
        './index.html',
        './js/index.jsx',
    ],

    module: {
        // TODO: Remove this line when https://github.com/webpack/webpack/issues/1721 is fixed
        noParse: [/autoit.js/],
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
        loaders: [
            {
                test: /\.(html|png|jpg|jpeg|gif|svg)$/,
                loader: 'file?name=[path][name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass'],
            },
        ],
    },

    resolve: {
        root: path.resolve(paths.src, 'site'),
        packageAlias: 'browser',
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(paths.dist, 'site', 'styleguide'),
        publicPath: '/styleguide/',
        libraryTarget: 'umd',
        library: 'marvelStyleguide',
    },

    sassLoader: eyeglass.options,
    postcss: () => [autoprefixer],

    plugins: [new webpack.HotModuleReplacementPlugin()],

    devServer: {
        stats: {
            colors: true,
        },
        contentBase: path.resolve(paths.dist, 'site'),
        historyApiFallback: true,
        hot: true,
    },
};

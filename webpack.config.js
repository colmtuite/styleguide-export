const path = require('path');
const webpack = require('webpack');
const Eyeglass = require('eyeglass');

const paths = {
    root: __dirname,
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
};

const eyeglass = new Eyeglass({
    outputStyle: 'compressed',
    includePaths: [path.resolve(paths.src, 'sass'), path.resolve('ass')],
    // eyeglass options
    eyeglass: {
        root: paths.root,
        buildDir: path.resolve(paths.dist, 'site'),
        assets: {
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
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
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
        path: path.resolve(paths.dist, 'site'),
        libraryTarget: 'umd',
        library: 'marvelStyleguide',
    },

    sassLoader: eyeglass.options,

    plugins: [new webpack.HotModuleReplacementPlugin()],

    devServer: {
        stats: {
            colors: true,
        },
        contentBase: path.resolve(paths.dist, 'site'),
        hot: true,
    },
};

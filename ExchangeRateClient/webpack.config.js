const webpack = require('webpack');

const webpackConfig = {
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    entry: {
        app: './app/app.js',
    },
    output: {
        filename: '[name].js',
        library: 'app',
        libraryTarget: 'window',
    },
    resolve: {
        extensions: ['', '.js', '.json'],
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|Generated)/,
            loader: 'babel',
        }, {
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.css$/,
            exclude: [/node_modules/, '/app/global.css'],
            loader: "style!css?modules"
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loader: "style!css"
        }]
    },
    devtool: 'eval',
    devServer: {
        contentBase: './app',
    },
};

module.exports = webpackConfig;

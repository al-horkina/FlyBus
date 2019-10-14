const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }, {
                    loader: 'postcss-loader',
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}}
                }, {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }, {
                    loader: 'postcss-loader',
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}}
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/airport.html`,
            filename: './airport.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-rs.html`,
            filename: './schedule-rs.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-center.html`,
            filename: './schedule-center.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/map.html`,
            filename: './map.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index-ru.html`,
            filename: './index-ru.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index-ua.html`,
            filename: './index-ua.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/airport-ru.html`,
            filename: './airport-ru.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/airport-ua.html`,
            filename: './airport-ua.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-rs-ru.html`,
            filename: './schedule-rs-ru.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-rs-ua.html`,
            filename: './schedule-rs-ua.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-center-ru.html`,
            filename: './schedule-center-ru.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/schedule-center-ua.html`,
            filename: './schedule-center-ua.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/map-ru.html`,
            filename: './map-ru.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/map-ua.html`,
            filename: './map-ua.html'
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
            {from: `${PATHS.src}/static`, to: ''},
        ])
    ],
}

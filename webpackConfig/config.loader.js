'use strict';
var path = require('path');
var ROOT_PATH = path.join('../');
var EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin');
module.exports = {
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate?add=true', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: EXTRACT_TEXT_PLUGIN.extract("style-loader", "css-loader","css?-url",{publicPath:ROOT_PATH}),
                // exclude: /node_modules/
            },
            // {
            //     test: /\.jade$/,
            //     loader: 'jade-loader'
            // },
            {
                include: /\.(pug|jade)/,
                // pass options to pug as a query ('pug-html-loader?pretty')
                loaders: ['html-loader', 'pug-html-loader?exports=false']
            },
            {
                test: /\.html$/i,
                loader: 'html',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: EXTRACT_TEXT_PLUGIN.extract(
                    'style',
                    "css?sourceMap!stylus?sourceMap",
                    {publicPath:ROOT_PATH}
                    // {publicPath:'../'}
                ),
                exclude: /node_modules/
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)\??.*$/,
                loader: 'file?name=/images/font/[name]_[sha512:hash:base64:7].[ext]',
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file?name=/images/[name]_[sha512:hash:base64:7].[ext]'
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     loader: 'url?limit=40000&name=images/[name].[hash].[ext]'
            // }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }


};
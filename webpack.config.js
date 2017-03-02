'use strict';
var webpack = require('webpack');
//进出口
var entrys =require('./webpackConfig/config.entry');
//loader
var loaders =require('./webpackConfig/config.loader');
//plugin
var plugins =require('./webpackConfig/config.plugins');
//server
var devServer =require('./webpackConfig/config.devServer');

//定义config
function webpackConfig() {
    var ENV = process.env.npm_lifecycle_event;
    var UglifyFun = new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        },
        sourceMap: false,
        mangle: true
    })//生产压缩

    var config = {
        module : loaders.module,
        babel : loaders.babel,
        resolve : entrys.resolve,
        entry : entrys.entry,
        output : entrys.output,
        plugins : plugins.plugins,
        devtool : devServer.devtool,
        devServer : devServer.devServer
    };
    if(ENV === ('win-prod' || 'mac-prod')){
        config.plugins.push(UglifyFun)
    }
    return config;
};

module.exports = webpackConfig();
'use strict';
var path = require('path');
var ROOT_PATH = path.join('../');
var webpack = require('webpack');
var HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');//可以将打包好的文件动态加载到html中
var EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin');//将你的样式提取到单独的css文件里，如果没有它的话，webpack会将css打包到js当中
// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ENV = process.env.npm_lifecycle_event;

module.exports = {

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',// 将公共模块提取，生成名为`vendors`bundle
            filename: 'js/vendors.js',
            chunks: ['app'],//提取哪些模块共有的部分,名字为上面的vendor
            // 对所有entry实行这个规则
            // minChunks: Infinity
        }),
        //ProvidePlugin插件主要是进行设置全局模块，
        // 比如jquery插件几乎所有的页面都用到，
        // 使用require('jquery')引用写起来比较多，
        // 这个时候就可以使用ProvidePlugin 把jquery设置为全局的，
        // 每个页面就可以 直接使用了。
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        }),
        new EXTRACT_TEXT_PLUGIN('css/[name].css', {allChunks: true,publicPath:ROOT_PATH}),
        new HTML_WEBPACK_PLUGIN({
            favicon: 'aue_favicon.ico',
            filename: './index.html',//生成的html存放路径，相对于 path
            template: './src/index.jade',
            chunks: ['vendors', 'app'],//需要引入的chunk，不配置就会引入所有页面的资源.名字来源于你的入口文件
            inject: true,//允许插件修改哪些内容，包括head与body
            minify: {//压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: true//删除空白符与换行符
            }
        }),
        // UglifyFun(),//生产压缩
        // new ngAnnotatePlugin({
        //     add: true
        //     // other ng-annotate options here
        // })
        //new webpack.HotModuleReplacementPlugin() 热加载
        //变量
        new webpack.DefinePlugin({
            API: ENV === ('win-prod' || 'mac-prod') ? '"/dataBase"':JSON.stringify('/dev')
        })
    ]

};
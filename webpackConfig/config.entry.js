'use strict';
var path = require('path');
var ROOT_PATH = path.join(__dirname, '../');
var ENV = process.env.npm_lifecycle_event;
module.exports = {
    //出口公共配置
    output: {
        path: path.join(ROOT_PATH + 'dist'),//输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.名字可以随便起
        //publicPath: ENV === ('win-prod' || 'mac-prod') ? '/build/':'/' ,//模板、样式、脚本、图片等资源对应的server上的路径
        filename: ENV === ('win-prod' || 'mac-prod') ? 'js/[name].js':'js/[name].[hash].js',//每个页面对应的主js的生成配置。比如我的app.js打包后就为  js/app.bundle.js
        chunkFilename: 'js/[id].chunks.js',//bundle生成的配置
        // publicPath:'http://localhost:1123/'
    },
    //入口公共文件
    //配置入口文件，有几个写几个。我这里有两个文件。一个是所有我需要引入的文件，一个是我的入口文件，app.js
    //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出,比如下面数组里面的js,全部压缩在了vendor这个文件这里
    entry: {
        vendors: [
            /*angular*/'angular', 'angular-ui-router',/*, 'angular-animate',*/
            /*other*/'jquery'/*,'moment'*/
        ],
        app: path.join(ROOT_PATH + 'src/app/app.js')
    },
    
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'npm': ROOT_PATH + '/node_modules',
            'jquery': 'jquery/dist/jquery.min.js',
            'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min.js',
            'angular': 'angular/angular.min.js',
            //'angular-animate': 'angular-animate/angular-animate.min.js',
            //'moment': 'moment/moment.js'
        },
        extensions: ['', '.js', '.html', '.jade', '.css', '.styl']
    }

};
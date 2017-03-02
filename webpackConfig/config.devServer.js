'use strict';
var ENV = process.env.npm_lifecycle_event;
module.exports = ENV === ('win-prod' || 'mac-prod') ?
{
    devtool: 'cheap-source-map'
}:
 {
        devtool: 'eval',

        devServer: {
            port: 1123,//比如我是监听1122端口
            contentBase: __dirname + '../',
            inline: true, //可以监控js变化
            hot: false, //热启动
            proxy: {
                '/dev': {
                    target: 'http://znzheng.com/dataBase',
                    // target: 'http://znzheng.com/',
                    pathRewrite: {'^/dev' : ''},
                    changeOrigin: true,
                    secure: false
                }
            }
        }

    };
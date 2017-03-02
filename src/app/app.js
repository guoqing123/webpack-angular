
'use strict';
import 'angular';
import 'angular-ui-router';


import  appConfig from './app.config.js';
//import  httpProviders from './app.httpProviders.js'


const appModule = ['ui.router'];
export default angular.module('app',appModule)
    .config(appConfig)
    //.config(httpProviders)
    .name

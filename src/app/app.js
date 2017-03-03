
'use strict';
import './app.styl'
import 'angular';
import 'angular-ui-router';


import homePage from './homepage'


import  appConfig from './app.config.js';
//import  httpProviders from './app.httpProviders.js'


const appModule = ['ui.router',homePage];
export default angular.module('app',appModule)
    .config(appConfig)
    //.config(httpProviders)
    .name

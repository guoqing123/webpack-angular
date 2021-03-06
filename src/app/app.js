
'use strict';
import './app.styl'
import 'angular';
import 'angular-ui-router';
import  'ng-infinite-scroll'
import 'angular-ui-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import comm from './common'
import directive from './directive'
import filter from './filter'
import login from './login'
import homePage from './homepage'


import  appConfig from './app.config.js';
//import  httpProviders from './app.httpProviders.js'


const appModule = ['ui.bootstrap','ui.router','infinite-scroll',comm,directive,filter,login,homePage];
export default angular.module('app',appModule)
    .config(appConfig)
    //.config(httpProviders)
    .name

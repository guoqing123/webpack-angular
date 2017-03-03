/**
 * Created by Administrator on 2017/3/2 0002.
 */
'use strict';

import appTemp from './app.jade';
import appCtrl from './app.Controller.js'
export default ($stateProvider,$urlRouterProvider,$locationProvider) => {
    'ngInject';
    $stateProvider.state('app',{
        abstract: true,
        template: appTemp,
        controller: appCtrl,
        controllerAs: 'vm'
    });
    $urlRouterProvider.when('','/homePage');
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode('true');
}
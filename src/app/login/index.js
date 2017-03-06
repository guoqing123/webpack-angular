/**
 * Created by Administrator on 2017/3/6 0006.
 */

import loginHtml from './login.jade'
import './login.styl'



export default angular.module('app.login',[])
    .config(($stateProvider,$urlRouterProvider) => {
        'ngInject';

        $stateProvider.state('login',{
            parent: '',
            url: '/login',
            component: 'login'
        })

    })
    .component('login',{
        template: loginHtml,
        controller: function($scope){
            $scope.loadShow = 1
            $scope.login = function () {
                $scope.loadShow = 2
            }
        }
    })
    .name
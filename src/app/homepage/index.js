/**
 * Created by Administrator on 2017/3/3 0003.
 */

//import homePageList1 from './list/index.js'
import homePageComp from './homePage.jade'
import homePageListComp from './list/list.jade'
import homePageListCtrl from './list/listCtrl.js'
export default angular.module('homePage',[])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('homePage',{
                parent: 'app',
                url: '/homePage',
                //abstract: true,
                template: homePageComp
            }).state('homePageList',{
                parent: 'homePage',
                url: '/homePageList',
                template: homePageListComp,
                controller: homePageListCtrl,
                controllerAs: 'vm'
                //component:'homePageList'
            })
    })
    .name
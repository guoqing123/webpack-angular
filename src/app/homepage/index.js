/**
 * Created by Administrator on 2017/3/3 0003.
 */

import homePageList1 from './list/index.js'

export default angular.module('homePage',[ homePageList1, ])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('homePage',{
                parent: 'app',
                url: '/homePage',
                abstract: true,
                template: '<div ui-view class="home-page"></div>'
            })
            .state('homePage.homePageList',{
                //parent: 'homePage',
                url: '/homePageList',
                views: {
                    '@homePage':
        {
            template: '<div >12544654654654</div>'
            //component: 'homePageList'
        }
    }

            })
    })
    .name
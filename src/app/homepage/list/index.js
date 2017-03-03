/**
 * Created by Administrator on 2017/3/3 0003.
 */

import homePageListComp from './list.jade'
import homePageListCtrl from './listCtrl.js'

export default angular.module('homePage-list',[])
    .component('homePageList',{
        template: homePageListComp,
        controller: homePageListCtrl,
        controllerAs: 'vm'
    })
    .name
/**
 * Created by Administrator on 2017/3/2 0002.
 */
'use strict';

export default class appCtrl{
    constructor($http,$scope,$state){
        'ngInject';
        Object.assign(this,{$http,$scope,$state})

        this.menu = [
            {
                id: 1,
                name:'HomePage',
                href: 'homePageList'
            },
            {
                id: 2,
                name:'Campaign',
                href: 'Campaign'
            }
        ];
        this.menuClick = function(index){
            if($state.includes(this.menu[index]['href'])){
                return true;
            }
            return false;
        }
    }
}
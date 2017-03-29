/**
 * Created by Administrator on 2017/3/2 0002.
 */
'use strict';

export default class appCtrl{
    constructor($http,$scope,$state){
        'ngInject';
        Object.assign(this,{$http,$scope,$state})
    }
}
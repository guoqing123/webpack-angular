/**
 * Created by Administrator on 2017/3/3 0003.
 */
import './list.styl'
export default class HomePageListCtrl{
    constructor($http){
        'ngInject';
        Object.assign(this,{$http});


    }
    $onInit(){
        this.data = [
            {name:'0',id: 1},
            {name:'1',id: 2},
            {name:'2',id: 3},
            {name:'3',id: 4},
            {name:'4',id: 5}
        ]
    }
    itemSelect(value){
        this.typeId = value.id
        console.log(this.typeId)
    }
}
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

        this.getMoreIterm = 0;
        this.getMoreList1 = [];
        this.getMoreList = [
            {//1
                url:'/Map/Graph/pcVAST',
                title:'PDB-PC端VAST分阶段&总的识别率--秒针',
                data:this.barData4
            },
            {//2
                url:'/Map/Graph/pcS2S',
                title:'PDB-PC端S2S分阶段&总的识别率--秒针',
                data:this.barData4
            },
            {//3
                url:'/Map/Graph/mobiTotal',
                title:'PDB-移动端总的识别率--秒针',
                data:this.barData4
            },
            {//4
                url:'/Map/Graph/timeUsed',
                title:'PDB处理请求超时',
                data:this.barData4
            },
            {//5
                url:'/Map/Graph/pcPublisher',
                title:'PDB-PC端分媒体总的识别率--秒针',
                data:this.barData4
            },
            {//6
                url:'/Map/Graph/mobiPublisher',
                title:'PDB-移动端分媒体总的识别率--秒针',
                data:this.barData4
            },
            {//7
                url:'/Map/Graph/s2sMiaozhen',
                title:'PDB-S2S分媒体分阶段识别率',
                data:this.barData4
            },
            {//8
                url:'/Map/Graph/pcStable',
                title:'PDB-PC端分媒体稳定人群占比',
                data:this.barData4
            },
            {//9
                url:'/Map/Graph/mobiTotalTD',
                title:'PDB-移动端总的识别率--talkingData',
                data:this.barData4
            },
            {//10
                url:'/Map/Graph/mobiTotalAD',
                title:'PDB-移动端总的识别率--admaster',
                data:this.barData4
            },
            {//11
                url:'/Map/Graph/pcVASTAD',
                title:'PDB-PC端VAST分阶段&总的识别率--admaster',
                data:this.barData4
            },
            {//12
                url:'/Map/Graph/pcS2SAD',
                title:'PDB-PC端S2S分阶段&总的识别率--admaster',
                data:this.barData4
            }
        ]
        this.Reddit =  {
            items :'加载中。。。',
            busy : false,
        };
    }
    itemSelect(value){
        this.typeId = value.id
        console.log(this.typeId)
    }

    getMore(){
        if(this.getMoreIterm >= this.getMoreList.length){
            return
        }
        this.getMoreList1.push(this.getMoreList[this.getMoreIterm])
        this.getMoreIterm++
    }


}
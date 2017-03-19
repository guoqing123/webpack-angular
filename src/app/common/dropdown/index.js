/**
 * Created by caiguoqing on 2017/3/19.
 */

const template = `
<div class="drop-down" ng-click="$ctrl.open()">
    <div class="drop-down-input" ng-class="{'active':$ctrl.isShow}" ng-bind="$ctrl.defaultText"></div>
    <ul class="drop-down-select ng-hide" ng-class="{'isNone':$ctrl.noneData}">
    <li class="select-item" ng-repeat="item in $ctrl.optionsInfo" ng-bind = "item[$ctrl.itemName]" ng-click = $ctrl.select($index)></li>
</ul>
</div>

`
export default angular.module('dropDown',[])
    .component('dropDown',{
        template,
        replace: true,
        bindings: {
            optionsInfo: '<',
            defaultText: '@?',
            itemName: '@',
            callBack: '&'
        },
        controller($scope,$element,$document){
            const ctrl = this;
            ctrl.isShow = false
            ctrl.noneData = false
            ctrl.select = function(index){
                if(index > -1 && ctrl.optionsInfo){
                    ctrl.defaultText = ctrl.optionsInfo[index][ctrl.itemName];
                    ctrl.callBack({value:ctrl.optionsInfo[index],index});
                }else{
                    console.log(123)
                }

            }
            let flag = true
            ctrl.open = function () {
                if($element.find('ul').hasClass('ng-hide')){
                    $element.find('ul').removeClass('ng-hide')
                    ctrl.isShow = true
                    onClose()
                }else{
                    $element.find('ul').addClass('ng-hide')
                    ctrl.isShow = false
                }
                flag = false
                if(ctrl.optionsInfo == ''){
                    ctrl.noneData = true;
                }
            }


            function onClose(){
                $document.on('click',isClose)
            }
            function offClose(){
                $document.off('click',isClose)
            }

            function isClose(){
                if(flag){
                    $element.find('ul').addClass('ng-hide')
                    $scope.$apply(() => {
                        ctrl.isShow = false
                    })
                    offClose()
                }
                flag = true
            }

        }
    })
.name
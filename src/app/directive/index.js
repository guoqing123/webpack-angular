/**
 * Created by Administrator on 2017/3/7 0007.
 */


export default angular.module('app.directive',[])
    .directive('ngFocus',() => {
        let FOCUS_CLASS = "ng-focused";
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope,element,attrs,ctrl){
                ctrl.$focused = false;
                element.bind('focus',(evt) => {
                    element.addClass(FOCUS_CLASS);
                    scope.$apply(() => ctrl.$focused = true)
                }).bind('blur',(evt) => {
                    element.removeClass(FOCUS_CLASS);
                    scope.$apply(() => ctrl.$focused = false)
                })
            }
        }
    })
.name
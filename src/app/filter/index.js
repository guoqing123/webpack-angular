/**
 * Created by Administrator on 2017/3/6 0006.
 */


export default angular.module('app.filter',[])
    .filter('capitalize',() =>{
        return (input) => {
            if(input){
                return input[0].toUpperCase() + input.slice(1)
            }
        }
    })
    .name
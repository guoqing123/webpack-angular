/**
 * Created by Administrator on 2017/3/6 0006.
 */
import commonConfig from  './config/ui.router.component';
import DropDown from './dropdown/index'
import Datepicker from './Datepicker/index'

export default angular.module('common',[
    commonConfig,DropDown,Datepicker
])
    .name
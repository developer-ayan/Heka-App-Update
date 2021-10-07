import { combineReducers } from 'redux';

import tabReducer from './tabReducer';
import marketReducer from './marketReducer';


export default combineReducers({
    tabReducer,
    marketReducer
 })

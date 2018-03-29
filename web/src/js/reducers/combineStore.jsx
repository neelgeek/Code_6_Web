import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import singleProduceReducer from './singleItemReducer'
import singleTruckReducer from './singleTruckReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'






// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer,
    itemReducer,
    authReducer,
    singleProduceReducer,
    singleTruckReducer,
    orderReducer,
    checkoutReducer,
  // imported reducers
});


export default combineStore;		
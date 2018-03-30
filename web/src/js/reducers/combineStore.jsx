import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import singleProduceReducer from './singleItemReducer'
import singleTruckReducer from './singleTruckReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'
<<<<<<< HEAD
import transportAuthReducer from './transportAuthReducer'
import transportTruckRequestReducer from './transportTruckRequestReducer'
=======
import TransactionReducer from './TransactionReducer'

>>>>>>> 0b4c1d5c6feef23ec98e2810793c9648ad01e542






// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer,
    itemReducer,
    authReducer,
    singleProduceReducer,
    singleTruckReducer,
    orderReducer,
    checkoutReducer,
<<<<<<< HEAD
    transportAuthReducer,
    transportTruckRequestReducer,
=======
    TransactionReducer,
>>>>>>> 0b4c1d5c6feef23ec98e2810793c9648ad01e542
  // imported reducers
});


export default combineStore;		
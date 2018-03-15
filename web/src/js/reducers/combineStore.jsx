import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
import itemReducer from './itemReducer'
import authReducer from './authReducer'


// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer,
    itemReducer,
    authReducer,
  // imported reducers
});


export default combineStore;
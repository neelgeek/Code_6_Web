import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
import itemReducer from './itemReducer'

// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer,
    itemReducer
  // imported reducers
});


export default combineStore;
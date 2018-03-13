import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer
  // imported reducers
});


export default combineStore;
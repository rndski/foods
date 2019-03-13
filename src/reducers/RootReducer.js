import { combineReducers } from 'redux';
import chicken from './ChickenReducer';
import beef from './BeefReducer';

const rootReducer = combineReducers({
  chicken,
  beef
})

export default rootReducer;

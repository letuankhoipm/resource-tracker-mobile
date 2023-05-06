import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import msgReducer from './msg.reducer';

export default combineReducers({
  authReducer,
  msgReducer,
});

import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import msgReducer from './msg.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  authReducer,
  msgReducer,
  userReducer,
});

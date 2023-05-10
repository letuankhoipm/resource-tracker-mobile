import {Reducer} from '@reduxjs/toolkit';
import {initialState} from '../states/user.state';
import {
  ActionRedux,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/action.type';

const authReducer: Reducer = (state = initialState, action: ActionRedux) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        token: null,
      };

    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;

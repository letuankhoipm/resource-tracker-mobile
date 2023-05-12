import {Reducer} from '@reduxjs/toolkit';
import {initialState} from '../states/user.state';
import {ActionRedux, GET_USER_SUCCESS} from '../types/action.type';

const userReducer: Reducer = (state = initialState, action: ActionRedux) => {
  const {type, payload} = action;

  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        userDetail: payload,
      };

    default:
      return state;
  }
};

export default userReducer;

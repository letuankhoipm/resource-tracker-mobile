import {Reducer} from '@reduxjs/toolkit';
import {ActionRedux, CLEAR_MESSAGE, SET_MESSAGE} from '../types/action.type';

const initialState = {};

const msgReducer: Reducer = (state = initialState, action: ActionRedux) => {
  const {type, payload} = action;

  switch (type) {
    case SET_MESSAGE:
      return {message: payload};

    case CLEAR_MESSAGE:
      return {message: ''};

    default:
      return state;
  }
};

export default msgReducer;

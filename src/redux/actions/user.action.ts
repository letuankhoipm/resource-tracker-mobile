import {Dispatch} from 'redux';
import {ActionRedux, GET_USER_SUCCESS} from '../types/action.type';
import userService from '../../services/user.service';

export const actGetUser = () => (dispatch: Dispatch<ActionRedux>) => {
  return userService.getMyInformation().then(
    (res: {token: any}) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res,
      });

      return Promise.resolve();
    },
    () => {
      return Promise.reject();
    },
  );
};

import {Dispatch} from 'redux';
import {LoginPayload} from '../../model/common/payload.model';
import authService from '../../services/auth.service';
import {
  ActionRedux,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_MESSAGE,
} from '../types/action.type';

export const actLogin =
  (payload: LoginPayload) => (dispatch: Dispatch<ActionRedux>) => {
    return authService.login(payload).then(
      (res: {token: any}) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.token,
        });

        return Promise.resolve();
      },
      () => {
        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: 'Login Fail',
        });

        return Promise.reject();
      },
    );
  };

export const actLogout = () => (dispatch: Dispatch<ActionRedux>) => {
  authService.logout();

  dispatch({type: LOGOUT});
};

import { postLoginCredential } from 'apiProvider';
import history from 'cust-history';

export const onUserLogin = credential => dispatch => async () => {
  try {
    console.log(credential);
    const { data } = await postLoginCredential(credential);
    dispatch({
      type: 'ON_USER_LOGIN',
      payload: data
    });
    history.push('/profile');
  } catch (e) {
    dispatch({
      type: 'ON_USER_LOGIN_FAILED',
      payload: e.message
    });
  }
};

export const onUserLogout = dispatch => {
  dispatch({
    type: 'ON_USER_LOGOUT'
  });
};

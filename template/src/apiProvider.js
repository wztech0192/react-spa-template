import axios from 'axios';
import store from 'stores';
import { baseURL } from 'commons';

const apibaseURL = `${baseURL}/api`;
const timeout = 20000;

// Do http request, time out after 5 sec
const publicApiInstance = axios.create({
  baseURL: apibaseURL,
  timeout
});

const authApiInstance = () =>
  axios.create({
    baseURL: apibaseURL,
    timeout,
    headers: {
      //this is for jwt token... not sure what you are going to use
      Authorization: `Bearer ${store.getState().user.token}`
    }
  });

const fakeCall = data =>
  new Promise(resolve =>
    resolve({
      data: data
    })
  );

export const postLoginCredential = data => {
  //just for demo
  if (data.password === '123' && data.username === 'dev')
    return fakeCall({
      username: 'dev',
      token: 'waiodjawo213',
      userFullName: 'Developer'
    });

  return publicApiInstance.post('login', data);
};

//publicApiInstance.post('login', data);

export const getSomethingPrivate = data =>
  authApiInstance.get('user/secret/stuff');

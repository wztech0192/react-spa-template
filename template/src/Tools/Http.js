import axios from 'axios';

// Do http request, time out after 5 sec
export default () =>
  axios.create({
    baseURL: 'url',
    timeout: 5000,
    headers: {
      Authorization: `Bearer `
    }
  });

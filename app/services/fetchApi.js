// this file used as a service in fetching APIs
import {BASE_URL} from '../utils/constants';

// here's where we handle errors
async function handleErrors(response) {
  if (response.status >= 200 && response.status < 400) {
    return response.json();
  } else {
    const body = await response.json();
    const err = new Error(body.error.message);
    throw err;
  }
}

const api = {
  getData(URL, Method) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(BASE_URL + URL, {
      method: Method,
      headers,
    }).then(handleErrors);
  },
};

export default api;

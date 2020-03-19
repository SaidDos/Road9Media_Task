import * as actionTypes from '../actionTypes';
import api from '../../../services/fetchApi';

const listServicesAttempt = () => ({type: actionTypes.LIST_SERVICES_ATTEMPT});

const listServicesFailed = () => ({type: actionTypes.LIST_SERVICES_FAILED});

const listServicesSuccess = responseJson => ({
  type: actionTypes.LIST_SERVICES_SUCCESS,
  services: responseJson.services,
});

export const listServices = listServicesRequestResponseHandler => dispatch => {
  dispatch(listServicesAttempt());
  api
    .getData('/posts', 'GET')
    .then(responseJson => {
      console.log('response : '+JSON.stringify(responseJson))
      dispatch(listServicesSuccess(responseJson));
      listServicesRequestResponseHandler.onSuccess();
    })
    .catch(error => {
      dispatch(listServicesFailed());
      listServicesRequestResponseHandler.onFail(error);
    });
};

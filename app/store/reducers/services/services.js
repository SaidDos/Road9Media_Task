import * as actionTypes from '../../actions/actionTypes';
import updateObject from '../../../utils/functions/updateObject';
import Service from '../../../models/Service';
import {SERVICES} from '../../../utils/constants';

const initialState = {
  services: [], // initializing services of empty array
  isLoading: false,
};

const mappingServices = (state, services) => {
  if (services && services.length) {
    // in case there's a response we map it first to our service model
    const mappedServices = services.map(service => {
      const aService = new Service();
      aService.mapService(service);
      return aService;
    });
    return updateObject(state, {services: mappedServices, isLoading: false});
  }
  return updateObject(state, {services: SERVICES, isLoading: false}); // this is our case here we get data from local file
};

const listServices = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_SERVICES_SUCCESS:
      return mappingServices(state, action.services);
    case actionTypes.LIST_SERVICES_ATTEMPT:
      return updateObject(state, {isLoading: true});
    case actionTypes.LIST_SERVICES_FAILED:
      return updateObject(state, {isLoading: false});
    default:
      return state;
  }
};

export default listServices;

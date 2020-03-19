import * as actionTypes from '../../actions/actionTypes';
import updateObject from '../../../utils/functions/updateObject';
import Service from '../../../models/Service';
import {FAKED_SERVICES} from '../../../utils/constants';

const initialState = {
  services: [],
  isLoading: false,
};

const mappingServices = (state, services) => {
  if (services && services.length) {
    const mappedServices = services.map(service => {
      const aService = new Service();
      aService.mapService(service);
      return aService;
    });
    return updateObject(state, {services: mappedServices, isLoading: false});
  }
  return updateObject(state, {services: FAKED_SERVICES, isLoading: false});
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

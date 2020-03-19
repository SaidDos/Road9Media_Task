import {checkValue} from '../utils/functions/checkValue';

// Service Model
export default class Service {
  mapService(service) {
    this.id = checkValue(service.id, null);
  }
}

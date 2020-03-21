import {checkValue} from '../utils/functions/checkValue';

// Service Model
export default class Service {
  mapService(service) {
    this.id = checkValue(service.id, null);
    this.name = checkValue(service.name, '');
    this.type = checkValue(service.type, '');
    this.rate = checkValue(service.rate, 0);
    this.price = checkValue(service.price, 0);
    this.image = checkValue(service.image, '');
    // ... more atributes
  }
}

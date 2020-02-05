import Car from "../Models/Cars.js"
import _store from "../store.js"

class CarService {

  addCar(newCar) {
    newCar = new Car(newCar)
    _store.State.cars.push(newCar)
  }
  constructor() {
    console.log("car service is working")
  }
}

const CARSERVICE = new CarService();
export default CARSERVICE

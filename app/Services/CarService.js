import Car from "../Models/Cars.js"
import _store from "../store.js"
import store from "../store.js"


// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/cars",
  timeout: 3000
})


class CarService {
  delete(id) {
    _api.delete(id)
      .then(res => {
        let filteredCars = _store.State.cars.filter(c => c._id != id)
        _store.commit("cars", filteredCars)
      })
      .catch(error => {
        console.error(error)
      })
  }
  editCar(id, update) {
    _api.put(id, update)
      .then(res => {
        let car = _store.State.jobs.find(c => c._id == id)
        for (let prop in update) {
          car[prop] = update[prop]
        }
        _store.commit("cars", _store.State.cars)
      })
      .catch(error => {
        console.error(error)
      })
  }
  constructor() {
  }
  getAllCars() {
    _api.get("")
      .then(res => {
        let _apiCars = res.data.data.map(c => new Car(c));
        store.commit("cars", _apiCars)
      })
      .catch(error => {
        console.error(error)
      })
  }

  addCar(newCar) {
    _api.post("", newCar)
      .then(res => {
        let newApiCar = new Car(res.data.data)
        let cars = [..._store.State.cars, newApiCar]
        _store.commit("cars", cars)
      }).catch(error => {
        console.error(error);
      });

  }
}

const CARSERVICE = new CarService();
export default CARSERVICE

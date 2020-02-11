
import _carService from "../Services/CarService.js"
import _store from "../store.js"

function _drawCar() {
  let cars = _store.State.cars
  let carsElem = document.getElementById("car-row")
  let template = ''

  cars.forEach(car => {
    template += car.Template
  });

  carsElem.innerHTML = template
}
export default class CarController {

  constructor() {
    _store.subscribe("cars", _drawCar)
    this.getAllCars()

  }

  getAllCars() {
    _carService.getAllCars()
  }


  addCar(event) {
    event.preventDefault()
    let formData = event.target
    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      description: formData.description.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value
    }

    _carService.addCar(newCar)
    formData.reset()
    // @ts-ignore
    $('#car-form').modal('toggle');
    _drawCar()
  }

  bid(id, price) {
    _carService.editCar(id, { price })
  }

  delete(id) {
    _carService.delete(id)
  }

}

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
    console.log("car controller works")
  }

  addCar(event) {
    event.preventDefault()
    let formData = event.target
    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      color: formData.color.value,
      price: formData.price.value
    }

    console.log(newCar)
    _carService.addCar(newCar)
    formData.reset()
    $('#car-form').modal('toggle');
    _drawCar()
  }



}
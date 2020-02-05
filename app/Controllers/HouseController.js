import _houseService from "../Services/HouseService.js"
import _store from "../store.js"


function _drawHouse() {
  let houses = _store.State.houses
  let houseElem = document.getElementById("house-row")
  let template = ''

  houses.forEach(house => {
    template += house.Template
  })

  houseElem.innerHTML = template
}


export default class HouseController {


  constructor() {

    console.log("house controller works")
  }

  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let newHouse = {
      type: formData.type.value,
      year: formData.year.value,
      rooms: formData.rooms.value,
      city: formData.city.value,
      price: formData.price.value,
    }
    _houseService.addHouse(newHouse)
    formData.reset()
    $('#house-form').modal('toggle');
    _drawHouse()
  }

}
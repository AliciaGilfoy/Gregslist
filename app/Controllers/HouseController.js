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
  getAllHouses() {
    _houseService.getAllHouses()
  }


  constructor() {
    _store.subscribe("houses", _drawHouse)
    this.getAllHouses()

  }

  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let newHouse = {
      imgUrl: formData.imgUrl.value,
      year: formData.year.value,
      levels: formData.levels.value,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      price: formData.price.value,
      description: formData.description.value
    }
    _houseService.addHouse(newHouse)
    formData.reset()
    $('#house-form').modal('toggle');
    _drawHouse()
  }

  delete(id) {
    _houseService.delete(id)
  }

  bid(id, price) {
    _houseService.bid(id, { price })
  }


}
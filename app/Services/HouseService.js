import House from "../Models/Houses.js"
import _store from "../store.js"


class HouseService {

  addHouse(newHouse) {
    newHouse = new House(newHouse)
    _store.State.houses.push(newHouse)
  }
  constructor() {
    console.log("house service is working")
  }
}

const HOUSESERVICE = new HouseService();
export default HOUSESERVICE
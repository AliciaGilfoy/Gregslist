import House from "../Models/Houses.js"
import _store from "../store.js"


// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
})

class HouseService {
  bid(id, update) {
    _api.put(id, update)
      .then(res => {
        let house = _store.State.houses.find(h => h._id == id)
        for (let prop in update) {
          house[prop] = update[prop]
        }
        _store.commit("houses", _store.State.houses)
      })
      .catch(error => {
        console.error(error)
      })
  }
  delete(id) {
    _api.delete(id)
      .then(res => {
        let filteredHouses = _store.State.houses.filter(h => h._id != id)
        _store.commit("houses", filteredHouses)
      })
      .catch(error => {
        console.error(error)
      })
  }
  getAllHouses() {
    _api.get("")
      .then(res => {
        let apiHouses = res.data.data.map(h => new House(h))
        _store.commit("houses", apiHouses)
      })
      .catch(error => {
        console.error(error)
      })
  }

  addHouse(newHouse) {
    _api.post("", newHouse)
      .then(res => {
        let newApiHouse = new House(res.data.data)
        let houses = [..._store.State.houses, newApiHouse]
        _store.commit("houses", houses)
      }).catch(error => {
        console.error(error);
      });
  }
  constructor() {

  }
}

const HOUSESERVICE = new HouseService();
export default HOUSESERVICE
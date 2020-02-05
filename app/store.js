import Value from "./Models/Value.js";
import Car from "./Models/Cars.js";
import House from "./Models/Houses.js";
import Job from "./Models/Jobs.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars: [],
  /** @type {House[]} */
  houses: [],
  /** @type {Job[]} */
  jobs: [],

};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;

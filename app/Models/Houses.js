export default class House {

  constructor(data) {
    this.type = data.type
    this.year = data.year
    this.rooms = data.rooms
    this.city = data.city
    this.price = data.price
  }

  get Template() {
    return `
<div class="col-3">
<h1>${this.type}</h1>
<h3>Built ${this.year}</h3>
<p>${this.rooms} rooms</p>
<p>Located in ${this.city}</p>
<p>$${this.price}</p>
</div>
`
  }
}
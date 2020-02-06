export default class Car {

  constructor(data) {
    this.make = data.make
    this.year = data.year
    this.model = data.model
    this.color = data.color
    this.price = data.price
  }

  get Template() {
    return `
<div class="col-3 item">
<h1>${this.make}</h1>
<h2>${this.model}</h2>
<h3>Year: ${this.year}</h3>
<p>Color: ${this.color}</p>
<p>$${this.price}</p>
</div>
`
  }
}
export default class Car {

  constructor(data) {
    this._id = data._id
    this.make = data.make
    this.year = data.year
    this.model = data.model
    this.imgUrl = data.imgUrl || "https://placehold.it/200x200"
    this.price = data.price
    this.description = data.description
  }

  get Template() {
    return `
<div class="col-3 item">
<img src="${this.imgUrl}" class="rounded mx-auto d-block img-thumbnail">
<h1>${this.make}</h1>
<h2>${this.model}</h2>
<h3>Year: ${this.year}</h3>
<h4>$${this.price}</h4>
<p>${this.description}</p>
<button class="btn btn-success" onclick="app.carController.bid('${this._id}',${this.price + 50})">Bid</button>
<button class="btn btn-danger" onclick="app.carController.delete('${this._id}')">Delete</button>
</div>
`
  }
}
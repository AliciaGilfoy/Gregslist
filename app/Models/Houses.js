export default class House {

  constructor(data) {
    this._id = data._id
    this.imgUrl = data.imgUrl || "https://placehold.it/200x200"
    this.year = data.year
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.description = data.description
  }

  get Template() {
    return `
<div class="col-3 item">
<img src="${this.imgUrl}" class="rounded mx-auto d-block img-thumbnail">
<h3>Built ${this.year}</h3>
<p>${this.bedrooms} bedrooms</p>
<p>${this.bathrooms} bathrooms</p>
<p>${this.levels} level(s)</p>
<p>$${this.price}</p>
<p>${this.description}</p>
<button class="btn btn-success" onclick="app.houseController.bid('${this._id}',${this.price + 500})">Bid</button>
<button class="btn btn-danger" onclick="app.houseController.delete('${this._id}')">Delete</button>
</div>
`
  }
}


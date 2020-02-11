export default class Job {

  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
  }

  get Template() {
    return `
<div class="col-3 item">
<h1>${this.company} is hiring:</h1>
<h3>Job Title: ${this.jobTitle}</h3>
<h2>Salary: $${this.rate}</h2>
<p>Hours: ${this.hours}</p>
<p>Job Description: ${this.description}</p>
<button class="btn btn-success" onclick="app.jobController.apply('${this._id}',${this.hours - 1})">Apply</button>
<button class="btn btn-danger" onclick="app.jobController.delete('${this._id}')">Delete</button>
</div>
`
  }
}



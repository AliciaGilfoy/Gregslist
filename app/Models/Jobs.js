export default class Job {

  constructor(data) {
    this.business = data.business
    this.job = data.job
    this.salary = data.salary
    this.experience = data.experience
    this.description = data.description
  }

  get Template() {
    return `
<div class="col-3 item">
<h1>${this.business} is hiring:</h1>
<h3>Job Title: ${this.job}</h3>
<h2>Salary: $${this.salary}</h2>
<p>Experience Required: ${this.experience}</p>
<p>Job Description: ${this.description}</p>
</div>
`
  }
}

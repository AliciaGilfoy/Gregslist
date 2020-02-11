import _jobService from "../Services/JobService.js"
import _store from "../store.js"


function _drawJob() {
  let jobs = _store.State.jobs
  let jobElem = document.getElementById("job-row")
  let template = ''

  jobs.forEach(job => {
    template += job.Template
  });

  jobElem.innerHTML = template

}



export default class JobController {


  constructor() {
    _store.subscribe("jobs", _drawJob)
    this.getAllJobs()

  }

  addJob(event) {
    event.preventDefault()
    let formData = event.target
    let newJob = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      rate: formData.rate.value,
      hours: formData.hours.value,
      description: formData.description.value
    }
    _jobService.addJob(newJob)
    formData.reset()
    // @ts-ignore
    $('#job-form').modal('toggle');
    _drawJob()

  }

  getAllJobs() {
    _jobService.getAllJobs()
  }

  apply(id, hours) {
    _jobService.editJob(id, { hours })
  }

  delete(id) {
    _jobService.delete(id)
  }



}


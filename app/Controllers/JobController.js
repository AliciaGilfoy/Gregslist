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

    console.log("job controller works")
  }

  addJob(event) {
    event.preventDefault()
    let formData = event.target
    let newJob = {
      business: formData.business.value,
      job: formData.job.value,
      salary: formData.salary.value,
      experience: formData.experience.value,
      description: formData.description.value,
    }
    _jobService.addJob(newJob)
    formData.reset()
    $('#job-form').modal('toggle');
    _drawJob()

  }



}


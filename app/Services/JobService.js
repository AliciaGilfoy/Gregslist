import Job from "../Models/Jobs.js"
import _store from "../store.js"


class JobService {

  addJob(newJob) {
    newJob = new Job(newJob)
    _store.State.jobs.push(newJob)
  }
  constructor() {
    console.log("job service is working")
  }
}

const JOBSERVICE = new JobService()
export default JOBSERVICE
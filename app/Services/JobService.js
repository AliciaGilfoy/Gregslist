import Job from "../Models/Jobs.js"
import _store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 3000
})
class JobService {
  delete(id) {
    _api.delete(id)
      .then(res => {
        let filteredJobs = _store.State.jobs.filter(j => j._id != id)
        _store.commit("jobs", filteredJobs)
      }).catch(error => {
        console.error(error)
      })
  }

  getAllJobs() {
    _api.get("")
      .then(res => {
        let _apiJobs = res.data.data.map(j => new Job(j))
        _store.commit("jobs", _apiJobs)
      }).catch(error => {
        console.error(error)
      })
  }

  addJob(newJob) {
    _api.post("", newJob)
      .then(res => {
        let newApiJob = new Job(res.data.data)
        let jobs = [..._store.State.jobs, newApiJob]
        _store.commit("jobs", jobs)
      }).catch(error => {
        console.error(error);
      });

  }
  editJob(id, update) {
    _api.put(id, update)
      .then(res => {
        let job = _store.State.jobs.find(j => j._id == id)
        for (let prop in update) {
          job[prop] = update[prop]
        }
        _store.commit("jobs", _store.State.jobs)
      }).catch(error => {
        console.error(error);
      });
  }
}


const JOBSERVICE = new JobService()
export default JOBSERVICE
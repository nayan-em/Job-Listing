import Job from './Job'
import {jobs} from '../assets/json/jobs.json'

const JobListing = () => {
  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Job key={job.id} job={job}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobListing

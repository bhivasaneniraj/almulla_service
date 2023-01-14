import React from "react"
import Header from "../HeadingComponents/Header"
import "./PendingJobs.css"

function ForemanJobsButton() {
  return (
    <>
      <div className="Main-Jobs">
        <Header name={"Shabbir"} />
        <div className="Jobs">
          <h1 className="Foreman-view">
            <strong> Foreman View</strong>
          </h1>
          <div className="Assigned-jobs">
            <button type="button" className="btn btn-secondary Assign-job" onClick={() => (window.location.href = "/ForemanAssignedJob")}>
              <img src="./logo/AssignedJob.png" alt="CompletedJobs" />
              <strong>Assigned</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="Completed-jobs">
            <button type="button" className="btn btn-secondary Complete-job" onClick={() => (window.location.href = "/ForemanCompletedJob")}>
              <img src="./logo/CompletedJobs.png" alt="CompletedJobs" />
              <strong>Completed</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="In-progress-jobs">
            <button type="button" className="btn btn-secondary Progress-job" onClick={() => (window.location.href = "/ForemanProgressJob")}>
              <img src="./logo/Inprogressjob.png" alt="CompletedJobs" />
              <strong>In Progress </strong> <p className="job-card">Job Card</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForemanJobsButton

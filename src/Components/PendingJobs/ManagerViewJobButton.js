import React from "react"
import "./PendingJobs.css"
import Header from "../HeadingComponents/Header"

function ManagerViewJobButton() {
  return (
    <>
      <div className="Main-Jobs">
        <Header name={"Salman - Manager"} />
        <div className="Jobs">
          <h1 className="Manger-view">
            <strong> Manager View</strong>
          </h1>
          <div className="Completed-jobs">
            <button type="button" className="btn btn-secondary Complete-job" onClick={() => (window.location.href = "/ManagerCompletedJob")}>
              <img src="./logo/CompletedJobs.png" alt="CompletedJobs" />
              <strong>Completed</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="In-progress-jobs">
            <button type="button" className="btn btn-secondary Progress-job" onClick={() => (window.location.href = "/ManagerProgressJob")}>
              <img src="./logo/Inprogressjob.png" alt="CompletedJobs" />
              <strong>In Progress </strong> <p className="job-card">Job Card</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagerViewJobButton

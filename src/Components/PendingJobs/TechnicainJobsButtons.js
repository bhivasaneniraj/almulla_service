import React from "react"
import Header from "../HeadingComponents/Header"
import "./PendingJobs.css"

function TechnicainJobsButtons() {
  return (
    <>
      <div className="Main-Jobs">
        <Header name={"Shakeel Siddiqi"} />
        <div className="Jobs">
          <h1 className="Technician-view">
            <strong> Technician View</strong>
          </h1>
          <div className="Assigned-jobs">
            <button type="button" className="btn btn-secondary Assign-job" onClick={() => (window.location.href = "/TechnicianAssignedJob")}>
              <img src="./logo/AssignedJob.png" alt="CompletedJobs" />
              <strong>Assigned</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="In-progress-jobs">
            <button type="button" className="btn btn-secondary Progress-job" onClick={() => (window.location.href = "/TechnicianProgressJob")}>
              <img src="./logo/Inprogressjob.png" alt="CompletedJobs" />
              <strong>In Progress </strong> <p className="job-card">Job Card</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnicainJobsButtons

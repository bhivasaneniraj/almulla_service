import React from "react"
import { useNavigate } from "react-router-dom"
import "./PendingJobs.css"
import Header from "../HeadingComponents/Header"

function SupervisorButton() {
  return (
    <>
      <div className="Main-Jobs">
        <Header name={"Anisur Rahman - Supervisor"} />
        <div className="Jobs">
          <h1 className="Supervisor-view">
            <strong> Supervisor View</strong>
          </h1>
          <div className="Job-card-btn">
            <button type="button" className="btn btn-secondary Create-job" onClick={() => (window.location.href = "/VehicleRegister")}>
              <img src="./logo/group2@3x.png" alt="CompletedJobs" />
              <strong>Create</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="Assigned-jobs">
            <button type="button" className="btn btn-secondary Assign-job" onClick={() => (window.location.href = "/SupervisorAssignedJob")}>
              <img src="./logo/AssignedJob.png" alt="CompletedJobs" />
              <strong>Assigned</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="Completed-jobs">
            <button type="button" className="btn btn-secondary Complete-job" onClick={() => (window.location.href = "/SupervisorCompletedJob")}>
              <img src="./logo/CompletedJobs.png" alt="CompletedJobs" />
              <strong>Completed</strong> <p className="job-card">Job Card</p>
            </button>
          </div>
          <div className="In-progress-jobs">
            <button type="button" className="btn btn-secondary Progress-job" onClick={() => (window.location.href = "/SupervisorProgressJob")}>
              <img src="./logo/Inprogressjob.png" alt="CompletedJobs" />
              <strong>In Progress </strong> <p className="job-card">Job Card</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupervisorButton

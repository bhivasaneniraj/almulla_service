import React from "react"
import Header from "../HeadingComponents/Header"
import moment from "moment"
import "./Manager.css"

function ManagerProgressJob() {
  const data = [
    {
      id: 0,
      JobCard: "17/30866",
      time: moment().format("LT"),
      Date: "07.12.2022",
      Technician: "Jameel",
      Status: "Work in Progress",
    },
    {
      id: 1,
      JobCard: "17/30877",
      time: moment().format("LT"),
      Date: "07.12.2022",
      Technician: "Hafizullah",
      Status: "Work in Progress",
    },
    {
      id: 2,
      JobCard: "17/09384",
      time: moment().format("LT"),
      Date: "17.09.2022",
      Technician: "Faisal",
      Status: "Work in Progress",
    },
  ]
  return (
    <>
      <div className="Main-Class">
        <Header name={"Salman - Manager"} />
        <div className="Manager-Job">
          <h3>
            <b> Completed Jobs</b>
          </h3>
        </div>
        <div className="Manager-table">
          <table className="table-view">
            <thead>
              <tr>
                <th>Job Cards</th>
                <th>Progress Jobs Date & Time</th>
                <th>Technician</th>
                <th>Status</th>
              </tr>
            </thead>
            {data.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr key={index}>
                      <td>{val.JobCard}</td>
                      <td>
                        {val.Date} <td className="Table-time-stamp">{val.time}</td>
                      </td>
                      <td>{val.Technician}</td>
                      <td>
                        {val.Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="progress-table" />
                      </td>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default ManagerProgressJob

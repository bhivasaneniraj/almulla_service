import React from "react"
import "./Foremanv.css"
import { useNavigate } from "react-router-dom"
import Header from "../HeadingComponents/Header"
import moment from "moment/moment"

const ForemanData = [
  {
    id: 1,
    JobCard: "17/30866",
    time: "-",
    Date: "07.12.2022",
    Technician: "-",
    Status: "Work in Progress",
  },
  {
    id: 2,
    JobCard: "17/730847",
    time: moment().format("LT"),
    Date: "16.09.2022",
    Technician: "Faisal  ",
    Status: "Work in Progress",
  },
  {
    id: 3,
    JobCard: "17/83221",
    time: "1:00 PM",
    Date: "16.09.2022",
    Technician: "Hafizullah",
    Status: "Work in Progress",
  },
  {
    id: 4,
    JobCard: "17/09384",
    time: "2:05 PM",
    Date: "17.09.2022",
    Technician: "Jameel",
    Status: "Work in Progress ",
  },
]

var name = "Shabbir"

function FormanProgress() {
  const navigate = useNavigate()

  return (
    <>
      <div className="Foreman_Main">
        <Header name={"Shabbir - Foreman"} />
        <div className="Table_foreman">
          <h3 Foreman_heading>
            <b>In Progress Jobs</b>{" "}
          </h3>
        </div>
        <div className="app_foreman">
          <table className="Foreman-progress-table">
            <thead>
              <tr className="Fore_Man_Data">
                <th className="Assiged_for">Job Cards</th>
                <th className="Progress-jobs">Work in Progress Jobs Date & Time</th>
                <th>Technician</th>
                <th>Status</th>
              </tr>
            </thead>
            {ForemanData.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr key={index} className="Fore_Man_Data">
                      <td>{val.JobCard}</td>
                      <td>
                        {val.Date} <td className="Stamp-time">{val.time}</td>
                      </td>
                      <td>{val.Technician}</td>
                      <td>
                        {val.Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="Assi_gned" onClick={() => navigate("/Foremanpage")} />
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

export default FormanProgress

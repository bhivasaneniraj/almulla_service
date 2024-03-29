import React from "react"
import "./Foremanv.css"
import { useNavigate } from "react-router-dom"
import Header from "../HeadingComponents/Header"
import moment from "moment/moment"

const ForemanData = [
  {
    id: 1,
    JobCard: "17/30866",
    time: moment().format("LT"),
    Date: "07.12.2022",
    Technician: "Rehan",
    Status: "Assigned",
  },
  {
    id: 2,
    JobCard: "17/730847",
    time: "10:50 AM",
    Date: "16.09.2022",
    Technician: "Faisal  ",
    Status: "Assigned",
  },
  {
    id: 3,
    JobCard: "17/83221",
    time: "1:00 PM",
    Date: "16.09.2022",
    Technician: "Hafizullah",
    Status: "Assigned",
  },
  {
    id: 4,
    JobCard: "17/09384",
    time: "2:05 PM",
    Date: "17.09.2022",
    Technician: "Jameel",
    Status: "Assigned",
  },
]

function ForemanAssigned() {
  const navigate = useNavigate()

  return (
    <>
      <div className="Foreman_Main">
        <Header name={"Shabbir - Foreman"} />
        <div className="Table_foreman">
          <h3 Foreman_heading>
            <b>Foreman Assigned Jobs</b>{" "}
          </h3>
        </div>
        <div className="app_foreman">
          <table className="table_for">
            <thead>
              <tr className="Fore_Man_Data">
                <th className="Assiged_for">Job Cards</th>
                <th className="Assigned_jobs_foreman">Assigned Jobs Date & Time</th>
                <th>Technician</th>
                <th>Status</th>
              </tr>
            </thead>
            {ForemanData.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr className="Fore_Man_Data">
                      <td>{val.JobCard}</td>

                      <td>
                        {val.Date} <td className="Stamp-time">{val.time}</td>
                      </td>
                      <td>{val.Technician}</td>
                      <td>
                        {val.Status} <img src="./logo/assigned@3x.png" alt="logo" className="Assi_gned" onClick={() => navigate("/Foremanpage")} />
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

export default ForemanAssigned

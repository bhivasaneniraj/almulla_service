import React from "react"
import { useNavigate } from "react-router-dom"
import "./Technician.css"
import Header from "../HeadingComponents/Header"
import moment from "moment/moment"

function TechnicianWorkInProgress() {
  const navigate = useNavigate()

  const Submit = () => {
    navigate("/technicianpage")
  }

  const TechnicianData = [
    {
      id: 1,
      JobCard: "17/30866",
      time: moment().format("LT"),
      Date: "07.12.2022",
      Status: "Work in Progress",
    },
    {
      id: 2,
      JobCard: "17/730847",
      time: "4:30 PM",
      Date: "16.09.2022",
      Status: "Work in Progress",
    },
    {
      id: 3,
      JobCard: "17/83221",
      time: "1:00 PM",
      Date: "16.09.2022",
      Status: "Work in Progress",
    },
    {
      id: 4,
      JobCard: "17/09384",
      time: "2:05 PM",
      Date: "17.09.2022",
      Status: "Work in Progress ",
    },
  ]

  var named = "Shakeel Siddhiqui"

  return (
    <>
      <div className="Main_class">
        <Header name={"Shakeel Siddhiqui - Technician"} />
        <div className="foremantable_class">
          <h3>
            <b>In Progress Jobs</b>{" "}
          </h3>
        </div>

        <div className="App_class">
          <table className="Main_table">
            <thead>
              <tr className="Table_Column">
                <th className="new_jordcard">Job Cards</th>
                <th>Work in Progress Jobs Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            {TechnicianData.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr key={index} className="Table-column">
                      <td>{val.JobCard}</td>
                      <td>
                        {val.Date}
                        <td className="time_stamp">{val.time}</td>
                      </td>
                      <td>
                        {val.Status} <img src="./logo/workinprogress@3x.png" alt="logo" />
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

export default TechnicianWorkInProgress

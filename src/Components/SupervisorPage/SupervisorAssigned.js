import React from "react"
import { useNavigate } from "react-router-dom"
import "./Supervisor.css"
import Header from "../HeadingComponents/Header"
import moment from "moment/moment"

function ManagerView() {
  const navigate = useNavigate()

  const Submit = () => {
    navigate("/SupervisorPage")
  }

  const supervisorData = [
    {
      id: 1,
      JobCard: "17/30866",
      time: moment().format("LT"),
      Date: "07.12.2022",
      date: "07.12.2022",
      Assigned: moment().format("LT"),
      Status: "Assigned",
    },
    {
      id: 2,
      JobCard: "17/730847",
      time: "4:30 PM",
      Date: "16.09.2022",
      date: "16.09.2022",
      Assigned: "3:20 PM",
      Status: "Assigned",
    },
    {
      id: 3,
      JobCard: "17/83221",
      time: "1:00 PM",
      Date: "16.09.2022",
      date: "16.09.2022",
      Assigned: "4:50 PM",
      Status: "Assigned",
    },
    {
      id: 4,
      JobCard: "17/09384",
      time: "2:05 PM",
      Date: "17.09.2022",
      date: "17.09.2022",
      Assigned: "11:10 PM",
      Status: "Assigned ",
    },
  ]

  var named = "Anisur Rahman"
  return (
    <>
      <div className="Main_class">
        <Header name={"Anisur Rahman - Supervisor"} />
        <div className="foremantable_class">
          <h3>
            <b>Assigned Pending Jobs</b>{" "}
          </h3>
        </div>

        <div className="Supervisor-Assgned">
          <table className="Supervisor-Assigned-jobs-table">
            <thead>
              <tr className="col_tabclass">
                <th className="new_jordcard">Job Cards</th>
                <th> Job Card Created Time Stamp</th>
                <th>Assigned To Supervisor Time Stamp</th>
                <th>Status</th>
              </tr>
            </thead>
            {supervisorData.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr key={index} className="col_tabclass">
                      <td>{val.JobCard}</td>
                      <td>
                        {val.Date} <td className="time-stamp">{val.time}</td>
                      </td>
                      <td>
                        {val.date}
                        <td className="date-time-stamp"> {val.Assigned} </td>
                      </td>
                      <td>
                        {val.Status} <img className="logo" src="./logo/assigned@3x.png" alt="logo" onClick={Submit} />
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

export default ManagerView

import React from "react"
import { useNavigate } from "react-router-dom"
import "./Technician.css"
import Header from "../HeadingComponents/Header"

function TechnicianView() {
  const navigate = useNavigate()

  const Submit = () => {
    navigate("/technicianpage")
  }

  const TechnicianData = [
    {
      id: 1,
      JobCard: "17/30866",
      Date: "07.12.2022",
      Status: "Work in Progress",
    },
    {
      id: 2,
      JobCard: "17/730847",
      Date: "16.09.2022",
      Status: "Work in Progress",
    },
    {
      id: 3,
      JobCard: "17/83221",
      Date: "16.09.2022",
      Status: "Work in Progress",
    },
    {
      id: 4,
      JobCard: "17/09384",
      Date: "17.09.2022",
      Status: "Work in Progress ",
    },
  ]

  var named = "Shakeel Siddhiqui"

  return (
    <>
      <div className="Main_class">
        <Header name={"Shakeel Siddhiqui"} />
        <div className="foremantable_class">
          <h3>
            <b>In Progress Jobs</b>{" "}
          </h3>
        </div>

        <div className="App_class">
          <table className="tab_class">
            <tr className="col_tabclass">
              <th className="new_jordcard">Job Cards</th>
              <th>Date</th>

              <th>Status</th>
            </tr>
            <tr className="col_tabclass">
              <td>{TechnicianData[0].JobCard}</td>
              <td>{TechnicianData[0].Date}</td>
              <td>
                {TechnicianData[0].Status} <img src="./logo/assigned@3x.png" alt="logo" onClick={Submit} />
              </td>
            </tr>

            <tr className="col_tabclass">
              <td>{TechnicianData[1].JobCard}</td>
              <td>{TechnicianData[1].Date}</td>
              <td>
                {TechnicianData[1].Status} <img src="./logo/nounTick3923816@3x.png" alt="logo" />
              </td>
            </tr>

            <tr className="col_tabclass">
              <td>{TechnicianData[2].JobCard}</td>
              <td>{TechnicianData[2].Date}</td>
              <td>
                {TechnicianData[2].Status} <img src="./logo/nounTick3923816@3x.png" alt="logo" />
              </td>
            </tr>

            <tr className="col_tabclass">
              <td>{TechnicianData[3].JobCard}</td>
              <td>{TechnicianData[3].Date}</td>
              <td>
                {TechnicianData[3].Status} <img src="./logo/workinprogress@3x.png" alt="logo" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default TechnicianView

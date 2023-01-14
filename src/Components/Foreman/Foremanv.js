import React from "react"
import "./Foremanv.css"
import { useNavigate } from "react-router-dom"
import Header from "../HeadingComponents/Header"

const ForemanData = [
  {
    id: 1,
    JobCard: "17/30866",
    Date: "07.12.2022",
    Technician: "-",
    Status: "Work in Progress",
  },
  {
    id: 2,
    JobCard: "17/730847",
    Date: "16.09.2022",
    Technician: "Faisal  ",
    Status: "Work in Progress",
  },
  {
    id: 3,
    JobCard: "17/83221",
    Date: "16.09.2022",
    Technician: "Hafizullah",
    Status: "Work in Progress",
  },
  {
    id: 4,
    JobCard: "17/09384",
    Date: "17.09.2022",
    Technician: "Jameel",
    Status: "Work in Progress ",
  },
]

var name = "Shabbir"

function Formanv() {
  const navigate = useNavigate()

  return (
    <>
      <div className="Foreman_Main">
        <Header name={"Shabbir"} />
        <div className="Table_foreman">
          <h3 Foreman_heading>
            <b>In Progress Jobs</b>{" "}
          </h3>
        </div>
        <div className="app_foreman">
          <table className="table_for">
            <tr className="Fore_Man_Data">
              <th className="Assiged_for">Job Cards</th>
              <th>Date</th>
              <th>Technician</th>
              <th>Status</th>
            </tr>

            <tr className="Fore_Man_Data">
              <td>{ForemanData[0].JobCard}</td>
              <td>{ForemanData[0].Date}</td>
              <td>{ForemanData[0].Technician}</td>
              <td>
                {ForemanData[0].Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="Assi_gned" onClick={() => navigate("/Foremanpage")} />
              </td>
            </tr>

            <tr className="Fore_Man_Data">
              <td>{ForemanData[1].JobCard}</td>
              <td>{ForemanData[1].Date}</td>
              <td>{ForemanData[1].Technician}</td>
              <td>
                {ForemanData[1].Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="Assi_gned" />
              </td>
            </tr>

            <tr className="Fore_Man_Data">
              <td>{ForemanData[2].JobCard}</td>
              <td>{ForemanData[2].Date}</td>
              <td>{ForemanData[2].Technician}</td>
              <td>
                {ForemanData[2].Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="Assi_gned" />
              </td>
            </tr>

            <tr className="Fore_Man_Data">
              <td>{ForemanData[3].JobCard}</td>
              <td>{ForemanData[3].Date}</td>
              <td>{ForemanData[3].Technician}</td>
              <td>
                {ForemanData[3].Status} <img src="./logo/workinprogress@3x.png" alt="logo" className="Assi_gned" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Formanv

import React from "react"
import { useNavigate } from "react-router-dom"
import "./Technician.css"
import Header from "../HeadingComponents/Header"

function TechnicianView() {
  const navigate = useNavigate()

  const Submit = () => {
    navigate("/technicianpage")
  }

  const TechnicianData = []

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
            <thead>
              <tr className="col_tabclass">
                <th className="new_jordcard">Job Cards</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            {TechnicianData.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr key={index} className="col_tabclass">
                      <td>{val.JobCard}</td>
                      <td>{val.Date}</td>
                      <td>
                        {val.Status} <img src="./logo/assigned@3x.png" alt="logo" onClick={Submit} />
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

export default TechnicianView

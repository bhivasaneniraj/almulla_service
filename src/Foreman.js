import React from 'react'
import './foreman.css';

function Foreman() {

  const data = [
    { jobcard: "17/30866", Date: "16.09.2022", Technician: "-",Status: "Assigned" },
    { jobcard: "17/70875", Date: "16.09.2022", Technician: "Faisal" ,Status:"Work in Progress"},
    { jobcard: "17/92309", Date: "16.09.2022", Technician: "Hafizullah",Status:"Work in Progress"},
    { jobcard: "17/74123", Date: "17.09.2022", Technician: "Jameel",Status:"Work in Progress"},
  ]

  return (
    <>
        <div className="Main">
            <div className="foreman">
            <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Al_Mulla_Group_Logo.svg/1200px-Al_Mulla_Group_Logo.svg.png"
            alt="logo"
          />
          <div className="v2"></div>
          <h3>
            {" "}
            Welcome to Al Mulla Industries Service Mobile Solutions
           
          </h3>
            </div>
            <div className="header">
            <span>Shabbir </span>

            <div className="Logout">
            <i class="fa-solid fa-arrow-right-from-bracket"><h1 className="head1">Logout</h1></i>
            </div>
            </div>
            <div className="foremantable">
                <h3>Foremen View</h3>
            </div>

            <div className="App">
      <table className='tab'>
        <tr className='col_tab'>
          <th>Job Cards</th>
          <th>Date</th>
          <th>Technician</th>
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.jobcard}</td>
              <td>{val.Date}</td>
              <td>{val.Technician}</td>
              <td>{val.Status}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
        </div>
    </>
  )
}

export default Foreman
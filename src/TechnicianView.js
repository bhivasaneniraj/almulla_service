import React from 'react';
import './Technician.css';


function TechnicianView() {

    const data = [
        { jobcard: "17/30866", Date: "16.09.2022", Status: "Assigned" },
        { jobcard: "17/70875", Date: "16.09.2022",Status:"Work in Progress"},
        { jobcard: "17/92309", Date: "16.09.2022",Status:"Work in Progress"},
        { jobcard: "17/74123", Date: "17.09.2022", Status:"Work in Progress"},
      ]
    
      var named= "Shakeel Siddhiqui";




  return (
    <>
      <div className="Main_class">
            <div className="foreman_class">
            <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Al_Mulla_Group_Logo.svg/1200px-Al_Mulla_Group_Logo.svg.png"
            alt="logo"
          />
          <div className="v2"></div>
          <h3>
            {" "}
           <b>Welcome to Al Mulla Industries Service Mobile Solutions</b> 
           
          </h3>
            </div>
            <div className="header_class">
            <span>{named} </span>

            <div className="Logout_class">
            <i class="fa-solid fa-arrow-right-from-bracket" type="button"><h1 className="head2"><b>Logout</b> </h1></i>
            </div>
            </div>
            <div className="foremantable_class">
                <h3><b>Assigned Pending Jobs</b> </h3>
            </div>

            <div className="App_class">
      <table className='tab_class'>
        <tr className='col_tabclass'>
          <th className="new_jordcard">Job Cards</th>
          <th>Date</th>
          
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} className="tabData">
              <td>{val.jobcard}</td>
              <td>{val.Date}</td>
            
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

export default TechnicianView
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Manager.css";

function ManagerView() {


    const navigate = useNavigate();

  const Submit = () => {
   
      navigate('/Managerpage')
   
  }

    const TechnicianData = [
      {
        id: 1,
      JobCard:"17/30866",
      Date:"16.09.2022",
      Status:"Assigned"
      },
      {
        id: 2,
        JobCard:"17/730847",
        Date:"16.09.2022",
        Status:"Completed"
      },
      {
        id: 3,
        JobCard:"17/83221",
        Date:"16.09.2022",
        Status:"Completed"
      },
      {
        id: 4,
        JobCard:"17/09384",
        Date:"17.09.2022",
        Status:"Work in Progress "
      },
    ];
    
      var named= "Anisur Rahman";
  return (
    <>
       <div className="Main_class">
            <div className="foreman_class">
            <img
            src="/images/bitmap@2x.png"
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
            <i className="Logout_logo">
            <img src="./images/shape@2x.png" alt="logo" />
         </i>
         <h1 className="head2"><b>Logout</b> </h1>
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
       <tr className='col_tabclass'>
        <td>{TechnicianData[0].JobCard}</td>
        <td>{TechnicianData[0].Date}</td>
        <td>{TechnicianData[0].Status} <img src="./logo/assigned@3x.png" alt="logo" onClick={Submit} /></td>
     
       </tr>
    
    <tr className='col_tabclass'>
    <td>{TechnicianData[1].JobCard}</td>
    <td>{TechnicianData[1].Date}</td>
    <td>{TechnicianData[1].Status} <img src="./logo/nounTick3923816@3x.png" alt="logo" /></td>
    </tr>

    <tr className='col_tabclass'>
    <td>{TechnicianData[2].JobCard}</td>
    <td>{TechnicianData[2].Date}</td>
    <td>{TechnicianData[2].Status} <img src="./logo/nounTick3923816@3x.png" alt="logo" /></td>

    </tr>

    <tr className='col_tabclass'>
    <td>{TechnicianData[3].JobCard}</td>
    <td>{TechnicianData[3].Date}</td>
    <td>{TechnicianData[3].Status} <img src="./logo/workinprogress@3x.png" alt="logo" /></td>
    </tr>
      </table>
    </div>
    
        </div>
    </>
  )
}

export default ManagerView
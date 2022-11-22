import React from 'react';
import './Foremanv.css'
import { useNavigate } from 'react-router-dom';



const ForemanData = [
  {
    id: 1,
  JobCard:"17/30866",
  Date:"16.09.2022",
  Technician:"-",
  Status:"Assigned"
  },
  {
    id: 2,
    JobCard:"17/730847",
    Date:"16.09.2022",
    Technician:"Faisal  ",
    Status:"Work in Progress"
  },
  {
    id: 3,
    JobCard:"17/83221",
    Date:"16.09.2022",
    Technician:"Hafizullah",
    Status:"Work in Progress"
  },
  {
    id: 4,
    JobCard:"17/09384",
    Date:"17.09.2022",
    Technician:"Jameel",
    Status:"Work in Progress "
  },
];

var name= "Shabbir";


function Formanv() {
    const navigate = useNavigate();



  return (
    <>
    <div className="Foreman_Main">
        <div className="Foreman_cl">
        <img
            src="/images/bitmap@2x.png"
            alt="logo"
            className="bitmap_png"
          />
           <div className="V0"></div>
           <h3>
            {" "}
           <b>Welcome to Al Mulla Industries Service Mobile Solutions</b> 
           
          </h3>
          <div className="headerss">
          <span>{name} </span>
          <div className="logoutss">
          <i className="logout_png" type="button">
          <img src="./images/shape@2x.png" alt="logo" />
          </i>
          <h1 className="Head"><b>Logout</b> </h1>
          </div>
          </div>
          <div className="Table_foreman">
          <h3><b>Foremen View</b> </h3>
          </div>
          <div className="app_foreman">
          <table className='table_for'>
        <tr className='Fore_Man_Data'>
          <th className="Assiged_for">Job Cards</th>
          <th>Date</th>
          <th>Technician</th>
          <th>Status</th>
        </tr>
 
      <tr className='Fore_Man_Data'>
        <td>{ForemanData[0].JobCard}</td>
        <td>{ForemanData[0].Date}</td>
        <td>{ForemanData[0].Technician}</td>
        <td>{ForemanData[0].Status} <img src="./logo/assigned@3x.png" alt="logo" className='Assi_gned' onClick={()=> navigate("/Foremanpage")}/></td>
     
      </tr>

      <tr className='Fore_Man_Data'>
        <td>{ForemanData[1].JobCard}</td>
        <td>{ForemanData[1].Date}</td>
        <td>{ForemanData[1].Technician}</td>
        <td>{ForemanData[1].Status} <img src="./logo/workinprogress@3x.png" alt="logo"  /></td>
     
      </tr>

      
      <tr className='Fore_Man_Data'>
        <td>{ForemanData[2].JobCard}</td>
        <td>{ForemanData[2].Date}</td>
        <td>{ForemanData[2].Technician}</td>
        <td>{ForemanData[2].Status} <img src="./logo/workinprogress@3x.png" alt="logo"  /></td>
     
      </tr>

      
      <tr className='Fore_Man_Data'>
        <td>{ForemanData[3].JobCard}</td>
        <td>{ForemanData[3].Date}</td>
        <td>{ForemanData[3].Technician}</td>
        <td>{ForemanData[3].Status} <img src="./logo/workinprogress@3x.png" alt="logo"  /></td>
     
      </tr>
      </table>
          </div>
        </div>
    </div>
    </>
  );
}

export default Formanv;
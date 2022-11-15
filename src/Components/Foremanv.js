import React from 'react';
import './Foremanv.css'
import { useNavigate } from 'react-router-dom';


const Data = [
    { jobcard: "17/30866", Date: "16.09.2022",Technician:"-", Status: "Assigned" },
    { jobcard: "17/70875", Date: "16.09.2022",Technician:"Faisal",Status:"Work in Progress"},
    { jobcard: "17/92309", Date: "16.09.2022",Technician:"Faisal",Status:"Work in Progress"},
    { jobcard: "17/74123", Date: "17.09.2022",Technician:"Faisal", Status:"Work in Progress"},
]

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
          />
           <div className="V0"></div>
           <h3>
            {" "}
           <b>Welcome to Al Mulla Industries Service Mobile Solutions</b> 
           
          </h3>
          <div className="headerss">
          <span>{name} </span>
          <div className="logoutss">
          <i class="fa-solid fa-arrow-right-from-bracket" type="button"><h1 className="Head"><b>Logout</b> </h1></i>
          </div>
          </div>
          <div className="Table_foreman">
          <h3><b>Foremen View</b> </h3>
          </div>
          <div className="app_foreman">
          <table className='table_for'>
        <tr className='column_for'>
          <th className="Assiged_for">Job Cards</th>
          <th>Date</th>
          <th>Technician</th>
          <th>Status</th>
        </tr>
        {Data.map((val, key) => {
          return (
            <tr key={key} className="taBData">
              <td>{val.jobcard}</td>
              <td>{val.Date}</td>
            <td>{val.Technician}</td>
          {val.Status === "Assigned" ? (<td>{val.Status} <button className="buttoni" onClick={() => navigate("/Foremanpage")}></button></td> ) : (<td>{val.Status} <button className="checkmark" onClick={() => navigate("/Foremanpage")}></button></td>)
              }
            </tr>
          )
        })}
      </table>
          </div>
        </div>
    </div>
    </>
  );
}

export default Formanv;
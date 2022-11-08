import React from "react";

import './foreman.css';

function Foremanview() {

    const tabdata = [
        { UnitDetail: "Cooling Unit", KTNo: "17/30866", SerialNo: "VKA94286893",Chassis: " NK004102-F",Model:"CITIMAX-400",Date:"16.10.2022",WarrantyStart:" 13.06.2022",WarrantyEnd:" 16.06.2023"},
        { UnitDetail: "Tail Lift", KTNo: "17/30866", SerialNo: "21084589" ,Chassis:"9031793-N",Model:"ALU,24V,1500KG",Date:" 16.09.2022",WarrantyStart:" 27.06.2021",WarrantyEnd:" 26.06.2022"},
        
      ]
  var Referenceno = "300021572";
  var location = "Shuwaikh Van 1";
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES";
  return (
    <>
      <div className="main">
        <div className="foreman">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Al_Mulla_Group_Logo.svg/1200px-Al_Mulla_Group_Logo.svg.png"
            alt="logo"
          />
          <div className="v2"></div>
          <h3> Welcome to Al Mulla Industries Service Mobile Solutions</h3>
        </div>
        <div className="header">
          <span>Shabbir </span>

          <div className="Logout">
            <i class="fa-solid fa-arrow-right-from-bracket">
              <h1 className="head1">Logout</h1>
            </i>
          </div>
        </div>
        <div className="CardReference">
          <h3>Job Card Reference Number - {Referenceno}</h3>

          <h3 className="loc">Location:  <span>{location}</span>  </h3>

          <h3 className="line"></h3>
        </div>
       
       <b>   <p>Customer {refer} </p>   </b>
       <div className="datatable">
        <table className="tabular">
        <tr className="column">
        <th>Unit Details</th>
        <th>KT No.</th>
        <th>Serial No.</th>
        <th>Chassis</th>
        <th>Model</th>
        <th>Date</th>
        <th>Warranty <br />Start</th>
        <th>Warranty <br />End</th>
     </tr>


     {tabdata.map((val,key) => {
        return (
            <tr key={key}>
              <td>{val.UnitDetail}</td>
              <td>{val.KTNo}</td>
              <td>{val.SerialNo}</td>
              <td>{val.Chassis}</td>
              <td>{val.Model}</td>
              <td>{val.Date}</td>
              <td className="start ">{val.WarrantyStart}</td>
              <td className="End">{val.WarrantyEnd}</td>

            </tr>
        )
     })}
            
        </table>
       </div>
       <div className="chckbox">
       <h2>
                  <b>Physical Remarks / Observation</b>{" "}
                </h2>
       </div>
        
      </div>
    </>
  );
}

export default Foremanview;

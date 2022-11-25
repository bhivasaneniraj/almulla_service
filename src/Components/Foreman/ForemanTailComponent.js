import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

function ForemTailComponent({ complaint, failure, coolComponent, datas }) {
  const options = [
    {
      label: "Send Report to Foremen",
      value: "Send Report to Foremen",
    },
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];

  return (
    <div
      className="tw0_page_complaint"
      style={{ height: "50%", padding: "80px 0px 110px 0px" }}
    >
      <div className="headi_ng" style={{marginTop:"-12%"}}>
       
            <div className="d-flex flex-row justify-content-between mt-5 p-4 fs-5">
              <b style={{color:"rgb(0,0,0)", fontSize:"18pt",marginTop:"45px",dispalay:"flex",paddingLeft:"6px"}}>Breakdown Analysis For Tail Lift</b>{" "}
              
              <div className="down_values">
            <p> <b>Assigned to Technician - </b>  </p>
              <select className="Drop_select"
                style={{
                

                  marginTop:"1%",

width:"60%",



border: "none",

backgroundcolor:"rgb(226,245,231)",

paddingLeft: "11px",

fontSize: "16pt",

color: "rgb(0,0,0)",

fontFamily: "Roboto-Bold",

}}
              >
               
                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>
             
            </div>
        
      </div>

      <div className="datatable">
        <table className="tabular" style={{marginTop:"-10px"}}>
          <tr>
            <th className="icon">
              Customer complaint <i class="fa-solid fa-plus"></i>{" "}
            </th>
            <th className="icon">
              Failure Reason <i class="fa-solid fa-plus"></i>
            </th>

            <th>
              Probable <br />
              Root Cause
            </th>
            <th>
              Suggested <br />
              Rectifiction
            </th>
          </tr>

          {datas.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.customerComplaint}</td>
                <td>{val.failureReason}</td>
                <td>{val.probableRootCause}</td>
                <td>{val.suggestedRectifiction}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* <div className="complaint_failure">
        <div className="complaint"></div>
        <div className="failure"></div>
      </div>
    </div>

    <div className="page_two_bothcomp_fail_list">
      <div className="comp_list"></div> */}
      {/* <div className="fail_list"></div> */}
    </div>
  );
}

export default ForemTailComponent;
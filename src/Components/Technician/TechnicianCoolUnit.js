import React from 'react'
import { Col, Row } from "react-bootstrap";
import '../../Style.css'
import '../../Technician.css'

function TechnicianCoolingUnit(props) {
  return (
    <div>
      <div>
      <Col>
        <Row>
          <div className="mt-5 text">
            <label style={{ fontWeight: "bold", fontSize:"25px"}}>
            Breakdown Analysis For Cooling Unit
            </label>
          </div>
        </Row>
      </Col>
      <div className="datatable">
        <table className="tabular">
          <tr>
          <th className="icon">
              Customer complaint{" "}
              <i class="fa-solid fa-plus"></i>{" "}
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

          {props.datas.map((val, key) => {
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
    </div>
    </div>
  )
}

export default TechnicianCoolingUnit

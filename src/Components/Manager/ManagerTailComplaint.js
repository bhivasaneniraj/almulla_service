import React from "react"
import { Col, Row } from "react-bootstrap"
import "./ManagerTailComponent.css"

function ManagerTailComplaint(props) {
  return (
    <div>
      <Col>
        <Row>
          <div className="mt-5 text">
            <label className="Tail_lif_break">Breakdown Analysis For Tail Lift</label>
          </div>
        </Row>
      </Col>
      <div className="data_table_tab">
        <table className="data_table_tab">
          <tr>
            <th className="icon">
              Customer complaint <i class="fa-solid fa-plus"></i>{" "}
            </th>
            <th className="icon">
              Failure Reason <i class="fa-solid fa-plus"></i>
            </th>

            <th className="Root_Caus">
              Probable <br />
              Root Cause
            </th>
            <th className="Reflect">
              Suggested <br />
              Rectifiction
            </th>
          </tr>
          <tr>
            <td>Engine oil leak</td>

            <td>Engine oil Drain extension leak</td>

            <td class="width-md">
              <select className="down_valuesss Drop_select">
                <option value="Derive belt expand">Derive belt expand</option>
                <option value="Belt Replacement">Belt Replacement</option>
                <option value="Belt lose">Belt lose</option>
                <option value="No belt">No belt</option>
              </select>
            </td>

            <td class="width-md">
              <select className="down_valuesss Drop_select">
                <option value="Derive belt expand">Derive belt expand</option>
                <option value="Belt Replacement">Belt Replacement</option>
                <option value="Belt lose">Belt lose</option>
                <option value="No belt">No belt</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ManagerTailComplaint

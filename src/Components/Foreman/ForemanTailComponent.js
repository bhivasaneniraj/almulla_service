import React from "react"
import { Button, Col, Container, Row, Form } from "react-bootstrap"

function ForemTailComponent({ complaint, failure, coolComponent, datas }) {
  const options = [
    {
      label: "Salman",
      value: "salman",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ]

  return (
    <div className="tw00_page_complaint">
      <div className="headi_ng">
        <div className="d-flex flex-row justify-content-between mt-5 p-4 fs-5">
          <b className="Break_down_Tail_lift">Breakdown Analysis For Tail Lift</b>{" "}
          <div className="down_values">
            <p>
              {" "}
              <b>Assigned to Technician - </b>{" "}
            </p>
            <select className="Drop_select_btn">
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
        <table className="tabular" style={{ marginTop: "-10px" }}>
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
                <option value="Derive belt expand">Belt Replacement</option>
                <option value="Belt Replacement">Derive belt expand</option>
                <option value="Belt lose">Belt lose</option>
                <option value="No belt">No belt</option>
              </select>
            </td>
          </tr>

          {/* {datas.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.customerComplaint}</td>
                <td>{val.failureReason}</td>
                <td>{val.probableRootCause}</td>
                <td>{val.suggestedRectifiction}</td>
              </tr>
            );
          })} */}
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
  )
}

export default ForemTailComponent

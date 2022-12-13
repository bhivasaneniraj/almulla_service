import React from "react"
import { Button, Col, Container, Row, Form } from "react-bootstrap"
import "../../foreman.css"

function ForemanCoolComplaint({ complaint, failure, coolComponent, datas }) {
  const options = [
    {
      label: "Abdul Razi",
      value: "Abdul Razi",
    },
    {
      label: "Shakeel Siddhiqui",
      value: "Shakeel Siddhiqui",
    },
    {
      label: "Faisal",
      value: " Faisal",
    },
  ]

  return (
    <>
      <div className="tw0_page_complaint">
        <div className="heading">
          <Col>
            <Row>
              <div className="d-flex flex-row justify-content-between">
                <b className="Break_down_analysis">Breakdown Analysis For Cooling Unit</b>{" "}
                <div className="down_value">
                  <p>
                    <b> Assigned to Technician - </b>
                  </p>
                  <select className="Drop_select">
                    {options.map((option) => (
                      <option value={option.value}>
                        <b>{option.label}</b>
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Row>
          </Col>
        </div>

        <div className="datatable">
          <table className="tabular">
            <tr>
              <th className="icon">
                Customer complaint <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
              </th>
              <th className="icon">
                Failure Reason <i class="fa-solid fa-plus" onClick={failure}></i>
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

      <Container>
        <div className="horizontal_line"></div>
      </Container>
    </>
  )
}

export default ForemanCoolComplaint

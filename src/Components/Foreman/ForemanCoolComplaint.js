import React from "react"
import { Button, Col, Container, Row, Form } from "react-bootstrap"
import "./foreman.css"

function ForemanCoolComplaint({ complaint, failureComplaintsList, newFailureComplaintList, setFailureComplaintList, probableRootCause, valueOfRetification, newProbableRoot }) {
  const newArray = failureComplaintsList.concat(newFailureComplaintList)
  const newRootCauseValue = newProbableRoot.concat(probableRootCause)

  const tailArrayList = ["engine failure"]
  // const probableRootCause = ["probableRootCaus","probableRootCaus"];
  const suggestedReplication = ["suggestedReplication", "probableRootCaus"]

  const items = [
    {
      id: 1,
      name: "Shakeel Siddhiqui",
      value: "Shakeel Siddhiqui",
    },
    {
      id: 2,
      name: "Abdul Razi",
      value: "Abdul Razi",
    },
    {
      id: 3,
      name: "Faisal",
      value: "Faisal",
    },
  ]

  return (
    <>
      <div className="Cooling-Complaints">
        <div className="Drop-down-button">
          <Col>
            <Row>
              <div className="d-flex flex-row justify-content-between">
                <b className="Break-down-Cooling-Unit">Breakdown Analysis For Cooling Unit</b>
                <div className="Select-values">
                  <p>
                    <b> Assigned to Technician -</b>
                  </p>
                  <select className="select">
                    {items.map((item) => (
                      <option value={item.value}>
                        <b>{item.name}</b>
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Row>
          </Col>
        </div>
        <div className="Cooling-Table">
          <table>
            <tr>
              <th>Customer complaint</th>
              <th>
                Failure Reason <i className="fa-solid fa-plus" onClick={() => complaint(456)}></i>{" "}
              </th>
              <th>
                {" "}
                probable Root Cause <i className="fa-solid fa-plus"></i>
              </th>
              <th>
                {" "}
                Suggested Retification <i className="fa-solid fa-plus"></i>
              </th>
            </tr>
            <tbody>
              <tr>
                <td>Engine Oil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ForemanCoolComplaint

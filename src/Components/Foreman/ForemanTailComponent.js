import React from "react"
import { Button, Col, Container, Row, Form } from "react-bootstrap"

function ForemTailComponent({ Tailcomplaint, failureComplaintsList, newFailureComplaintList, setFailureComplaintList, probableRootCause, suggestedReplication }) {
  const newArray = failureComplaintsList.concat(newFailureComplaintList)

  // console.log(" probableRootCause   "+ probableRootCause)
  // console.log("suggestedReplication  "+ suggestedReplication)
  // console.log("newFailureComplaintList  "+ newFailureComplaintList)

  const tailArrayList = ["Engine failure"]

  // const valueOfRetification = ["engine failure"]

  //const suggestedReplication = ["suggestedReplication", "probableRootCaus"];

  const options = [
    {
      id: 1,
      label: "Abdul Razi",
      value: "Abdul Razi",
    },
    {
      id: 2,
      label: "Shakeel Siddhiqui",
      value: "Shakeel Siddhiqui",
    },
    {
      id: 3,
      label: "Faisal",
      value: " Faisal",
    },
  ]

  return (
    <>
      <div className="tw0_page_complaint">
        <div className="Drop-Down">
          <Col>
            <Row>
              <div className="d-flex flex-row justify-content-between">
                <b className="Break_down_Tail_lift ">Breakdown Analysis For Tail Complaint</b>{" "}
                <div className="Drop-down-value">
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
        <div className="Tail-lift-table">
          <table>
            <thead>
              <tr>
                <th>Customer complaint {/* <i class="fa-solid fa-plus" onClick={tailComplaint}></i>{" "} */}</th>

                <th>
                  Failure Reason <i className="fa-solid fa-plus" onClick={() => Tailcomplaint(456)}></i>{" "}
                </th>
                <th>
                  probable Root Cause <i className="fa-solid fa-plus" onClick={() => Tailcomplaint(456)}></i>{" "}
                </th>
                <th>
                  Suggested Retification <i className="fa-solid fa-plus" onClick={() => Tailcomplaint(456)}></i>{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {tailArrayList.map((key, val) => (
                <tr className="table_rw" key={val}>
                  <td>
                    {key}{" "}
                    <button
                      style={{
                        position: "absolute",
                        left: "35.5em",
                        border: "none",
                      }}
                    ></button>
                  </td>

                  <table>
                    {newArray.map((key, val) => {
                      return (
                        <tr className="table_rw" key={val}>
                          <td>
                            {key}

                            <button
                              style={{
                                position: "absolute",
                                left: "72.6em",
                                border: "none",
                              }}
                            ></button>
                          </td>

                          <table>
                            {probableRootCause.map((key, val) => {
                              return (
                                <tr className="table_rw" key={val}>
                                  <td>
                                    {key}

                                    <button
                                      style={{
                                        position: "absolute",
                                        left: "72.6em",
                                        border: "none",
                                      }}
                                    ></button>
                                  </td>

                                  <table>
                                    {suggestedReplication.map((key, val) => {
                                      return (
                                        <tr className="table_rw" key={val}>
                                          <td>
                                            {key}

                                            <button
                                              style={{
                                                position: "absolute",
                                                left: "72.6em",
                                                border: "none",
                                              }}
                                            ></button>
                                          </td>
                                        </tr>
                                      )
                                    })}
                                  </table>
                                </tr>
                              )
                            })}
                          </table>
                        </tr>
                      )
                    })}
                  </table>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Cooling Unit</b>{" "}
        </h2>
        <table>
          <thead>
            <tr>
              <th>lksnfks</th>
            </tr>

          </thead>
        </table> */}
      {/* <div className="page_two_complaint_tab" style={{ columnGap: "0.1rem" }}>
          <div className="tables">
            <table className="Table_Customer">
              <thead>
                <tr>
                  <th className="Cust_t1">
                    Customer complaint{" "}
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => complaint(456)}
                      style={{ marginTop: "-2rem" }}
                    ></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engine Oil Leak</td>
                </tr>
              </tbody>
            </table>
          </div> */}

      {/* <div className="tables">
            <tr>
              <table className="Break_Cust">
                <thead>
                  <tr>
                    <th className="Cust_t1">
                      Failure Reason{" "}
                      <i
                        class="fa-solid fa-plus"
                        onClick={() => complaint(456)}
                        style={{
                          marginTop: "-2rem",

                          marginRight: "20rem",
                        }}
                      ></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newArray.map((item) => (
                    <tr>
                      <td>{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </tr>
          </div>
        </div> */}
      {/* </div> */}
    </>
  )
}
export default ForemTailComponent

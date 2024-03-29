import React from "react"
import { Col, Row } from "react-bootstrap"
import "./Technician.css"
import { useState } from "react"

function TechnicianCoolingUnit({ newProbableRoot, complaint, failureComplaintsList, newFailureComplaintList, setFailureComplaintList, probableRootCause, valueOfRetification }) {
  const newArray = failureComplaintsList.concat(newFailureComplaintList)
  const newRootCauseValue = newProbableRoot.concat(probableRootCause)
  const tailArrayList = ["engine failure", "probableRootCause"]

  return (
    <>
      <div className="Cooling-unit">
        <p>
          <b>Breakdown Analysis For Cooling Unit</b>
        </p>
        <table className="table_Div">
          <thead style={{ height: "4.2rem" }}>
            <tr className="tab_Col">
              <th>Customer complaint {/* <i class="fa-solid fa-plus" onClick={tailComplaint}></i>{" "} */}</th>

              <th className="tab_Col">
                Failure Reason <i class="fa-solid fa-plus" onClick={() => complaint(456)} style={{ marginTop: "-2rem" }}></i>{" "}
              </th>
              <th className="tab_Col">
                probable Root Cause <i class="fa-solid fa-plus" onClick={() => complaint(456)} style={{ marginTop: "-2rem" }}></i>{" "}
              </th>
              <th className="tab_Col">
                Suggested Retification <i class="fa-solid fa-plus" onClick={() => complaint(456)} style={{ marginTop: "-2rem" }}></i>{" "}
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
                          {newRootCauseValue.map((key, val) => {
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
                                  {valueOfRetification.map((item) => (
                                    <tr key={item.id}>
                                      {Object.values(item).map((val) => (
                                        <td>{val}</td>
                                      ))}
                                    </tr>
                                  ))}
                                  {/* {valueOfRetification.map((key, val) => {
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
                                  );
                                })} */}
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

export default TechnicianCoolingUnit

import React from "react"
import { Col, Row } from "react-bootstrap"
import "./Technician.css"
import { useState } from "react"

function TechnicianCoolingUnit({ complaint, failureComplaintsList, newFailureComplaintList, setFailureComplaintList, probableRootCause, valueOfRetification }) {
  console.log(" value of probable root cause  " + valueOfRetification)
  const newArray = failureComplaintsList.concat(newFailureComplaintList)
  const tailArrayList = ["Engine failure"]
  // const probableRootCause = ["probableRootCaus","probableRootCaus"];
  const suggestedReplication = ["suggestedReplication", "probableRootCaus"]
  console.log("value of new Array " + newArray)

  console.log("probale root cause" + probableRootCause)

  return (
    <>
      <table className="table_Div">
        <thead className="Cooling-unit">
          <tr className="tab_Col">
            <th>Customer complaint {/* <i class="fa-solid fa-plus" onClick={tailComplaint}></i>{" "} */}</th>

            <th className="tab_Col">
              Failure Reason <i class="fa-solid fa-plus" onClick={() => complaint(456)}></i>{" "}
            </th>
            <th className="tab_Col">
              probable Root Cause <i class="fa-solid fa-plus" onClick={() => complaint(456)}></i>{" "}
            </th>
            <th className="tab_Col">
              Suggested Retification <i class="fa-solid fa-plus" onClick={() => complaint(456)}></i>{" "}
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
                                {valueOfRetification.map((key, val) => {
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

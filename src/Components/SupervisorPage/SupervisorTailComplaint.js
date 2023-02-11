import React from "react"
import { Col, Row } from "react-bootstrap"
import "./SupervisorTailComponent.css"

function ManagerTailComplaint({ newProbableRoot, complaint, failureComplaintsList, newFailureComplaintList, setFailureComplaintList, probableRootCause, valueOfRetification }) {
  const newArray = failureComplaintsList.concat(newFailureComplaintList)
  const newRootCauseValue = newProbableRoot.concat(probableRootCause)
  const tailArrayList = ["engine failure", "probableRootCaus"]
  return (
    <div>
      <Col>
        <Row>
          <div className="mt-5 text">
            <label className="Tail_lif_break">Breakdown Analysis For Tail Lift</label>
          </div>
        </Row>
      </Col>
      <div style={{ width: "49.3rem" }} className="data_table_tab">
        <table className="table_Div">
          <thead style={{ height: "4.2rem" }}>
            <tr className="tab_Col">
              <th className="icon">Customer complaint</th>

              <th className="tab_Col icon">
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
        {/* <table className="data_table_tab">
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
        </table> */}
      </div>
    </div>
  )
}

export default ManagerTailComplaint

import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

function TailComplaint({ tailComplaint, tailFailureComplaints, tailArrayList, deleteRow, deleteFailRow }) {
  return (
    <>
      <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Tail Lift</b>{" "}
        </h2>
        <div className="page_two_complaint_tab" style={{ columnGap: "0.1rem" }}>
          <div className="Tables_Tables">
            <table className="Cust_Table">
              <thead>
                <tr className="Cust_t0">
                  <th className="Cust_t1">
                    Customer complaint <i class="fa-solid fa-plus" onClick={tailComplaint}></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tailArrayList.map((key, val) => (
                  <tr className="Cust_t0" key={val}>
                    <td>
                      {key}{" "}
                      <button style={{ position: "absolute", left: "35.5em", border: "none" }} onClick={(e) => deleteRow(val, e)}>
                        <img src="./images/minusbutton.png" style={{ height: "1.5rem", border: "none" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tables_tables">
            <table className="Cust_Table_tab">
              <tr className="Cust_t1">
                <th className="Cust_t1">
                  Failure Reason <i class="fa-solid fa-plus" onClick={() => tailComplaint}></i>
                </th>
              </tr>
              <tbody>
                {tailFailureComplaints.map((key, val) => {
                  return (
                    <tr className="Cust_t1" key={val}>
                      <td>
                        {key}
                        <button style={{ position: "absolute", left: "72.6em", border: "none" }} onClick={(e) => deleteFailRow(val, e)}>
                          <img src="./images/minusbutton.png" style={{ height: "1.5rem", border: "none" }} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default TailComplaint

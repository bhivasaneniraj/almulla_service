import React from "react";

function CoolComplaints({
  complaint,
  failure,
  failureComplaintsList,
  arrayList
}) {


  return (
    <>
      <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Cooling Unit</b>{" "}
        </h2>
        <div className="page_two_complaint_tab">
          <table className="Cust_Table">
            <tr className="Cust_t0">
              <th className="Cust_t1">
                Customer complaint{" "}
                <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
              </th>
            </tr>
            {arrayList.map(item => <tr className="Cust_t0">
            <td>{item}</td>
             </tr>)}

          </table>

          <table className="Cust_Table_tab">
            <tr className="Cust_t1">
              <th className="Cust_t1">
                Failure Reason{" "}
                <i class="fa-solid fa-plus" onClick={complaint}></i>
              </th>
            </tr>
            {failureComplaintsList.map((item) => {
              return (
                <tr className="Cust_t1">
                  <td>{item} </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default CoolComplaints;

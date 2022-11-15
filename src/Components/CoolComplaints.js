import React from "react";


function CoolComplaints({ complaint, failure, coolComponent }) {
  return (
    <>
      <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Cooling Unit</b>{" "}
        </h2>
        <table className="customer_table">
          <tr className="cust_tab0">
            <th className="cust_tab">
              Customer complaint{" "}
              <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
            </th>

            <th className="cust_tab1">
              Failure Reason <i class="fa-solid fa-plus" onClick={failure}></i>
            </th>
          </tr>
          <tr className="cust_tab2">
            <td>{coolComponent}</td>
            <td> Unit Service</td>
          </tr>
        </table>
        {/* <div className="complaint_failure">
          <div className="complaint"></div>
          <div className="failure"></div>
        </div>
      </div>

      <div className="page_two_bothcomp_fail_list">
        <div className="comp_list"></div> */}
        {/* <div className="fail_list"></div> */}
      </div>
    </>
  );
}

export default CoolComplaints;

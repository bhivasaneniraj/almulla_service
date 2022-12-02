import React from 'react'


function TailComplaint({ complaint,
  failure,
  CustComplaint,
  failureComplaintsList,}) {
  return (
    <>
          {/* <div className="page_two_complaint_failure1">
              <h2><b>Breakdown Analysis For Tail Lift</b> </h2>
              <div className="complaint_failure1">
                <table className="complaint1">
                  <p> Customer complaint </p>
                  <i class="fa-solid fa-plus" onClick={complaint}></i>
                </table>
                <div className="failure1">
                  <p> Failure Reason </p>
                  <i class="fa-solid fa-plus" onClick={failure}></i>
                </div>
              </div>
              <div className="page_two_bothcomp_fail_list1">
                <div className="comp_list1">
                  <p> Engine Oil Leak </p>
                </div>
                <div className="fail_list1">
                  <p> Engine Oil drain extension </p>
                </div>
              </div>
            </div> */}

            <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Tail Lift</b>{" "}
        </h2>
        <div className="page_two_complaint_tab">
          <table className="Cust_Table">
            <tr className="Cust_t0">
              <th className="Cust_t1">
                Customer complaint{" "}
                <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
              </th>
            </tr>
            {CustComplaint.map((item)=> {
               return(
                <tr className="Cust_t0">
              <td>{item}</td>
            </tr>
               )
            })}
          
          
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
  )
}

export default TailComplaint
import React from 'react'


function TailComplaint({complaint,failure}) {
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

            <div className="page_two_complaint_failure1">
              <h2><b>Breakdown Analysis For Tail Lift</b></h2>
              <table className="complaint1">
              <tr className='compl_aint'>
                <th className='compl_aint0'>
                Customer complaint
                <i class="fa-solid fa-plus" onClick={complaint}></i>
                </th>

                <th className='compl_aint1'>
                Failure Reason
                <i class="fa-solid fa-plus" onClick={failure}></i>
                </th>
              </tr>

              <tr className='comp_laint2'>
            
                  <td>Periodic maintenance service </td>
                  <td>Periodic maintenance service </td>
              </tr>

              </table>
            </div>
    </>
  )
}

export default TailComplaint
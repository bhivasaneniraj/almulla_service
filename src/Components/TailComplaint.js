import React from 'react'


function TailComplaint({complaint,failure}) {
  return (
    <>
          <div className="page_two_complaint_failure1">
              <h2><b>Breakdown Analysis For Tail Lift</b> </h2>
              <div className="complaint_failure1">
                <div className="complaint1">
                  <p> Customer complaint </p>
                  <i class="fa-solid fa-plus" onClick={complaint}></i>
                </div>
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
            </div>
    </>
  )
}

export default TailComplaint
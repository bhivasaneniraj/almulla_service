import React from 'react'

function CoolComplaints({complaint,failure}) {
  return (
    <>

    <div className="page_two_complaint_failure">
                <h2><b>Breakdown Analysis For Cooling Unit</b> </h2>
                <div className="complaint_failure">
                  <div className="complaint">
                    <p> Customer complaint </p>
                    <i class="fa-solid fa-plus" onClick={complaint}></i>
                  </div>
                  <div className="failure">
                    <p> Failure Reason </p>
                    <i class="fa-solid fa-plus" onClick={failure}></i>
                  </div>
                </div>
              </div>

              <div className="page_two_bothcomp_fail_list">
                <div className="comp_list">
                  <p>Periodic maintenance service </p>
                </div>
                <div className="fail_list">
                  <p> Unit Service </p>
                </div>
              </div>
    </>
          
            
  )
}

export default CoolComplaints
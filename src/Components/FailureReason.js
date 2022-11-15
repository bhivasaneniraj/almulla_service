import React from 'react'




function FailureReason() {
  return (
    <>
   {/* <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
              > */}
             
            
        <div className="Fail_reason">
        <h3 className="freason">Failure Reason</h3>
        <input
                      type="checkbox"
                      value="Engine oil Drain extension leak"
                   className="inpt" />
                    <label className="lable"> Engine oil Drain extension leak </label>
            
                  <input
                      type="checkbox"
                      value="Engine cylinder Head cover Gasket "
                   className="inpt1" />
                    <label className="lable"> Engine oil Hose </label>

                    <input
                      type="checkbox"
                      value="Engine cylinder Head cover Gasket "
                    className="inpt2"/>
                    <label className="lable"> Engine cylinder Head cover Gasket </label>

                    <input type="checkbox" value="Engine Oil filter leak" className="inpt3"/>
                    <label className="lable"> Engine Oil filter leak</label>
        </div>
        {/* </div> */}
    </>
  )
}

export default FailureReason
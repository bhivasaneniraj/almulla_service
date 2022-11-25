import React from 'react'




function FailureReason({setFailureComplaintsList}) {

  const handleFailureComplaintsList = (e) => {
    if (e.target.checked) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value));
    } else {
      setFailureComplaintsList((prev) =>
        prev.filter((item) => {
          return item !== e.target.value;
        })
      );
    }
  };

  return (
    <>
   {/* <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
              > */}
             
            
        <div className="Fail_reason">
        <h3 className="freason" >Failure Reason</h3>
        <div className="Engine_oil_Drain">

        <input
                      type="checkbox"
                      value="Engine oil Drain extension leak"
                   className="inpt"
                   onChange={handleFailureComplaintsList} />
                    <p className="lable"> Engine oil Drain extension leak </p>
        </div>
            <div className="Engine_oil_hose">

                  <input
                      type="checkbox"
                      value="Engine cylinder Head cover Gasket "
                   className="inpt" 
                   onChange={handleFailureComplaintsList}
                   />
                    <p className="lable"> Engine oil Hose </p>
            </div>
                    <div className="Engine_cylinder_head">

                    <input
                      type="checkbox"
                      value="Engine cylinder Head cover Gasket "
                    className="inpt"
                    onChange={handleFailureComplaintsList}
                    />
                    <p className="lable"> Engine cylinder Head cover Gasket </p>
                    </div>
                      <div className="Engine_oil_filter_leak">

                    <input type="checkbox" 
                    value="Engine Oil filter leak"
                     className="inpt" 
                       onChange={handleFailureComplaintsList}
                    />
                    <p className="lable"> Engine Oil filter leak</p>
                      </div>
        </div>
        {/* </div> */}
    </>
  )
}

export default FailureReason
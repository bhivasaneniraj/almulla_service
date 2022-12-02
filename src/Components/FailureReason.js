import React, { useEffect } from "react";

function FailureReason(props) {
  const {
    setFailureComplaintsList,
    failureComplaintsList,
    engineOilDrain,
    setEngineOilDrain,
    engineOilHose,
    setEngineOilHose,
    engineCylinderHead,
    setEngineCylinderHead,
    engineOilFilter,
    setEngineOilFilter,
  } = props;

  const handleFailureComplaintsList = (e,fail) => {
    console.log(fail)
    if(!fail) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value));
    } else {
      setFailureComplaintsList((prev) =>
          prev.filter((item) => {
            return e.target.value !== item;
          }))
    }
    // const checker = failureComplaintsList.filter(
    //   (item) => e.target.value === item
    // );

    // console.log(checker,'checker')

    // if (checker.length > 0) {
    //   
    //   );
    // } else {
    //   
    //   console.log("hello world");
    // }

    // } else {
    //
    //   console.log('notWorking')
    // }
  };

  return (
    <>
      {/* <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
              > */}

      <div className="Fail_reason">
        <h3 className="freason">Failure Reason</h3>
        <div className="Engine_oil_Drain">
          <input
            type="checkbox"
            style={{cursor:"pointer"}}
            value="Engine oil Drain extension leak"
            className="inpt"
            defaultChecked={engineOilDrain}
            onClick={() => setEngineOilDrain(!engineOilDrain)}
            onChange={(e) => handleFailureComplaintsList(e,engineOilDrain)}
          />
          <p className="lable"> Engine oil Drain extension leak </p>
        </div>
        <div className="Engine_oil_hose">
          <input
            type="checkbox"
            style={{cursor:"pointer"}}
            value="Engine cylinder Head cover Gasket "
            className="inpt"
            defaultChecked={engineOilHose}
            onClick={() => setEngineOilHose(!engineOilHose)}
            onChange={(e) =>handleFailureComplaintsList(e,engineOilHose)}
          />
          <p className="lable"> Engine oil Hose </p>
        </div>
        <div className="Engine_cylinder_head">
          <input
            type="checkbox"
            style={{cursor:"pointer"}}
            value="Engine cylinder Head cover Gasket "
            className="inpt"
            defaultChecked={engineCylinderHead}
            onClick={() => setEngineCylinderHead(!engineCylinderHead)}
            onChange={(e) =>handleFailureComplaintsList(e,engineCylinderHead)}
          />
          <p className="lable"> Engine cylinder Head cover Gasket </p>
        </div>
        <div className="Engine_oil_filter_leak">
          <input
            type="checkbox"
            style={{cursor:"pointer"}}
            value="Engine Oil filter leak"
            className="inpt"
            defaultChecked={engineOilFilter}
            onClick={() => setEngineOilFilter(!engineOilFilter)}
            onChange={(e) => handleFailureComplaintsList(e,engineOilFilter)}
          />
          <p className="lable"> Engine Oil filter leak</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default FailureReason;

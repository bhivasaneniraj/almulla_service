// import React, { useEffect } from "react"

// function FailureTailComplanit(props) {
//   const { engineOilDrain, setEngineOilDrain, engineOilHose, setEngineOilHose, engineCylinderHead, setEngineCylinderHead, engineOilFilter, setEngineOilFilter, setTailFailureComplaints } = props

//   const handleFailureComplaintsList = (e, fail) => {
//     if (!fail) {
//       setTailFailureComplaints((prev) => prev.concat(e.target.value))
//     } else {
//       setTailFailureComplaints((prev) =>
//         prev.filter((item) => {
//           return e.target.value !== item
//         })
//       )
//     }
//   }

//   return (
//     <>
//       {/* <div
//                 className="page_two_complaint_list"
//                 onChange={demooo}
//                 style={{ display: omplistf }}
//               > */}

//       <div className="Fail_reason">
//         <h3 className="freason">Failure Reason</h3>
//         <div className="Engine_oil_Drain">
//           <input type="checkbox" style={{ cursor: "pointer" }} value="Unit Service" className="inpt" defaultChecked={engineOilDrain} onClick={() => setEngineOilDrain(!engineOilDrain)} onChange={(e) => handleFailureComplaintsList(e, engineOilDrain)} />
//           <p className="lable">Unit Service</p>
//         </div>
//         <div className="Engine_oil_hose">
//           <input type="checkbox" style={{ cursor: "pointer" }} value="Too much preventive maintenance" className="inpt" defaultChecked={engineOilHose} onClick={() => setEngineOilHose(!engineOilHose)} onChange={(e) => handleFailureComplaintsList(e, engineOilHose)} />
//           <p className="lable"> Too much preventive maintenance </p>
//         </div>
//         <div className="Engine_cylinder_head">
//           <input type="checkbox" style={{ cursor: "pointer" }} value=" Improper operation " className="inpt" defaultChecked={engineCylinderHead} onClick={() => setEngineCylinderHead(!engineCylinderHead)} onChange={(e) => handleFailureComplaintsList(e, engineCylinderHead)} />
//           <p className="lable"> Improper operation </p>
//         </div>
//         <div className="Engine_oil_filter_leak">
//           <input type="checkbox" style={{ cursor: "pointer" }} value="  Bad (or no) reliability culture" className="inpt" defaultChecked={engineOilFilter} onClick={() => setEngineOilFilter(!engineOilFilter)} onChange={(e) => handleFailureComplaintsList(e, engineOilFilter)} />
//           <p className="lable"> Bad (or no) reliability culture</p>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   )
// }

// export default FailureTailComplanit

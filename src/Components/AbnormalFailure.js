import React from "react"

function AbnormalFailure(props) {
  const { setFailureComplaintsList, failureComplaintsList, popUpId, setTailFailureComplaints, engineClutchDefective, setEngineClutchDefective, clucthKitDefective, setClucthKitDefective, unitSkinVibrating, setUnitSkinVibrating, mountingBoltLoose, setMountingBoltLoose, airHoseBroken, setAirHoseBroken } = props
  const handleFailureComplaintsList = (e, fail) => {
    if (!fail) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value))
    } else {
      setFailureComplaintsList((prev) =>
        prev.filter((item) => {
          return e.target.value !== item
        })
      )
    }
  }
  return (
    <>
      <div className="Fail_reason">
        <h3 className="freason">Failure Reason</h3>
        <div className="Engine_oil_Drain">
          <input type="checkbox" style={{ cursor: "pointer" }} value=" Engine clutch Defective " className="inpt" defaultChecked={engineClutchDefective} onClick={() => setEngineClutchDefective(!engineClutchDefective)} onChange={(e) => handleFailureComplaintsList(e, engineClutchDefective)} />
          <p className="lable"> Engine clutch Defective </p>
        </div>
        <div className="Engine_oil_hose">
          <input type="checkbox" style={{ cursor: "pointer" }} value="Clutch Kit Defective" className="inpt" defaultChecked={clucthKitDefective} onClick={() => setClucthKitDefective(!clucthKitDefective)} onChange={(e) => handleFailureComplaintsList(e, clucthKitDefective)} />
          <p className="lable"> Clutch Kit Defective </p>
        </div>
        <div className="Engine_cylinder_head">
          <input type="checkbox" style={{ cursor: "pointer" }} value=" Unit skin vibrating " className="inpt" defaultChecked={unitSkinVibrating} onClick={() => setUnitSkinVibrating(!unitSkinVibrating)} onChange={(e) => handleFailureComplaintsList(e, unitSkinVibrating)} />
          <p className="lable">Unit skin vibrating </p>
        </div>
        <div className="Engine_oil_filter_leak">
          <input type="checkbox" style={{ cursor: "pointer" }} value="Mounting Bolt loose" className="inpt" defaultChecked={mountingBoltLoose} onClick={() => setMountingBoltLoose(!mountingBoltLoose)} onChange={(e) => handleFailureComplaintsList(e, mountingBoltLoose)} />
          <p className="lable"> Mounting Bolt loose</p>
        </div>
        <div className="Engine_oil_filter_leak">
          <input type="checkbox" style={{ cursor: "pointer" }} value="Air hose broken" className="inpt" defaultChecked={airHoseBroken} onClick={() => setAirHoseBroken(!airHoseBroken)} onChange={(e) => handleFailureComplaintsList(e, airHoseBroken)} />
          <p className="lable">Air hose broken</p>
        </div>
      </div>
    </>
  )
}

export default AbnormalFailure

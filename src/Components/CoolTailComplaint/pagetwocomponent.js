import React, { useRef } from "react"
import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import FailureReason from "./FailureReason"
import FailureTailComplaint from "./FailureTailComplaint"
import AbnormalFailure from "./AbnormalFailure"

function Pagetwocomplaintlist({ handleRadioButton, compSubmite, compCancel, failureComplaintsList, setFailureComplaintsList, eValue, setTailFailureComplaints, tailFailureComplaints }) {
  const [engineOilDrain, setEngineOilDrain] = useState(false)
  const [engineOilHose, setEngineOilHose] = useState(false)
  const [engineCylinderHead, setEngineCylinderHead] = useState(false)
  const [engineOilFilter, setEngineOilFilter] = useState(false)
  const [engineClutchDefective, setEngineClutchDefective] = useState(false)
  const [clucthKitDefective, setClucthKitDefective] = useState(false)
  const [unitSkinVibrating, setUnitSkinVibrating] = useState(false)
  const [mountingBoltLoose, setMountingBoltLoose] = useState(false)
  const [airHoseBroken, setAirHoseBroken] = useState(false)
  const [showTextBox, setShowTextBox] = useState()
  const [hideTextBox, setHideTextBox] = useState()

  console.log(hideTextBox)

  // function ClickHandler() {
  //   setShowRootCause(true)
  //   setShow(false)
  //   setScreenDisable("block")
  // }

  const handleChange = (showTextBox) => {
    setShowTextBox(showTextBox)
  }

  // const onSumbitButton = () => {
  //   setNewFailureComplaint("")
  //   setValueOfThis((prev) => prev.concat(newComplaint))
  //   setScreenDisable("none")
  // }

  return (
    <>
      <div className="complaints_container">
        <i className="fa-sharp fa-solid fa-arrow-left " onClick={compCancel}></i>
        <h3 className="Compla_int_container_heading">Customer Complaints</h3>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Periodic maintenance service"} onChange={handleRadioButton} />
          <p>Periodic maintenance service</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine oil leak"} onChange={handleRadioButton} />
          <p>Engine oil leak</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"An abnormal noise from Engine"} onChange={handleRadioButton} />
          <p>An abnormal noise from Engine</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine not cooling"} onChange={handleRadioButton} />
          <p>Engine not cooling</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine Hot"} onChange={handleRadioButton} />
          <p>Engine Hot</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine Not Staring"} onChange={handleRadioButton} />
          <p>Engine Not Staring</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Stand by not working & noisy"} onChange={handleRadioButton} />
          <p>Stand by not working & noisy</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"UNIT AUX"} onChange={handleRadioButton} />
          <p>UNIT AUX</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Compressor Stuck"} onChange={handleRadioButton} />
          <p>Compressor Stuck</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" onClick={(e) => handleChange(1)} />
          <p>Other</p>
        </div>

        {showTextBox && (
          <form>
            <div className="form-group Form-text">
              <label for="exampleFormControlTextarea1">
                {" "}
                <b>Customer Complaints</b>{" "}
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleRadioButton}></textarea>
            </div>
          </form>
        )}

        {/* <div className="Add-complaint">
          <Container>
            <Col>
              <Row className="d-flex justify-content-center">
                <i className="fa-sharp fa-solid fa-arrow-left " onClick={compCancel}></i>
                <label>
                  <b>Enter Customer Complaints</b>{" "}
                </label>
                <input type="text" onChange={handleRadioButton} />
              </Row>
            </Col>
            <Row>
              <Col>
                <div className="btn_save">
                  <button type="button">Save</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* 
        <div className="arrow_img">
          <img src=".\logo\shape@2x.png" alt="logo" className="arrow_imggg" />
          <div className="Spa_nn"></div>
        </div> */}

        <div className="page_two_component_button">
          <button onClick={compSubmite} className="Save_Button">
            {" "}
            SAVE
          </button>
          {/* <button onClick={compCancel} className="Save_Button">
            {" "}
            Cancel
          </button> */}
        </div>
      </div>
      {/* {eValue === "Engine oil leak" && <FailureReason setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} />}
      {eValue === "An abnormal noise from Engine" && <AbnormalFailure setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineClutchDefective={engineClutchDefective} setEngineClutchDefective={setEngineClutchDefective} clucthKitDefective={clucthKitDefective} setClucthKitDefective={setClucthKitDefective} unitSkinVibrating={unitSkinVibrating} setUnitSkinVibrating={setUnitSkinVibrating} mountingBoltLoose={mountingBoltLoose} setMountingBoltLoose={setMountingBoltLoose} airHoseBroken={airHoseBroken} setAirHoseBroken={setAirHoseBroken} />} */}

      {/* </div> */}
    </>
  )
}

export default Pagetwocomplaintlist

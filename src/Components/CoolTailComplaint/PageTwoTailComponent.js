import React from "react"
import { useState } from "react"
// import FailureTailComplaint from "./FailureTailComplaint"

function PageTwoTailComponent({ handleTailRadioButton, compTailSubmite, eValue, setTailFailureComplaints, tailFailureComplaints, ComplaintCancel }) {
  // const [engineOilDrain, setEngineOilDrain] = useState(false)
  // const [engineOilHose, setEngineOilHose] = useState(false)
  // const [engineCylinderHead, setEngineCylinderHead] = useState(false)
  // const [engineOilFilter, setEngineOilFilter] = useState(false)
  const [textBox, setTextBox] = useState()

  const handleChanged = (textBox) => {
    setTextBox(textBox)
  }

  return (
    <>
      <div className="complaints_container">
        <i className="fa-sharp fa-solid fa-arrow-left " onClick={ComplaintCancel}></i>
        <h3 className="Compla_int_container_heading">Customer Complaint</h3>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine oil leak"} onChange={handleTailRadioButton} />
          <p>Engine oil leak</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Periodic maintenance service"} onChange={handleTailRadioButton} />
          <p>Periodic maintenance service</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"An abnormal noise from Engine"} onChange={handleTailRadioButton} />
          <p>An abnormal noise from Engine</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine not cooling"} onChange={handleTailRadioButton} />
          <p>Engine not cooling</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine Hot"} onChange={handleTailRadioButton} />
          <p>Engine Hot</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Engine Not Staring"} onChange={handleTailRadioButton} />
          <p>Engine Not Staring</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Stand by not working & noisy"} onChange={handleTailRadioButton} />
          <p>Stand by not working & noisy</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"UNIT AUX"} onChange={handleTailRadioButton} />
          <p>UNIT AUX</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" value={"Compressor Stuck"} onChange={handleTailRadioButton} />
          <p>Compressor Stuck</p>
        </div>

        <div className="complist">
          <input type="radio" name="compChoes" onClick={(e) => handleChanged(1)} />
          <p>Other</p>
        </div>
        {textBox && (
          <form>
            <div className="form-group Form-text">
              <label for="exampleFormControlTextarea1">
                {" "}
                <b>Customer Complaints</b>{" "}
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleTailRadioButton}></textarea>
            </div>
          </form>
        )}
        {/* <div className="arrow_img">
          <img src=".\logo\shape@2x.png" alt="logo" className="arrow_imggg" />
          <div className="Spa_nn"></div>
        </div> */}

        <div className="page_two_component_button">
          <button onClick={compTailSubmite} className="Save_Button">
            {" "}
            SAVE
          </button>
          {/* <button onClick={compCancel} className="Save_Button">
            {" "}
            Cancel
          </button> */}
        </div>
      </div>
      {/* {eValue === "Periodic maintenance service" && <FailureTailComplaint engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} setTailFailureComplaints={setTailFailureComplaints} tailFailureComplaints={tailFailureComplaints} />} */}
    </>
  )
}

export default PageTwoTailComponent

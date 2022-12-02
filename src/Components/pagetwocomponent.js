import React from "react";
import { useState } from "react";
import FailureReason from "./FailureReason";

function Pagetwocomplaintlist({
  handleRadioButton,
  compSubmite,
  failureComplaints,
  failureComplaintsList,
  setFailureComplaintsList,
  custComplaint,
  eValue
}) {
  const [engineOilDrain, setEngineOilDrain] = useState(false);
  const [engineOilHose, setEngineOilHose] = useState(false);
  const [engineCylinderHead, setEngineCylinderHead] = useState(false);
  const [engineOilFilter, setEngineOilFilter] = useState(false);
  const [customerComplaintArray,setCustomerComplaint] = useState([])

  return (
    <>
      {/* <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
               
              > */}
      <div className="complaints_container">
        <h3 className="Compla_int_container_heading">Customer Complaint</h3>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Periodic maintenance service"}
            onChange={handleRadioButton}
          />
          <p>Periodic maintenance service</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Engine oil leak"}
            onChange={handleRadioButton}
          />
          <p>Engine oil leak</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"An abnormal noise from Engine"}
            onChange={handleRadioButton}
          />
          <p>An abnormal noise from Engine</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Engine not cooling"}
            onChange={handleRadioButton}
          />
          <p>Engine not cooling</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Engine Hot"}
            onChange={handleRadioButton}
          />
          <p>Engine Hot</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Engine Not Staring"}
            onChange={handleRadioButton}
          />
          <p>Engine Not Staring</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Stand by not working & noisy"}
            onChange={handleRadioButton}
          />
          <p>Stand by not working & noisy</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"UNIT AUX"}
            onChange={handleRadioButton}
          />
          <p>UNIT AUX</p>
        </div>

        <div className="complist">
          <input
            type="radio"
            name="compChoes"
            value={"Compressor Stuck"}
            onChange={handleRadioButton}
          />
          <p>Compressor Stuck</p>
        </div>
        <div className="arrow_img">
          <img src=".\logo\shape@2x.png" alt="logo" className="arrow_imggg" />
          <div className="Spa_nn"></div>
        </div>

        <div className="page_two_component_button">
          <button onClick={compSubmite} className="Save_Button">
            {" "}
            SAVE
          </button>
        </div>
      </div>
      {eValue === "Engine oil leak" && (
        <FailureReason
          setFailureComplaintsList={setFailureComplaintsList}
          failureComplaintsList={failureComplaintsList}
          engineOilDrain={engineOilDrain}
          setEngineOilDrain={setEngineOilDrain}
          engineOilHose={engineOilHose}
          setEngineOilHose={setEngineOilHose}
          engineCylinderHead={engineCylinderHead}
          setEngineCylinderHead={setEngineCylinderHead}
          engineOilFilter={engineOilFilter}
          setEngineOilFilter={setEngineOilFilter}
        />
      )}

      {/* </div> */}
    </>
  );
}

export default Pagetwocomplaintlist;

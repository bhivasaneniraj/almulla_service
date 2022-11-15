import React from "react";
import FailureReason from "./FailureReason";

function pagetwocomplaintlist({
  handleRadioButton,
  compSubmite,
  failureComplaints,
}) {
  return (
    <>
      {/* <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
               
              > */}
      <div className="complaints-container">
        <h3>Customer Complaint</h3>

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
      </div>
      {failureComplaints === "Engine oil leak" && <FailureReason />}
      <button onClick={compSubmite}> Save</button>
      {/* </div> */}
    </>
  );
}

export default pagetwocomplaintlist;

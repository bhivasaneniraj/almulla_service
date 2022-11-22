import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

function ForemanCoolComplaint({ complaint, failure,  }) {
  const options = [
    {
      label: "Send Report to Foremen",
      value: "Send Report to Foremen",
    },
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];

return (
  <>
<div className="tw0_page_complaint" style={{ height: "50%" }}>
  <div className="heading">
    <Col>
      <Row>
        <div className="d-flex flex-row justify-content-between mt-5 p-4 fs-5">
          <b>Breakdown Analysis For Cooling Unit</b>{" "}
          <div className="drop_down">
            <div className="drop-down-value">
              <b>Send Report To - </b>
              <select
                defaultValue=""
                style={{
                  border: "none",
                  backgroundColor: "rgb(226,245,231)",
                  paddingLeft: "33px",
                }}
              >
                <option hidden value="">
                  placeholder
                </option>

                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Row>
    </Col>
  </div>

  <table className="custom_tab">
    <tr className="custom_tab1">
      <th className="custom_tab2">
        Customer complaint{" "}
        <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
      </th>

      <th className="custom_tab3">
        Failure Reason <i class="fa-solid fa-plus" onClick={failure}></i>
      </th>
      <th className="custom_tab4">Probable Root Cause </th>
      <th className="custom_tab4"> Suggested Rectifiction</th>
    </tr>
    <tr className="custom_tab5">
      <td></td>
      <td> Unit Service</td>
      <td>Derive belt expand</td>
      <td>Belt Replacement</td>
    </tr>
  </table>

  {/* <div className="complaint_failure">
    <div className="complaint"></div>
    <div className="failure"></div>
  </div>
</div>
<div className="page_two_bothcomp_fail_list">
  <div className="comp_list"></div> */}
  {/* <div className="fail_list"></div> */}
</div>
    </>
  );
}

export default ForemanCoolComplaint;

import { pre } from "hooks"
import React from "react"
import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import "./AddComplaints.css"

function AddComplaints({ addComplaint, newFailureComplaint, handleChange }) {
  return (
    <div className="add_Complaint">
      <Container>
        <Col>
          <Row className="d-flex justify-content-center">
            <label>Enter Failure Reason</label>
            <input type="text" placeholder="...Enter the complaint" value={newFailureComplaint} onChange={(e) => handleChange(e)} />
          </Row>
        </Col>
        <Row>
          <Col>
            <div className="btn-save">
              <button type="button" disabled={!newFailureComplaint} onClick={() => addComplaint()}>
                Save
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddComplaints

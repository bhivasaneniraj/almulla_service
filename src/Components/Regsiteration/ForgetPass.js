import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./ForgetPass.css"

function Register() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <img src="/images/bitmap@2x.png" alt="example" className="Register_img" />
      <Col>
        <Row>
          <div className="registerText">
            <label>Register</label>
          </div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className="register_Password">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className="register_CnfPassword">
            <label for="password">Confirm Password</label>
            <input type="password" name="password" id="password" required />
          </div>
        </Row>
      </Col>
      <Col>
        <Row className="btn">
          <button class="button-37" role="button">
            Login
          </button>
        </Row>
      </Col>
    </Container>
  )
}

export default Register

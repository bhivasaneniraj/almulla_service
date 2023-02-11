import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./ForgetPass.css"

function Register() {
  return (
    // <Container className="d-flex flex-column align-items-center mt-5">
    //   <img src="/images/bitmap@2x.png" alt="example" className="Register_img" />
    //   <Col>
    //     <Row>
    //       <div className="registerText">
    //         <label>Register</label>
    //       </div>
    //     </Row>
    //   </Col>
    //   <Col>
    //     <Row>
    //       <div className="register_Password">
    //         <label for="password">Password</label>
    //         <input type="password" name="password" id="password" required />
    //       </div>
    //     </Row>
    //   </Col>
    //   <Col>
    //     <Row>
    //       <div className="register_CnfPassword">
    //         <label for="password">Confirm Password</label>
    //         <input type="password" name="password" id="password" required />
    //       </div>
    //     </Row>
    //   </Col>
    //   <Col>
    //     <Row className="btn">
    //       <button class="button-37" role="button">
    //         Login
    //       </button>
    //     </Row>
    //   </Col>
    // </Container>
    <>
      <div className="Main_component">
        <form>
          <div className="Image-form">
            <img src="/images/bitmap@2x.png" alt="example" />
            <h3>
              <b>Al Mulla Industries Service Mobile Solutions</b>
            </h3>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Register

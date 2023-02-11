import React, { useRef } from "react"
import "./Register.css"
import { useState } from "react"

function Register() {
  const [Error, setError] = useState("none")
  const [btnName, setBtnName] = useState("Send OTP")
  const [show, setShow] = useState(false)
  const [employeeId, setEmployeeId] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [optNumber, setOtpNumber] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const handleClick = () => {
    setBtnName("Resend OTP")
    console.log("click")
    setShow(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (employeeId.length == 0 || mobileNumber.length == 0 || optNumber.length == 0) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
  }
  return (
    <>
      <div className="Main">
        <div className="Img">
          <img src="/images/bitmap@2x.png" alt="example" />
          <h3>
            <b>Al Mulla Industries Service Mobile Solutions</b>
          </h3>
        </div>
        <h2>
          <b>Register</b>{" "}
        </h2>
        <div className="Register_form">
          <div className="inputBox">
            <i className="fa-solid fa-user icon"></i>
            <input type="id" onChange={(e) => setEmployeeId(e.target.value)} required />
            <div className="underline"></div>
            <label className="Register_page"> Employee ID</label>
          </div>
          <div className="inputBox">
            <i className="fa-solid fa-mobile icon"></i>
            <input type="tel" onChange={(e) => setMobileNumber(e.target.value)} required />
            <div className="underline"></div>
            <label className="Register_page">Mobile Number </label>
          </div>

          <div className="err_msg">
            {/* <h3 style={{ display: err }}>  Please Enter Correct Username</h3> */}
            <h3 style={{ display: Error }}> Please Enter Valid Credential. </h3>
          </div>
          <div className="opt">
            <button onClick={handleClick}>{btnName}</button>
          </div>
          {show && (
            <div className="inputBox">
              <i class="fa-sharp fa-solid fa-envelope icons"></i>
              <input type="otp" required />
              <div className="underline"></div>
              <label className="Register_page"> Enter the OTP you received</label>
            </div>
          )}
          <div className="Submit_btn">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

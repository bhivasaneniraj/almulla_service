import React, { useRef } from "react"
import "./Register.css"
import { useState } from "react"

function Register() {
  const [Error, setError] = useState("none")
  const [btnName, setBtnName] = useState("Send OTP")
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setBtnName("Resend OTP")
    console.log("click")
    setShow(true)
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
        <h2>Register</h2>
        <div className="Register_form">
          <div className="inputBox">
            <i className="fa-solid fa-user icon"></i>
            <input type="text" required />
            <div className="underline"></div>
            <label className="Register_page"> Employee ID</label>
          </div>
          <div className="inputBox">
            <i className="fa-solid fa-mobile"></i>
            <input type="password" required />
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
              <i className="fa-solid fa-messages"></i>
              <input type="otp" required />
              <div className="underline"></div>
              <label className="Register_page"> Enter the OTP you received</label>
            </div>
          )}
          <div className="Submit_btn">
            <button onClick={() => (window.location.href = "/")}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

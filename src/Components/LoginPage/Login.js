import React, { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./login.css"

function Login() {
  const [usernameText, setusernameText] = useState("")
  const [passwordText, setpasswordText] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const managerUsername = "salman@gmail.com"
  const managerPassword = "123456"

  const supervisorUsername = "anisurRahman@gmail.com"
  const supervisorPassword = "123456"

  const foremanUsername = "shabir@gmail.com"
  const foremanPassword = "123456"

  const technician = "shakil@gmail.com"
  const technicianpassword = "123456"

  const navigate = useNavigate()

  const register = () => {
    navigate("/Registration")
  }

  const handleUsername = (e) => {
    setusernameText(e.target.value)
  }

  const handlePassword = (e) => {
    setpasswordText(e.target.value)
  }

  const Submit = () => {
    if (managerUsername === usernameText && managerPassword === passwordText) {
      navigate("/ManagerViewJob")
      setErrorMessage(true)
    } else if (supervisorUsername === usernameText && supervisorPassword === passwordText) {
      navigate("/SupervisorJobs")
      setErrorMessage(true)
    } else if (foremanUsername === usernameText && foremanPassword === passwordText) {
      navigate("/ForemanJobs")
      setErrorMessage(true)
    } else if (technician === usernameText && technicianpassword === passwordText) {
      navigate("/TechnicianJobs")
      setErrorMessage(true)
    } else {
      setErrorMessage("Invalid UserName or Password")
    }
  }

  return (
    <>
      <div className="Main-component">
        <div className="Input-btn">
          <form>
            <div className="images">
              <img src="/images/bitmap@2x.png" alt="example" />
              <h3>
                <b>Al Mulla Industries Service Mobile Solutions</b>
              </h3>
            </div>
            <div className="input-form">
              <div className="form-group">
                <input onChange={handleUsername} value={usernameText} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" required />
              </div>
              <div class="form-group">
                <input onChange={handlePassword} value={passwordText} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
              </div>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary" onClick={Submit}>
              Login
            </button>
            <p>OR</p>
            <button style={{ marginTop: "-1rem" }} type="submit" className="btn btn-primary" onClick={register}>
              Register
            </button>
            <b>
              <a href="#" className="link-success" onClick={() => (window.location.href = "/passwordReset")}>
                Forgot Password?
              </a>
            </b>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

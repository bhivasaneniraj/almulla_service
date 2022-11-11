import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";


function Login() {



   
    
    const username = "user@gmail.com";
    const password = "123456";

    const navigate = useNavigate();


   const [usernameText , setusernameText] = useState();
   const [passwordText , setpasswordText] = useState();

   const hello = (e) => {
          setusernameText(e.target.value)
   }

   const passw = (e) => {
    setpasswordText(e.target.value)
   }

   const Submit = () => {
       if (username === usernameText && password === passwordText){
        navigate('/VehicleRegister')
       }
   }

  return (
    <>
    <div className="Main">
        <div className="images">
        <img
              className="image1"
              src="/images/bitmap@2x.png"
              alt="example"
            />
            <h3><b>Al-Mulla Industrial Service Mobile Solutions</b></h3>

        </div>
       <div className="inputbtn">
        <input type="email" placeholder="user name" className="btn1" onChange={hello}/>
        <div className="inputbtn2">
        <input type="password" placeholder="Password" className="btn2" onChange={passw}/>
        </div>
       <div className="submitbtn">
        <button className="sbbntn" onClick={Submit}>Login</button>
       </div>
       <a href="#"className="anchortg"><b>Forgot Password?</b> </a>
       </div>
    
    </div>
    </>
  )
}

export default Login
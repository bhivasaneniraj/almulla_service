import React from "react"
import { useState } from "react"
import "./SearchBar.css"

function SearchBar(props) {
  const [newVehicleRegisterBlackBg, setNewVehicleRegisterBlackBg] = useState("none")

  // const [cancelVehicle, setCancelVehicle] = useState(true)

  // const RegisterCancel = () => {
  //   setCancelVehicle(false)
  // }
  const VehicleRegister = () => {
    setNewVehicleRegisterBlackBg("block")
    // setCancelVehicle(true)
  }

  return (
    <>
      <div className="Page_two_search_Chooes_box">
        <h2 className="bottom">
          <b> Vehicle Receiver</b>{" "}
        </h2>
        <div className="Vehicle-registration">
          {" "}
          <h2 className="Vehicle-Register">
            <b>
              {" "}
              New Vehicle <br /> Registrartion{" "}
            </b>
          </h2>
          <img src="/logo/NewRegistrationBtn.png" alt="Button" onClick={VehicleRegister} />
        </div>

        <div className="page_two_middel_box">
          <div className="page_two_chooes">
            <div className="kt">
              <input type="radio" name="chooes" className="choesBTN" value={"KTNumber"} onChange={(e) => props.setSerialNo(e.target.value)} />

              <h2>
                <b>KT Number</b>{" "}
              </h2>
            </div>

            <div className="page_two_or">
              <p> O </p>
              <p> R </p>
            </div>
            <div className="chassis">
              <input type="radio" name="chooes" className="choesBTN" value={"Chassis"} onChange={(e) => props.setSerialNo(e.target.value)} />
              <h2>
                <b>Chassis</b>{" "}
              </h2>
            </div>
            <div className="page_two_or">
              <p> O </p>
              <p> R </p>
            </div>
            <div className="chassis">
              <input type="radio" name="chooes" className="choesBTN" value={"Serial No"} onChange={(e) => props.setSerialNo(e.target.value)} />
              <h2>
                <b>Serial No</b>{" "}
              </h2>
            </div>
          </div>
          <div className="page_two_serchbar">
            <input type="text" placeholder="Enter number" onChange={props.ktnum} />
            <button onClick={props.Submit}> Search </button>
          </div>
        </div>
        <div className="Registration-form" style={{ display: newVehicleRegisterBlackBg }}>
          <div className="New-register">
            <div className="Register">
              <h1>
                <b>New Vehicle Registration</b>{" "}
              </h1>
              <form>
                <h3>Client Details</h3>
                <div className="form-group form">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="Text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name " />
                </div>
                <div class="form-group form">
                  <label for="exampleInputPassword1">Contact Number</label>
                  <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Number" />
                </div>
                <div className="form-group forms">
                  <label for="exampleInputEmail1">Email Address</label>
                  <input type="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email " />
                </div>
                <div className="form-group forms">
                  <label for="exampleInputEmail1">Post Box Number</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PostBox Number " />
                </div>
                <div className="form-group form-address">
                  <label for="exampleInputEmail1">Address</label>
                  <input type="text" className="form-control Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address " />
                </div>
              </form>
              <hr className="new" />
              <form className="vehicle-details">
                <h3>Vehicle Details</h3>
                <div className="form-group vnumber">
                  <label for="exampleInputNumber1">KT.No</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="KT.No " />
                </div>
                <div class="form-group vnumber">
                  <label for="exampleInputNumber1">Chassis Number</label>
                  <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Chassis Number" />
                </div>
                <div className="form-group vnumber">
                  <label for="exampleInputNumber1">Unit Serial Number</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Serial Number " />
                </div>
                <div className="form-group vnumber">
                  <label for="exampleInputNumber1">Unit Model Number</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Model Number " />
                </div>
                <div className="form-group form-Vehicle vnumber">
                  <label for="exampleInputEmail1">Vehicle Manufacturer</label>
                  <input type="text" className="form-control Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Vehicle Manufacturer " />
                </div>
                <div className="form-group vehicle-address">
                  <label for="exampleInputEmail1">Address</label>
                  <input type="text" className="form-control Vehicle-Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" />
                </div>
              </form>
              <button type="button" className="cancel-button">
                Close
              </button>
              <button type="button" className="save-button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar

import React from "react"
import { useState } from "react"
import "./SearchBar.css"
import NewVehicleRegistration from "../NewVehicleRegistration/NewVehicleRegistration"

function SearchBar(props) {
  const [newVehicleRegisterBlackBg, setNewVehicleRegisterBlackBg] = useState("none")
  const [cancelButton, setCancelButton] = useState(true)

  const Cancel = () => {
    props.setBackgroundDisplay("block")
    setNewVehicleRegisterBlackBg("none")
  }

  // const [cancelVehicle, setCancelVehicle] = useState(true)

  // const RegisterCancel = () => {
  //   setCancelVehicle(false)
  // }
  const VehicleRegister = () => {
    props.setBackgroundDisplay("none")
    setNewVehicleRegisterBlackBg("block")
    setCancelButton(true)
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
        <NewVehicleRegistration newVehicleRegisterBlackBg={newVehicleRegisterBlackBg} Cancel={Cancel} />
      </div>
    </>
  )
}

export default SearchBar

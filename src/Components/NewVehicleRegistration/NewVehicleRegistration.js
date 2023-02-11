import React, { useState } from "react"

function NewVehicleRegistration({ newVehicleRegisterBlackBg, Cancel }) {
  // const [username, setuserName] = useState("")
  // const [userErr, setUserErr] = useState(false)
  // const [numberErr, setNumberErr] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [contact, setContact] = useState("")
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [postBox, setPostBox] = useState("")
  const [address, setAddress] = useState("")
  const [ktNumber, setKtNumber] = useState("")
  const [chassisNumber, setChassisNumber] = useState("")
  const [serialNumber, setSerialNumber] = useState("")
  const [modelNumber, setModelNumber] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [vehicleAddress, setVehicleAddress] = useState("")

  // const { register, handleSubmit } = useForm()

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

  // function userHandler(e) {
  //   let item = e.target.value
  //   if (item.length <= 3) {
  //     setUserErr(true)
  //   } else {
  //     setUserErr(false)
  //   }
  // }

  // function numberHandler(e) {
  //   let item = e.target. value
  //   if (item.length < 10) {
  //     setNumberErr(true)
  //   } else {
  //     setNumberErr(false)
  //   }
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (firstName.length == 0 || lastName.length == 0) {
  //     setError(true)
  //   }
  //   console.log(firstName, lastName)
  // }

  // const initialValues = { username: "", email: "" }
  // const [formValues, setFormValues] = useState(initialValues)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormValues({ ...formValues, [name]: value })
  //   console.log(formValues)
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  const regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const checkEmail = (e) => {
    setEmail(e.target.value)
    if (regax.test(email) === false) {
      setEmailError("Please enter valid Email Address")
    } else {
      setEmailError("")
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName.length == 0 || contact.length == 0 || chassisNumber.length == 0 || modelNumber.length == 0 || manufacturer.length == 0) {
      setError(true)
    } else {
      setError(false)
    }
    if (postBox.length == 0 || address.length == 0 || ktNumber.length == 0 || serialNumber.length == 0 || vehicleAddress.length == 0) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <>
      <div className="Registration-form" style={{ display: newVehicleRegisterBlackBg }}>
        <div className="New-register">
          <div className="Register">
            <h1>
              <b>New Vehicle Registration</b>{" "}
            </h1>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <form className="Form-details">
              <h3>Client Details</h3>
              <div className="form-group form">
                <label for="exampleInputEmail1">Name</label>
                <input onChange={(e) => setFirstName(e.target.value)} type="name" className="form-control" placeholder="Enter Name " name="username" required />
                {error && firstName.length <= 0 ? <label id="label"> Name can't be Empty</label> : ""}
              </div>
              <div class="form-group form">
                <label for="exampleInputPassword1">Contact Number</label>
                <input onChange={(e) => setContact(e.target.value)} type="tel" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Number" name="mobile" required />
                {error && contact.length < 10 ? <label id="label">Number atleast 10 digit</label> : ""}
              </div>
              <div className="form-group forms">
                <label for="exampleInputEmail1" style={{ marginTop: "2rem" }}>
                  Email Address
                </label>
                <input onChange={checkEmail} type="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email " name="email" required />
                <label htmlFor="" id="label">
                  {emailError}
                </label>
              </div>
              <div className="form-group forms">
                <label for="exampleInputEmail1" style={{ marginTop: "2rem" }}>
                  Post Box Number
                </label>
                <input onChange={(e) => setPostBox(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PostBox Number " required />
                {error && postBox.length <= 0 ? <label id="label"> PostBox number can't be Empty</label> : ""}
              </div>
              <div className="form-group form-address">
                <label for="exampleInputEmail1" style={{ marginTop: "2rem" }}>
                  Address
                </label>
                <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address " required />
                {error && address.length <= 0 ? <label id="label"> Address can't be Empty</label> : ""}
              </div>
              <hr className="new" />
              <h3>Vehicle Details</h3>
              <div className="form-group vnumber">
                <label for="exampleInputNumber1">KT.No</label>
                <input onChange={(e) => setKtNumber(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="KT.No " required />
                {error && ktNumber.length <= 0 ? <label id="label"> KT No. can't be Empty</label> : ""}
              </div>
              <div class="form-group vnumber">
                <label for="exampleInputNumber1">Chassis Number</label>
                <input onChange={(e) => setChassisNumber(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Chassis Number" required />
                {error && chassisNumber.length <= 0 ? <label id="label"> Chassis No. can't be Empty</label> : ""}
              </div>
              <div className="form-group vnumber">
                <label for="exampleInputNumber1">Unit Serial Number</label>
                <input onChange={(e) => setSerialNumber(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Serial Number " required />
                {error && serialNumber.length <= 0 ? <label id="label"> Serial No. can't be Empty</label> : ""}
              </div>
              <div className="form-group vnumber">
                <label for="exampleInputNumber1">Unit Model Number</label>
                <input onChange={(e) => setModelNumber(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Model Number " required />
                {error && modelNumber.length <= 0 ? <label id="label"> Model No. can't be Empty</label> : ""}
              </div>
              <div className="form-group form-Vehicle vnumber">
                <label for="exampleInputEmail1" style={{ marginTop: "4rem" }}>
                  Vehicle Manufacturer
                </label>
                <input onChange={(e) => setManufacturer(e.target.value)} type="text" className="form-control Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Vehicle Manufacturer " required />
                {error && manufacturer.length <= 0 ? <label id="label"> Can't be Empty</label> : ""}
              </div>
              <button onClick={Cancel} type="button" className="cancel-button">
                Cancel
              </button>
              <button onClick={handleSubmit} type="button" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewVehicleRegistration

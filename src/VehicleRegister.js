import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CoolComplaints from "./Components/CoolComplaints"
import FailureReason from "./Components/FailureReason"
import TailComplaint from "./Components/TailComplaint"
import "./Style.css"
import Pagetwocomponent from "./Components/pagetwocomponent"
import PageTwoTailComponent from "./PageTwoTailComponent"

import ErrorModel from "./Components/ThankYouFolder/Error"
import { Button } from "react-bootstrap"
import PhysicalRemark from "./Components/PhysicalRemaks/PhysicalRemark"

function VehicleRegister() {
  const [text, settext] = useState()
  const [blackBg, setblackBg] = useState("none")
  const [tailBlackBg, setTailBlackBg] = useState("none")
  const [faillist, setfaillist] = useState("none")
  const [omplistf, setomplistf] = useState("block")
  const [completSubmite, setcompletSubmite] = useState()
  const [omdemo, setomdemo] = useState([])
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [checkedAllBox, setCheckedAllBox] = useState(false)
  const [checkedFirst, setCheckedFirst] = useState(false)
  const [checkedSecond, setCheckedSecond] = useState(false)
  const [searchTextInput, setSearchTextInput] = useState("")
  const [failureComplaints, SetFailureComplaints] = useState("")
  const [customerComplaint, setCustomerComplaint] = useState([])
  const [failureComplaintsList, setFailureComplaintsList] = useState([])
  const [TailLiftComplaint, setTailLiftComplaint] = useState([])
  const [CustComplaint, setCustComplaint] = useState([])
  const [pagetwocomplaintlist, setpagetwocomplainlist] = useState(false)
  const [msg, setMsg] = useState("")
  const [eValue, setEValue] = useState()
  const [arrayList, setArrayList] = useState([])
  const [ListArray, setListArray] = useState([])
  const [tailArrayList, setTailArrayList] = useState([])
  const [tailCustomerComplaints, setTailCustomerComplaints] = useState()
  const [tailFailureComplaints, setTailFailureComplaints] = useState([])

  function submit() {
    setMsg({
      title: "Job Created Successfully",
      message: "Thank You!!",
    })
  }
  // const [Showhide, setShowhide] = useState("Hello World")

  // const showhie = () => {
  //       console.log(Showhide);
  // }

  const navigate = useNavigate

  const handleCheckedAll = () => {
    if (!checkedAllBox) {
      setCheckedAllBox(true)
      setCheckedFirst(true)
      setCheckedSecond(true)
    } else {
      setCheckedAllBox(false)
      setCheckedFirst(false)
      setCheckedSecond(false)
    }
  }

  const handleCheckedFirst = () => {
    if (!checkedFirst && checkedSecond) {
      setCheckedAllBox(true)
    } else {
      setCheckedAllBox(false)
    }
    setCheckedFirst(!checkedFirst)
  }

  const handleCheckedSecond = () => {
    if (!checkedSecond && checkedFirst) {
      setCheckedAllBox(true)
    } else {
      setCheckedAllBox(false)
    }
    setCheckedSecond(!checkedSecond)
  }

  const ktnum = (e) => {
    settext(e.target.value)
    setSearchTextInput(e.target.value)
  }

  const complaint = () => {
    setblackBg("block")

    setomplistf("block")
  }

  const tailComplaint = () => {
    setTailBlackBg("block")
  }

  const failure = () => {
    setblackBg("block")
    setTailBlackBg("block")
    setfaillist("block")
  }
  var a = []

  const demooo = (e) => {
    setcompletSubmite(e.target.value)
  }
  const helomk = (e) => {
    var value = e.target.value
    var checked = e.target.checked
    if (checked) {
      setomdemo([...omdemo, value])
    } else {
      setomdemo(omdemo.filter((e) => e !== value))
    }
  }

  const compSubmite = () => {
    if (!arrayList.includes(eValue)) setArrayList((prev) => prev.concat(eValue))
    console.log(completSubmite)
    setCustomerComplaint(completSubmite)
    setblackBg("none")
    setomplistf("none")
  }

  const compTailSumbite = () => {
    if (!tailArrayList.includes(eValue)) setTailArrayList((prev) => prev.concat(eValue))
    setTailBlackBg("none")
  }

  const failuereSubmite = () => {
    if (omdemo.length === 0) {
    } else {
      setblackBg("none")
      setfaillist("none")
      console.log(omdemo)
    }
  }

  const errorHandler = () => {
    setMsg("")
  }

  const options = [
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ]

  const Select_option = [
    {
      id: 1,
      label1: " Shuwaikh Van 1",
      value: "Shuwaikh Van 1",
    },
    {
      id: 2,
      label2: "Shuwaikh Van 2",
      value: "Shuwaikh Van 2",
    },
  ]

  function Submit() {
    const tabledata = [
      {
        id: 1,
        UnitDetail: "Cooling Unit",
        KTNo: "17/30866",
        SerialNo: "VKA94286893",
        Chassis: " NK004102-F",
        Model: "CITIMAX-400",
        Date: "16.10.2022",
        WarrantyStart: " 13.06.2022",
        WarrantyEnd: "16.06.2022",
      },
      {
        id: 2,
        UnitDetail: "Tail Lift",
        KTNo: "17/30866",
        SerialNo: "21084589",
        Chassis: "9031793-N",
        Model: "ALU,24V,1500KG",
        Date: " 16.09.2022",
        WarrantyStart: " 27.06.2021",
        WarrantyEnd: "26.06.2022",
      },
    ]
    if (searchTextInput === "17/30866") {
      setData(tabledata)
      setShow(true)
    } else {
      alert("Please Enter Correct Number")
    }
  }

  var name = " 915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"

  const [checkedAll, setCheckedAll] = useState(false)

  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })

  /* ################################################ */

  /* #### TOGGLES checK STATE BASED ON inputName #### */

  /* ################################################ */

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState }

      newState[inputName] = !prevState[inputName]

      return newState
    })
  }

  /* ###################################################### */

  /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */

  /* ###################################################### */

  const selectAll = (value) => {
    setCheckedAll(value)

    setChecked((prevState) => {
      const newState = { ...prevState }

      for (const inputName in newState) {
        newState[inputName] = value
      }

      return newState
    })
  } // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  /* ############################################# */

  /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */

  /* ############################################# */

  useEffect(() => {
    let allChecked = true
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false
      }
    }
    if (allChecked) {
      setCheckedAll(true)
    } else {
      setCheckedAll(false)
    }
  }, [checked])

  const handleRadioButton = (e) => {
    setEValue(e.target.value)
  }

  const handleTailRadioButton = (e) => {
    setEValue(e.target.value)
  }

  useEffect(() => {
    console.log(TailLiftComplaint, "failureListr")
  }, [TailLiftComplaint])

  useEffect(() => {
    console.log(failureComplaintsList, "failureList")
  }, [failureComplaintsList])

  const handlerAdioButton = (e) => {
    setCustComplaint(e.target.value)
  }
  useEffect(() => {
    console.log(CustComplaint, "CustomerComplaint")
  }, [CustComplaint])

  return (
    <>
      <div className="main_div">
        <div className="Page_two_logoAndLogOut">
          <img src="/images/bitmap@3x.png" alt="example" />
          <div className="vl"></div>
          <h3>
            <b> Welcome to Al Mulla Industries Service Mobile Solutions</b>
          </h3>
          <br />
        </div>

        <div className="heading">
          <span>Anisur Rahman </span>

          <div className="Page_two_LogOut">
            <i>
              <img src="./images/shape@3x.png" alt="" onClick={() => (window.location.href = "/")} />
            </i>
            <h1 className="head">
              <b onClick={() => (window.location.href = "/")}>Logout</b>{" "}
            </h1>
          </div>
        </div>
        <div className="Page_two_search_Chooes_box">
          <h2 className="bottom">
            <b> Vehicle Receiver</b>{" "}
          </h2>
          <Button variant="outline-success" className="Button" onClick={() => (window.location.href = "/ManagerView")}>
            Pending Jobs
          </Button>
          <div className="page_two_middel_box">
            <div className="page_two_chooes">
              <div className="kt">
                <input type="radio" name="chooes" checked className="choesBTN" />
                <h2>
                  <b>KT Number</b>{" "}
                </h2>
              </div>
              <div className="page_two_or">
                <p> O </p>
                <span></span>
                <p> R </p>
              </div>
              <div className="chassis">
                <input type="radio" name="chooes" className="choesBTN" />
                <h2>
                  <b>Chassis</b>{" "}
                </h2>
              </div>
            </div>
            <div className="page_two_serchbar">
              <input type="text" placeholder="Enter number" onChange={ktnum} />
              <button onClick={Submit}> Search </button>
            </div>
          </div>
        </div>

        {show && (
          <div className="hideshow">
            <div className="hideshow">
              <div className="page_two_table">
                <b>Location </b>
                <div className="drop_down_value">
                  <select className="drop_select">
                    {Select_option.map((option) => (
                      <option value={option.value}>
                        <b>{option.value}</b>
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="dropdown">
                  <form className="dpd">
                    <label className="labell">
                      <b>Location</b>{" "}
                    </label>

                    <select className="dpdbtn">
                    {Select_option.map((option) => (
                      <>

                    
                  <option value={option.value}>
                    <b>{option.label1}</b>
                     </option>
                  <option value={option.value}>
                    <b>{option.label2}</b>
                  </option>
                  </>
                  
                ))}
                    </select>
                  </form>
                </div> */}

                <span>
                  {" "}
                  Customer <p> {name} </p>
                </span>

                <table>
                  <thead className="Vehicle_details">
                    <tr>
                      <th>
                        {" "}
                        <input
                          type="checkbox"
                          className="chck1"
                          onChange={(event) => {
                            handleCheckedAll()
                            selectAll(event.target.checked)
                          }}
                          checked={checkedAllBox}
                        />
                      </th>
                      <th>Unit Details</th>
                      <th>KT No.</th>
                      <th>Serial No.</th>
                      <th>Chassis</th>
                      <th>Model</th>
                      <th>Date</th>
                      <th>Warranty Start</th>
                      <th>Warranty End</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tab">
                        {" "}
                        <input
                          type="checkbox"
                          name="id"
                          className="chck1"
                          onChange={() => {
                            toggleCheck(data[0].id)
                            handleCheckedFirst()
                          }}
                          checked={checkedFirst}
                        />
                      </th>
                      <td>{data[0].UnitDetail}</td>
                      <td>{data[0].KTNo}</td>
                      <td>{data[0].SerialNo} </td>
                      <td>{data[0].Chassis} </td>
                      <td> {data[0].Model} </td>
                      <td> {data[0].Date}</td>
                      <td className="tdata"> {data[0].WarrantyStart}</td>
                      <td className="tdata2"> {data[0].WarrantyEnd}</td>
                    </tr>

                    <tr>
                      <th className="tab">
                        {" "}
                        <input
                          type="checkbox"
                          name="id"
                          className="chck1"
                          onChange={() => {
                            toggleCheck(data[1].id)
                            handleCheckedSecond()
                          }}
                          checked={checkedSecond}
                        />
                      </th>
                      <td>{data[1].UnitDetail}</td>
                      <td>{data[1].KTNo}</td>
                      <td>{data[1].SerialNo} </td>
                      <td>{data[1].Chassis} </td>
                      <td> {data[1].Model} </td>
                      <td> {data[1].Date}</td>
                      <td className="tdata3"> {data[1].WarrantyStart}</td>

                      <td className="tdata4"> {data[1].WarrantyEnd}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PhysicalRemark />

              {checkedFirst && <CoolComplaints complaint={complaint} failure={failure} arrayList={arrayList} failureComplaintsList={failureComplaintsList} />}
            </div>

            {checkedSecond && <TailComplaint tailArrayList={tailArrayList} tailFailureComplaints={tailFailureComplaints} tailComplaint={tailComplaint} />}

            <div className="main_black_div" style={{ display: blackBg }}>
              <div className="page_two_complaint_list" onChange={demooo} style={{ display: omplistf }}>
                <Pagetwocomponent compSubmite={compSubmite} failureComplaints={failureComplaints} handleRadioButton={handleRadioButton} failureComplaintsList={failureComplaintsList} setFailureComplaintsList={setFailureComplaintsList} eValue={eValue} />
              </div>
            </div>

            <div className="main_black_div" style={{ display: tailBlackBg }}>
              <div className="page_two_complaint_list">
                <PageTwoTailComponent compTailSubmite={compTailSumbite} handleTailRadioButton={handleTailRadioButton} tailFailureComplaints={tailFailureComplaints} setTailFailureComplaints={setTailFailureComplaints} eValue={eValue} />
              </div>
            </div>

            <div className="drop_down_values">
              <b>Send Report To - </b>
              <select className="Drop_select">
                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>

            {msg && <ErrorModel title={msg.title} message={msg.message} onConfirm={errorHandler} />}
            <div className="job_card">
              <button className="job_cardbtn" onClick={submit}>
                <b>Create Job Card</b>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default VehicleRegister

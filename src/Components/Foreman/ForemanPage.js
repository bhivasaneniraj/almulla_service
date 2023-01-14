import React, { useEffect, useState } from "react"

import ForemTailComponent from "./ForemanTailComponent"
import ForemanCoolComplaint from "./ForemanCoolComplaint"
import PhysicalRemarks from "../PhysicalRemaks/PhysicalRemark"
import Pagetwocomponent from "../CoolTailComplaint/pagetwocomponent"
import "./foreman.css"
import ErrorModel from "../ThankYouFolder/Error"
import Header from "../HeadingComponents/Header"
import { useNavigate } from "react-router-dom"

function Foremanpage() {
  const [text, settext] = useState()
  const [blackBg, setblackBg] = useState("none")
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
  const [details, setDetails] = useState([])
  // const [pagetwocomplaintlist, setpagetwocomplainlist] = useState(false);
  // const [Showhide, setShowhide] = useState("Hello World")
  const [msg, setMsg] = useState("")

  function submit() {
    setMsg({
      title: "Successfully Assigned To Technician.",
    })
  }
  const errorHandler = () => {
    setMsg("")
  }

  // const showhie = () => {
  //       console.log(Showhide);
  // }

  const Nav = useNavigate()

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
  const failure = () => {
    setblackBg("block")
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
    if (completSubmite != undefined) {
      console.log(completSubmite)
      setCustomerComplaint(completSubmite)
      setblackBg("none")
      setomplistf("none")
    }
  }

  const failuereSubmite = () => {
    if (omdemo.length === 0) {
    } else {
      setblackBg("none")
      setfaillist("none")
      console.log(omdemo)
    }
  }

  const options = [
    {
      label: "Send Report to Foremen",
      value: "Send Report to Foremen",
    },
    {
      label: "Abdul Raza",
      value: "Abdul Raza",
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
        WarrantyStart: "15.06.2023",
        WarrantyEnd: "16.06.2023",
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

    setDetails(tabledata)

    if (searchTextInput === "17/30866") {
      setData(tabledata)
      setShow(true)
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
    SetFailureComplaints(e.target.value)
  }

  useEffect(() => {
    console.log(failureComplaintsList, "failureList")
  }, [failureComplaintsList])

  const handleFailureComplaintsList = (e) => {
    if (e.target.checked) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value))
    } else {
      setFailureComplaintsList((prev) =>
        prev.filter((item) => {
          return item !== e.target.value
        })
      )
    }
  }

  const getColor = (UnitDetail) => {
    if (UnitDetail.length === 0) return "red"
    if (UnitDetail.length < 10) return "blue"
    return ""
  }

  const coolComponentData = [
    {
      id: 1,
      customerComplaint: "Engine oil leak",
      failureReason: "Engine oil Drain extension leak",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
    {
      id: 2,
      // customerComplaint: "Engine oil leak",
      failureReason: "Engine oil Hose ",
      probableRootCause: "Derive belt loose",
      suggestedRectifiction: "Motor Replacement",
    },
  ]

  const datas = [
    {
      id: 1,
      customerComplaint: "Periodic maintenance  service ",
      failureReason: "Unit Service",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
    {
      id: 2,
      customerComplaint: "Periodic maintenance  service ",
      failureReason: "Unit Service",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
  ]

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
      WarrantyEnd: " 16.06.2023",
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
      WarrantyEnd: " 26.06.2022",
    },
  ]
  var Referenceno = "300021572"
  var location = "Shuwaikh Van 1"
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"
  return (
    <>
      <div className="main">
        <Header name={"Shabbir"} />
        <div className="CardReference">
          <h2 className="card_ref">
            <b>Job Card Reference Number - {Referenceno}</b>{" "}
            <div className="loc">
              <b>
                {" "}
                Location: <span>{location}</span>
              </b>
            </div>
          </h2>
        </div>

        <b>
          {" "}
          <p className="paragraph">Customer {refer} </p>{" "}
        </b>
        <div className="datatable">
          <table className="tabular">
            <tr>
              <th>Unit Details</th>
              <th>KT No.</th>
              <th>Serial No.</th>
              <th>Chassis</th>
              <th>Model</th>
              <th>Date</th>
              <th>Warranty Start</th>
              <th>Warranty End</th>
            </tr>

            <tr>
              <td>{tabledata[0].UnitDetail}</td>
              <td>{tabledata[0].KTNo}</td>
              <td>{tabledata[0].SerialNo} </td>
              <td>{tabledata[0].Chassis} </td>
              <td> {tabledata[0].Model} </td>
              <td> {tabledata[0].Date}</td>
              <td className="dataT"> {tabledata[0].WarrantyStart}</td>

              <td className="dataT2"> {tabledata[0].WarrantyEnd}</td>
            </tr>

            <tr>
              <td>{tabledata[1].UnitDetail}</td>
              <td>{tabledata[1].KTNo}</td>
              <td>{tabledata[1].SerialNo} </td>
              <td>{tabledata[1].Chassis} </td>
              <td> {tabledata[1].Model} </td>
              <td> {tabledata[1].Date}</td>
              <td className="dataT3"> {tabledata[1].WarrantyStart}</td>

              <td className="dataT4"> {tabledata[1].WarrantyEnd}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="Technician_task">
        <ForemanCoolComplaint datas={coolComponentData} complaint={complaint} failure={failure} />
      </div>
      <ForemTailComponent datas={datas} />

      <div className="main_black_div" style={{ display: blackBg }}>
        <div className="page_two_complaint_list" onChange={demooo} style={{ display: omplistf }}>
          <Pagetwocomponent compSubmite={compSubmite} failureComplaints={failureComplaints} handleRadioButton={handleRadioButton} />
        </div>
      </div>
      {msg && <ErrorModel title={msg.title} message={msg.message} onClick={() => (window.location.href = "/Foremanv")} />}
      <div className="btn_div mt-5">
        <div className="Card_job">
          <button className="job_cardbtn_btn" onClick={submit}>
            <b>Assign to Technician</b>{" "}
          </button>
        </div>
      </div>
    </>
  )
}

export default Foremanpage

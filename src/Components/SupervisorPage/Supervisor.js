import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ErrorModel from "../ThankYouFolder/Error"
import FailureReason from "../CoolTailComplaint/FailureReason"
import PhysicalRemark from "../PhysicalRemaks/PhysicalRemark"
import "./Supervisor.css"
import Header from "../HeadingComponents/Header"
import ManagerTailComplaint from "./SupervisorTailComplaint"

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

function Supervisor() {
  const [blackBg, setblackBg] = useState("none")
  const [eValue, setEValue] = useState()
  const [msg, setMsg] = useState("")
  const [completSubmite, setcompletSubmite] = useState()

  const [omplistf, setomplistf] = useState("block")
  const [screenDisable, setScreenDisable] = useState("block")
  const [engineOilDrain, setEngineOilDrain] = useState(false)
  const [engineOilHose, setEngineOilHose] = useState(false)
  const [engineCylinderHead, setEngineCylinderHead] = useState(false)
  const [engineOilFilter, setEngineOilFilter] = useState(false)
  const [failureComplaintsList, setFailureComplaintsList] = useState([])
  const [show, setShow] = useState(false)
  const [hideElem, setHideElem] = useState(false)

  //* new Failuer states
  const [textValue, setTextValue] = useState([])
  const [textEVlaue, setTextEVale] = useState([])

  //* Root complaint states
  const [rootValue, setRootValue] = useState([])
  const [rootEValue, setRootEValue] = useState([])
  const [eRootValue, setValue] = useState()

  //* Cause Complaint
  const [rootCauseCauseComplaintList, setRootCauseComplaintList] = useState([])
  const [checkedValue, setCheckedValue] = useState([])

  //!               New Text box failure complaint             //

  const handleChangeText = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "")
    setTextValue(result)
  }

  //!                      Root complaint                       //

  const handleChangeRootText = (e) => {
    setRootValue(e.target.value)
  }

  const HandleFailuerComplaint = () => {
    setShow(false)
    setScreenDisable("block")
  }

  const handleClickComplaint = () => {
    setHideElem(true)
    setShow(false)
    setScreenDisable("block")
  }

  const cancelComplaint = () => {
    setShow(false)
  }

  function clickHandler() {
    setShow(false)
    setScreenDisable("block")
  }

  const reasonSubmit = (e) => {
    if (!failureComplaintsList.includes(eValue)) setFailureComplaintsList((prev) => prev.concat(eValue))
    setTextValue("")
    setTextEVale((prev) => prev.concat(textValue))
    setRootValue("")
    setRootEValue((prev) => prev.concat(rootValue))
    setblackBg("none")
    setomplistf("none")
    setRootCauseComplaintList((prev) => prev.concat(rootCauseCauseComplaintList))
  }

  useEffect(() => {
    setValue(failureComplaintsList)
  }, [failureComplaintsList])

  const complaint = () => {
    setblackBg("block")
    setShow(true)
    setomplistf("block")
  }

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
  function submit() {
    setMsg({
      title: "Successfully Sent For Quote Preparation.",
    })
  }

  const handleCheckComponent = (e) => {
    setEValue(engineOilDrain)
  }

  const demooo = (e) => {
    setcompletSubmite(e.target.value)
  }

  const errorHandler = () => {
    setMsg("")
  }

  const navigate = useNavigate()
  var Referenceno = "300021572"
  var location = "Shuwaikh Van 1"
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"

  const datas = [
    {
      id: 1,
      customerComplaint: "Periodic maintenance  service ",
      failureReason: "Unit Service",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
  ]

  var Referenceno = "300021572"
  var location = "Shuwaikh Van 1"
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"

  return (
    <>
      <Header name={"Anisur Rahman - Supervisor"} />
      <div className="Refrence-Number">
        <div className="CardReference_ref">
          <h2 className="cardref_ref">
            <b>Job Card Reference Number - {Referenceno}</b>{" "}
          </h2>
          <div className="d-flex justify-content-end loc">
            <div className="loc">
              <b>
                {" "}
                <span>Location : {location}</span>
              </b>
            </div>
          </div>
        </div>
      </div>

      <b>
        {" "}
        <p className="paragraph">Customer {refer} </p>{" "}
      </b>
      <div className="datatable_data">
        <table className="tabular_data">
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

      <div style={{ height: "700px" }}>
        <ManagerTailComplaint complaint={complaint} failureComplaintsList={failureComplaintsList} newFailureComplaintList={textEVlaue} setFailureComplaintList={setFailureComplaintsList} probableRootCause={rootEValue} valueOfRetification={checkedValue} newProbableRoot={rootCauseCauseComplaintList} />
      </div>

      {show && (
        <div className="main_black_div" style={{ display: blackBg }}>
          <div className="page_two_complaint_list" onChange={demooo} style={{ display: omplistf, position: "absolute", top: "25rem" }}>
            <div className="failureReason">
              <FailureReason handleCheckComponent={handleCheckComponent} setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} HandleFailuerComplaint={HandleFailuerComplaint} clickHandler={clickHandler} submitComplaint={reasonSubmit} cancelComplaint={cancelComplaint} handleChangeText={handleChangeText} textNote={textValue} handleChangeRootText={handleChangeRootText} rootValue={rootValue} textEVlaue={eRootValue} rootCauseCauseComplaintList={rootCauseCauseComplaintList} setRootCauseComplaintList={setRootCauseComplaintList} setCheckedValue={setCheckedValue} checkedValue={checkedValue} />
            </div>
          </div>
        </div>
      )}

      {msg && <ErrorModel title={msg.title} message={msg.message} onClick={() => (window.location.href = "/SupervisorAssignedJob")} />}
      <div className="job_card_button">
        <button className="job_cardbtn_btn_btn" onClick={submit}>
          <b>Send for Quote Preparation</b>{" "}
        </button>
      </div>
    </>
  )
}

export default Supervisor

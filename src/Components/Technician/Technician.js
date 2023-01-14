import React, { useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import TechnicianCoolingUnit from "./TechnicianCoolUnit"
import Header from "../HeadingComponents/Header"
import "./Technician.css"

import ErrorModel from "../ThankYouFolder/Error"
import RootCause from "../RootSuggestCause/RootCause"
import FailureReason from "../CoolTailComplaint/FailureReason"
import RootCauseComplaintList from "../RootSuggestCause/RootCauseComplaintList"
import AddComplaints from "../AddComplaints/Addcomplaints"
import SuggestedRetification from "../RootSuggestCause/SuggestedRectification"

function Technician() {
  const [arrayList, setArrayList] = useState([])
  const [blackBg, setblackBg] = useState("none")
  const [eValue, setEValue] = useState()
  const [msg, setMsg] = useState("")
  const [completSubmite, setcompletSubmite] = useState()
  const [customerComplaint, setCustomerComplaint] = useState([])
  const [omplistf, setomplistf] = useState("block")
  const [screenDisable, setScreenDisable] = useState("block")
  const [close, setClose] = useState(true)
  const [engineOilDrain, setEngineOilDrain] = useState(false)
  const [engineOilHose, setEngineOilHose] = useState(false)
  const [engineCylinderHead, setEngineCylinderHead] = useState(false)
  const [engineOilFilter, setEngineOilFilter] = useState(false)
  const [failureComplaintsList, setFailureComplaintsList] = useState([])

  const [rootCauseCauseComplaintList, setRootCauseComplaintList] = useState([])
  const [rootCause, setNewRootCause] = useState([])
  const [loseBelt, setLoseBelt] = useState(false)
  const [noBelt, setNoBelt] = useState(false)
  const [beltIssue, setBeltIssue] = useState(false)
  const [changeBelt, setChangeBelt] = useState(false)
  const [show, setShow] = useState(false)
  const [showFaliure, setShowFaliure] = useState(false)
  const [showRootCause, setShowRootCause] = useState(false)
  const [newComplaint, setNewFailureComplaint] = useState([])
  const [valueOfThis, setValueOfThis] = useState([])
  const [valueOfRootCause, setValueOfRootCause] = useState([])
  const [valueOfRetification, setValueOfRetification] = useState([])
  const [retification, setRetification] = useState([])
  const [hideElem, setHideElem] = useState(false)

  console.log("probableRootCause" + valueOfRetification)

  const HandleFailuerComplaint = () => {
    setShowFaliure(true)
    setShow(false)
    setScreenDisable("block")
  }

  const handleClickComplaint = () => {
    setHideElem(true)
    setShow(false)
    setScreenDisable("block")
  }

  const onSumbitRetification = () => {
    setRetification("")
    setValueOfRetification((prev) => prev.concat(retification))
    setScreenDisable("none")
  }

  // const addComplaint = () => {
  //   setNewFailureComplaint((prev) => {
  //     return prev.concat(newComplaint);
  //   });
  //   setblackBg("none");
  //   setomplistf("none");
  // };

  const handleChange = (event) => {
    setNewFailureComplaint(event.target.value)
    setNewRootCause(event.target.value)
    setRetification(event.target.value)
  }

  const onSumbitButton = () => {
    setNewFailureComplaint("")
    setValueOfThis((prev) => prev.concat(newComplaint))
    setScreenDisable("none")
  }

  function clickHandler() {
    setShowRootCause(true)
    setShow(false)
    setScreenDisable("block")
  }

  // const handleShowBtn = () => {
  //   show.current = true;
  // };

  const reasonSubmit = (e) => {
    if (!failureComplaintsList.includes(eValue)) setFailureComplaintsList((prev) => prev.concat(eValue))
    //setFailureComplaintsList(failureComplaintsList);
    // eslint-disable-next-line no-lone-blocks

    setblackBg("none")
    setomplistf("none")
  }

  const onSubmitRootCause = () => {
    setNewRootCause("")
    setValueOfRootCause((prev) => prev.concat(rootCause))
    setScreenDisable("none")
  }

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

  return (
    <>
      <Header name={"Shakeel siddiqi"} />
      <div className="Page_two_logoAndLogOut_out">
        <div className="CardReference_ref_card" style={{ width: "100rem" }}>
          <h2 className="card_ref_ref_card">
            <b>Job Card Reference Number - {Referenceno}</b>{" "}
          </h2>
          <div className="d-flex justify-content-end loc">
            <div className="locAt_tion">
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
        <p className="para_graph">Customer {refer} </p>{" "}
      </b>
      <div className="datatable">
        <table className="tabular_table">
          <tr>
            <th>Unit Details</th>
            <th>KT No.</th>
            <th>Serial No.</th>
            <th>Chassis</th>
            <th>Model</th>
            <th>Date</th>
          </tr>

          <tr>
            <td>{tabledata[0].UnitDetail}</td>
            <td>{tabledata[0].KTNo}</td>
            <td>{tabledata[0].SerialNo} </td>
            <td>{tabledata[0].Chassis} </td>
            <td> {tabledata[0].Model} </td>
            <td> {tabledata[0].Date}</td>
          </tr>

          <tr>
            <td>{tabledata[1].UnitDetail}</td>
            <td>{tabledata[1].KTNo}</td>
            <td>{tabledata[1].SerialNo} </td>
            <td>{tabledata[1].Chassis} </td>
            <td> {tabledata[1].Model} </td>
            <td> {tabledata[1].Date}</td>
          </tr>
        </table>
      </div>

      <div className="Technician-coolingUnit">
        <TechnicianCoolingUnit complaint={complaint} failureComplaintsList={failureComplaintsList} newFailureComplaintList={valueOfThis} setFailureComplaintList={setFailureComplaintsList} probableRootCause={valueOfRootCause} valueOfRetification={valueOfRetification} />
        {/* <RootCause
          rootCauseComplaintList={rootCauseCauseComplaintList}
          handleShowBtn={complaint}
        /> */}
      </div>

      {show && (
        <div className="main_black_div" style={{ display: blackBg }}>
          <div className="page_two_complaint_list" onChange={demooo} style={{ display: omplistf, position: "absolute", top: "25rem" }}>
            <div className="failureReason">
              <FailureReason handleCheckComponent={handleCheckComponent} setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} HandleFailuerComplaint={HandleFailuerComplaint} />
            </div>

            <div className="RootCauseReason">
              <RootCauseComplaintList submitComplaint={reasonSubmit} rootCauseCauseComplaintList={rootCauseCauseComplaintList} setRootCauseComplaint={setRootCauseComplaintList} loseBelt={loseBelt} setLoseBelt={setLoseBelt} noBelt={noBelt} setNoBelt={setNoBelt} setbeltIssue={setBeltIssue} beltIssue={beltIssue} changeBelt={changeBelt} setChangeBelt={setChangeBelt} clickHandler={clickHandler} />
            </div>
            <div>
              <SuggestedRetification handleClickComplaint={handleClickComplaint} />
            </div>
          </div>
        </div>
      )}

      <div style={{ display: screenDisable }}>{showFaliure && <AddComplaints addComplaint={onSumbitButton} newFailureComplaint={newComplaint} handleChange={handleChange} />}</div>

      <div style={{ display: screenDisable }}>{showRootCause && <AddComplaints addComplaint={onSubmitRootCause} newFailureComplaint={rootCause} handleChange={handleChange} />}</div>

      <div style={{ display: screenDisable }}>
        {hideElem === true ? (
          // <div>{window.location.href = "/"}</div>
          <AddComplaints addComplaint={onSumbitRetification} newFailureComplaint={retification} handleChange={handleChange} />
        ) : (
          <></>
        )}
      </div>

      {msg && <ErrorModel title={msg.title} message={msg.message} onClick={() => (window.location.href = "/technicianview")} />}
      <div className="job_card_card">
        <button className="job_cardbtn_btn" onClick={submit}>
          <b>Send for Quote Preparation</b>{" "}
        </button>
      </div>
    </>
  )
}

export default Technician

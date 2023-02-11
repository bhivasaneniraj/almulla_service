import React, { useEffect, useState } from "react"

import ForemTailComponent from "./ForemanTailComponent"
import ForemanCoolComplaint from "./ForemanCoolComplaint"
import PhysicalRemarks from "../PhysicalRemaks/PhysicalRemark"
import Pagetwocomponent from "../CoolTailComplaint/pagetwocomponent"
import "./foreman.css"
import Header from "../HeadingComponents/Header"
import ErrorModel from "../ThankYouFolder/Error"
import { useNavigate } from "react-router-dom"
import FailureReason from "../CoolTailComplaint/FailureReason"
import RootCauseComplaintList from "../RootSuggestCause/RootCauseComplaintList"
import SuggestedRetification from "../RootSuggestCause/SuggestedRectification"

function Foremanpage() {
  //! Tail Unit

  const [tailEvalue, setTailEvalue] = useState([])
  const [tailEngineOilDrain, setTailEngineOilDrain] = useState([])
  const [tailEngineOilHose, setTailEngineOilHose] = useState([])
  const [tailEngineCylinderHead, setTailEngineCylinderHead] = useState([])
  const [tailEngineOilFilter, setTailEngineOilFilter] = useState([])
  const [tailFailureComplaintList, setTailFailureComplaintsList] = useState([])

  const [blackBackground, setBlackBackground] = useState("none")
  const [ForemanTailBlackBg, setForemanTailBlackBg] = useState("none")
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
  const [tailCom, setTailCom] = useState(false)

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

  const HandleTailFailuerComplaint = () => {
    setShow(false)
    setScreenDisable("block")
  }

  const cancelComplaint = () => {
    setShow(false)
    setTailCom(false)
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
    setBlackBackground("none")
    setomplistf("none")
    setRootCauseComplaintList((prev) => prev.concat(rootCauseCauseComplaintList))
  }

  const tailSubmit = (e) => {
    if (!tailFailureComplaintList.includes(tailEvalue)) setTailFailureComplaintsList((prev) => prev.concat(tailEvalue))
    setBlackBackground("none")
    setomplistf("none")
    setTailEvalue("")
  }

  useEffect(() => {
    setValue(failureComplaintsList)
  }, [failureComplaintsList])

  const complaint = () => {
    setBlackBackground("block")
    setShow(true)
    setomplistf("block")
  }

  const tailComplaint = () => {
    setForemanTailBlackBg("block")
    setTailCom(true)
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

  const handleTailComponent = (e) => {
    setTailEvalue(tailEngineOilDrain)
  }

  const demooo = (e) => {
    setcompletSubmite(e.target.value)
  }

  const errorHandler = () => {
    setMsg("")
  }

  var Referenceno = "300021572"
  var location = "Shuwaikh Van 1"
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"

  return (
    <>
      <div className="main">
        <Header name={"Shabbir - Foreman"} />
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
            <thead>
              <tr>
                <th>Unit tabledata</th>
                <th>KT No.</th>
                <th>Serial No.</th>
                <th>Chassis</th>
                <th>Model</th>
                <th>Date</th>
                <th>Warranty Start</th>
                <th>Warranty End</th>
              </tr>
            </thead>
            {tabledata.map((val, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr>
                      <td>{val.UnitDetail}</td>
                      <td>{val.KTNo}</td>
                      <td>{val.SerialNo}</td>
                      <td>{val.Chassis}</td>
                      <td>{val.Model}</td>
                      <td>{val.Date}</td>
                      <td className="dataT">{val.WarrantyStart}</td>
                      <td className="dataT4">{val.WarrantyEnd}</td>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </table>
        </div>

        <div className="Foreman-task">
          <ForemanCoolComplaint complaint={complaint} failureComplaintsList={failureComplaintsList} newFailureComplaintList={textEVlaue} setFailureComplaintList={setFailureComplaintsList} probableRootCause={rootEValue} valueOfRetification={checkedValue} newProbableRoot={rootCauseCauseComplaintList} />
        </div>

        <div className="Foreman-tail-lift-task">
          <ForemTailComponent Tailcomplaint={tailComplaint} failureComplaintsList={tailFailureComplaintList} setFailureComplaintList={setTailFailureComplaintsList} newFailureComplaintList={[]} probableRootCause={[]} suggestedReplication={[]} />
        </div>

        {show && (
          <div className="main_black_Background">
            <div className="Foreman-Cool-complaint-lists" onChange={demooo}>
              <div className="Foreman-fail-reasons">
                <FailureReason handleCheckComponent={handleCheckComponent} setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} HandleFailuerComplaint={HandleFailuerComplaint} clickHandler={clickHandler} submitComplaint={reasonSubmit} cancelComplaint={cancelComplaint} handleChangeText={handleChangeText} textNote={textValue} handleChangeRootText={handleChangeRootText} rootValue={rootValue} textEVlaue={eRootValue} rootCauseCauseComplaintList={rootCauseCauseComplaintList} setRootCauseComplaintList={setRootCauseComplaintList} setCheckedValue={setCheckedValue} checkedValue={checkedValue} />
              </div>
            </div>
          </div>
        )}

        {tailCom && (
          <div className="main_black_Background" style={{ display: ForemanTailBlackBg }}>
            <div className="Foreman-tail-Complaint-list" onChange={demooo} style={{ display: omplistf, position: "absolute", top: "25rem" }}>
              <div className="Foreman-fail-reasons">
                <FailureReason handleCheckComponent={handleTailComponent} setFailureComplaintsList={setTailFailureComplaintsList} failureComplaintsList={tailFailureComplaintList} engineOilDrain={tailEngineOilDrain} setEngineOilDrain={setTailEngineOilDrain} engineOilHose={tailEngineOilHose} setEngineOilHose={setTailEngineOilHose} engineCylinderHead={tailEngineCylinderHead} setEngineCylinderHead={setTailEngineCylinderHead} engineOilFilter={tailEngineOilFilter} setEngineOilFilter={setTailEngineOilFilter} HandleFailuerComplaint={HandleTailFailuerComplaint} submitComplaint={tailSubmit} cancelComplaint={cancelComplaint} />
              </div>
            </div>
          </div>
        )}

        {/* <div style={{ display: screenDisable }}>
        {showFaliure && (
          <AddComplaints
            addComplaint={onSumbitButton}
            newFailureComplaint={newComplaint}
            handleChange={handleChange}
          />
        )}
      </div>

      <div style={{ display: screenDisable }}>
        {showRootCause && (
          <AddComplaints
            addComplaint={onSubmitRootCause}
            newFailureComplaint={rootCause}
            handleChange={handleChange}
          />
        )}
      </div>

      <div style={{ display: screenDisable }}>
        {hideElem === true ? (
          // <div>{window.location.href = "/"}</div>
          <AddComplaints
            addComplaint={onSumbitRetification}
            newFailureComplaint={retification}
            handleChange={handleChange}
          />
        ) : (
          <></>
        )}
      </div> */}

        {/* <div style={{ display: screenDisable }}>
        {showTailFaliure && (
          <AddTailComplaint
            addComplaint={submitTailComplaint}
            handleChange={handleChangeTail}
            newFailureComplaint={tailFailureValue}
          />
        )}
      </div>
      <div style={{ display: screenDisable }}>
        {showTailFaliure && (
          <AddTailComplaint
            addComplaint={submitTailRootCause}
            handleChange={handleChangeTail}
            newFailureComplaint={tailRootCause}
          />
        )}
      </div>
      <div style={{ display: screenDisable }}>
        {showTailFaliure && (
          <AddTailComplaint
            addComplaint={submitTailRetification}
            handleChange={handleChangeTail}
            newFailureComplaint={tailRetification}
          />
        )}
      </div> */}

        {msg && <ErrorModel title={msg.title} message={msg.message} onClick={() => (window.location.href = "/ForemanAssignedJob")} />}
        <div className="btn_div mt-5">
          <div className="Card_job">
            <button className="job_cardbtn_btn" onClick={submit}>
              <b>Send for Quote Preparation</b>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Foremanpage

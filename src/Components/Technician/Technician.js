import React, { useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../Technician.css"
import TechnicianCoolingUnit from "./TechnicianCoolUnit"

import "./Technician.css"

import ErrorModel from "../ThankYouFolder/Error"
import RootCause from "./RootCause"
import FailureReason from "../FailureReason"
import RootCauseComplaintList from "./RootCauseComplaintList"

function Technician() {
  const [arrayList, setArrayList] = useState([])
  const [blackBg, setblackBg] = useState("none")
  const [eValue, setEValue] = useState()
  const [msg, setMsg] = useState("")
  const [completSubmite, setcompletSubmite] = useState()
  const [customerComplaint, setCustomerComplaint] = useState([])
  const [omplistf, setomplistf] = useState("block")
  const [close, setClose] = useState(true)
  const [engineOilDrain, setEngineOilDrain] = useState(false)
  const [engineOilHose, setEngineOilHose] = useState(false)
  const [engineCylinderHead, setEngineCylinderHead] = useState(false)
  const [engineOilFilter, setEngineOilFilter] = useState(false)
  const [failureComplaintsList, setFailureComplaintsList] = useState([])

  const [rootCauseCauseComplaintList, setRootCauseComplaintList] = useState([])
  const [loseBelt, setLoseBelt] = useState(false)
  const [noBelt, setNoBelt] = useState(false)
  const [beltIssue, setBeltIssue] = useState(false)
  const [changeBelt, setChangeBelt] = useState(false)
  const show = useRef(false)

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

  const complaint = () => {
    console.log("button is clicked")
    setblackBg("block")
    show.current = true
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
      <Col sm="12" md="12" lg="12">
        <Row>
          {/* <Header name={"shakeel siddiqui"} /> */}
          <div className="Page_two_logoAndLogOut">
            <img src="/images/bitmap@3x.png" alt="example" />
            <div className="vl"></div>
            <h3>
              <b> Welcome to Al Mulla Industries Service Mobile Solutions</b>
            </h3>
            <br />
          </div>

          <div className="heading" style={{ marginTop: "-40px" }}>
            <span style={{ marginLeft: "13.7rem" }}>Anisur Rahman </span>

            <div className="Page_two_LogOut">
              <i>
                <img src="./images/shape@3x.png" alt="" onClick={() => (window.location.href = "/")} />
              </i>
              <h1 className="head">
                <b onClick={() => (window.location.href = "/")}>Logout</b>{" "}
              </h1>
            </div>
          </div>
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
        </Row>
      </Col>
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

      <div style={{ height: "600px", width: "50rem", marginTop: "15.3rem" }}>
        <TechnicianCoolingUnit complaint={complaint} failureComplaintsList={failureComplaintsList} />
        <RootCause rootCauseComplaintList={rootCauseCauseComplaintList} handleShowBtn={complaint} />
      </div>

      {show && (
        <div className="main_black_div" style={{ display: blackBg }}>
          <div className="page_two_complaint_list" onChange={demooo} style={{ display: omplistf, position: "absolute", top: "25rem" }}>
            <div className="failureReason">
              <FailureReason handleCheckComponent={handleCheckComponent} setFailureComplaintsList={setFailureComplaintsList} failureComplaintsList={failureComplaintsList} engineOilDrain={engineOilDrain} setEngineOilDrain={setEngineOilDrain} engineOilHose={engineOilHose} setEngineOilHose={setEngineOilHose} engineCylinderHead={engineCylinderHead} setEngineCylinderHead={setEngineCylinderHead} engineOilFilter={engineOilFilter} setEngineOilFilter={setEngineOilFilter} />
            </div>

            <div className="RootCauseReason">
              <RootCauseComplaintList submitComplaint={reasonSubmit} rootCauseCauseComplaintList={rootCauseCauseComplaintList} setRootCauseComplaint={setRootCauseComplaintList} loseBelt={loseBelt} setLoseBelt={setLoseBelt} noBelt={noBelt} setNoBelt={setNoBelt} setbeltIssue={setBeltIssue} beltIssue={beltIssue} changeBelt={changeBelt} setChangeBelt={setChangeBelt} />
            </div>
          </div>
        </div>
      )}

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

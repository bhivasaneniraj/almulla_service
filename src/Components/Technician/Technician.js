import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../Technician.css"
import TechnicianCoolingUnit from "./TechnicianCoolUnit"
import PhysicalRemark from "../PhysicalRemaks/PhysicalRemark"
import ErrorModel from "../ThankYouFolder/Error"

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

function Technician() {
  // const [msg, setMsg] = useState("");
  const [msg, setMsg] = useState("")

  function submit() {
    setMsg({
      title: "Sent",
      message: "Thank You!!",
    })
  }
  const errorHandler = () => {
    setMsg("")
  }

  const navigate = useNavigate()

  const datas = [
    {
      id: 1,
      customerComplaint: "Engine oil leak ",
      failureReason: "Engine oil Drain extension leakEngine",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
    {
      id: 2,
      // customerComplaint: "Engine oil leak ",
      failureReason: "Engine oil Hose ",
      probableRootCause: "Derive belt loose",
      suggestedRectifiction: "Motor Replacemen",
    },
  ]

  var Referenceno = "300021572"
  var location = "Shuwaikh Van 1"
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"

  return (
    <>
      <Col sm="12" md="12" lg="12">
        <Row>
          <div className="Page_two_logoAndLogOut_out">
            <img src="/images/bitmap@2x.png" alt="example" />
            <div className="vl"></div>
            <h3>
              <b> Welcome to Al Mulla Industries Service Mobile Solutions</b>
            </h3>
            <br />
          </div>
          <div className="heading_ing">
            <div className="header-text">
              <span>Shakeel Siddiqui</span>
            </div>

            <div className="LogOut_out">
              <i type="button" className="correct-img" onClick={() => navigate("/")}>
                <img src="Images/shape@2x.png" />
              </i>
              <h1 className="head_er">
                <b>Logout</b>{" "}
              </h1>
            </div>
            <div className="CardReference_ref">
              <h2 className="card_ref_ref">
                <b>Job Card Reference Number - {Referenceno}</b>{" "}
              </h2>
              <div className="d-flex justify-content-end loc">
                <div className="locAt_tion">
                  <b>
                    {" "}
                    <span style={{ marginRight: "14px" }}>Location : {location}</span>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Col>
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
      <div style={{ marginTop: "8rem" }}>
        <PhysicalRemark />
      </div>

      <div style={{ height: "700px" }}>
        <TechnicianCoolingUnit datas={datas} />
      </div>

      {msg && <ErrorModel title={msg.title} message={msg.message} onConfirm={errorHandler} />}
      <div className="job_card">
        <button className="job_cardbtn" onClick={submit}>
          <b>Send for Quote Preparation</b>{" "}
        </button>
      </div>

      {/* <div className="Break_cool_unit">
      <h2 >Breakdown Analysis For Cooling Unit</h2>
      <div className="fail_complaint">
      <div className="complain">
      <p> Customer complaint </p>
      <i class="fa-solid fa-plus"></i>
      </div>
        <div className="fail">
        <p> Failure Reason </p>
        <i class="fa-solid fa-plus" ></i>
        </div>
        </div>
      </div> */}
    </>
  )
}

export default Technician

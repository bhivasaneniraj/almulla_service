import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ErrorModel from "../ThankYouFolder/Error"
import Header from "../HeadingComponents/Header"
import PhysicalRemark from "../PhysicalRemaks/PhysicalRemark"
import "./Manager.css"
import ManagerTailComplaint from "./ManagerTailComplaint"

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

function Manager() {
  const [msg, setMsg] = useState("")

  const navigate = useNavigate()

  function submit() {
    setMsg({
      title: "Successfully Sent For Quote Preparation.",
    })
  }

  const errorHandler = () => {
    setMsg("")
  }

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
      <Header name={"Anisur Rahman"} />
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
      {/* <div style={{ marginTop: "8rem" }}>
        <PhysicalRemark />
      </div> */}

      <div style={{ height: "700px" }}>
        <ManagerTailComplaint datas={datas} />
      </div>
      {msg && <ErrorModel title={msg.title} message={msg.message} onClick={() => (window.location.href = "/ManagerView")} />}
      <div className="job_card_button">
        <button className="job_cardbtn_btn_btn" onClick={submit}>
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

export default Manager

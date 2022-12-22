import React from "react"
import { Col, Row } from "react-bootstrap"
import "../../Style.css"
import "../../Technician.css"
import { useState } from "react"

function TechnicianCoolingUnit(props) {
  const [arrayList, setArrayList] = useState([])
  const [blackBg, setblackBg] = useState("none")
  const [eValue, setEValue] = useState()
  const [completSubmite, setcompletSubmite] = useState()
  const [customerComplaint, setCustomerComplaint] = useState([])
  const [omplistf, setomplistf] = useState("block")
  const [checkedFirst, setCheckedFirst] = useState(false)
  const [checkedAllBox, setCheckedAllBox] = useState(false)
  const [checkedSecond, setCheckedSecond] = useState(false)

  const compSubmite = () => {
    if (!arrayList.includes(eValue)) setArrayList((prev) => prev.concat(eValue))
    console.log(completSubmite)
    setCustomerComplaint(completSubmite)
    setblackBg("none")
    setomplistf("none")
  }

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

  return (
    <div>
      <div>
        <Col>
          <Row>
            <div className="mt-5 text">
              <label className="Break_Unit">Breakdown Analysis For Cooling Unit</label>
            </div>
          </Row>
        </Col>
        <div className="datatable_table">
          <table className="tabular_tab">
            <tr>
              <th className="icon">
                Customer complaint <i class="fa-solid fa-plus"></i>{" "}
              </th>
              <th className="icon">
                Failure Reason <i class="fa-solid fa-plus"></i>
              </th>
            </tr>

            {props.datas.map((val, key) => {
              return (
                <tr key={val.id}>
                  <td>{val.customerComplaint}</td>
                  <td>{val.failureReason}</td>
                </tr>
              )
            })}
          </table>

          <div className="display_tables">
            <div className="portable_root">
              <table className="Potable_root_Cause">
                <thead>
                  <th className="portable_cause">
                    Probable <br />
                    Root Cause <i class="fa-solid fa-plus"></i>
                  </th>
                </thead>
                <tbody>
                  {/* {rootCause.map((item) => {
                  return (
                    <tr>
                      <td></td>
                    </tr>
                  )
                })} */}
                  <tr>
                    <td>Derive belt expand </td>
                  </tr>
                  <tr>
                    <td>Derive belt loose</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="root_suggest">
              <table className="Suggest_Cause">
                <thead>
                  <th className="Suggest">
                    Suggested <br />
                    Rectifiction <i class="fa-solid fa-plus"></i>
                  </th>
                </thead>
                <tbody>
                  {/* {rootCause.map((item) => {
                  return (
                    <tr>
                      <td></td>
                    </tr>
                  )
                })} */}
                  <tr>
                    <td>Belt Replacement</td>
                  </tr>
                  <tr>
                    <td>Motor Replacement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicianCoolingUnit

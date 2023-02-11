import React, { useEffect, useState } from "react"
import RootCauseComplaintList from "../RootSuggestCause/RootCauseComplaintList"
import "../LoginPage/login.css"
import "./CoolTail.css"
import "./FailureReason.css"

function FailureReason(props) {
  const { setFailureComplaintsList, engineOilDrain, setEngineOilDrain, engineOilHose, setEngineOilHose, engineCylinderHead, setEngineCylinderHead, engineOilFilter, setEngineOilFilter, handleChangeText, submitComplaint, cancelComplaint, textNote, handleChangeRootText, rootValue, rootCauseCauseComplaintList, setRootCauseComplaintList, setCheckedValue, checkedValue } = props

  const [hidden, setHidden] = useState("none")
  const [checked, setChecked] = useState(false)
  const [engineChecked, setEngineChecked] = useState(false)

  console.log(engineChecked)

  const onChangeHandler = (e) => {
    setChecked(e.target.checked)
  }

  const handleFailureComplaintsList = (e, fail) => {
    if (!fail) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value))
    } else {
      setFailureComplaintsList((prev) =>
        prev.filter((item) => {
          return e.target.value !== item
        })
      )
    }
    if (e.target.value === "Engine oil Drain extension leak") {
      setEngineChecked(e.target.checked)
    }
  }
  return (
    <>
      <div className="Fail_reason">
        <form action="">
          <h3 className="Foreman_fail-reason">Failure Reason</h3>
          <div className="Engine_oil_Drain">
            <input checked={engineChecked} type="checkbox" value="Engine oil Drain extension leak" className="inpt" defaultChecked={engineOilDrain} onClick={() => setEngineOilDrain(!engineOilDrain)} onChange={(e) => handleFailureComplaintsList(e, engineOilDrain)} />
            <label className="lable"> Engine oil Drain extension leak </label>
          </div>
          <div className="Engine_oil_hose">
            <input type="checkbox" value="Engine oil Hose" className="inpt" defaultChecked={engineOilHose} onClick={() => setEngineOilHose(!engineOilHose)} onChange={(e) => handleFailureComplaintsList(e, engineOilHose)} />
            <label className="lable"> Engine oil Hose </label>
          </div>
          <div className="Engine_cylinder_head">
            <input type="checkbox" value=" Engine cylinder Head cover Gasket " className="inpt" defaultChecked={engineCylinderHead} onClick={() => setEngineCylinderHead(!engineCylinderHead)} onChange={(e) => handleFailureComplaintsList(e, engineCylinderHead)} />
            <label className="lable"> Engine cylinder Head cover Gasket </label>
          </div>
          <div className="Engine_oil_filter_leak">
            <input type="checkbox" value="Engine Oil filter leak" className="inpt" defaultChecked={engineOilFilter} onClick={() => setEngineOilFilter(!engineOilFilter)} onChange={(e) => handleFailureComplaintsList(e, engineOilFilter)} />
            <label className="lable"> Engine Oil filter leak</label>
          </div>
          <div>
            <input type="checkbox" value={checked} className="inpt" defaultChecked={false} onChange={(e) => onChangeHandler(e)} />
            <label className="lable"> Others</label>
          </div>
          {checked && (
            <div className="Failure-reason-text-area">
              {/* <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a reason..."
                value={textNote}
                // onClick={() => onClickSaveText()}
                onChange={(e) => handleChangeText(e)}
              ></textarea> */}
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type to add a reason" rows="3"></textarea>
            </div>
          )}
          {/* <div className="complist">
          <button
            style={{
              border: "none",
              backgroundColor: "#ffffff",
              marginLeft: "2rem",
              marginTop: "0.5rem",
            }}
            onClick={HandleFailuerComplaint}
          >
            <u>
              <i style={{ color: "green", fontSize: "2rem" }}>
                ...Add Failure Reason
              </i>
            </u>
          </button>
        </div> */}

          <div>
            {engineChecked && (
              <div className="RootCauseReason">
                <RootCauseComplaintList />
              </div>
            )}
          </div>
          <div className="Buttons">
            <div className="Save_button">
              <button
                onClick={() => {
                  submitComplaint()
                }}
                className="Button-Save"
              >
                {" "}
                SAVE
              </button>
            </div>
            <div className="Cancel-Btn">
              <button
                onClick={() => {
                  cancelComplaint()
                }}
                className="Cancel-Button"
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div style={{ display: hidden }}>
        {failureComplaintsList.filter((x) => {
          return x === "Engine Oil filter leak" ? (
            showCause.current === true && (
              <div className="RootCauseReason">
                <RootCauseComplaintList submitComplaint={reasonSubmit} rootCauseCauseComplaintList={rootCauseCauseComplaintList} setRootCauseComplaint={setRootCauseComplaintList} loseBelt={loseBelt} setLoseBelt={setLoseBelt} noBelt={noBelt} setNoBelt={setNoBelt} setbeltIssue={setBeltIssue} beltIssue={beltIssue} changeBelt={changeBelt} setChangeBelt={setChangeBelt} clickHandler={clickHandler} />
              </div>
            )
          ) : (
            <></>
          )
        })}
      </div> */}
    </>
  )
}

export default FailureReason

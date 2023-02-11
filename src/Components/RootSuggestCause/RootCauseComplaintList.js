import React, { useRef, useState } from "react"
import "./RootCauseComplaintList.css"
import SuggestedRetification from "./SuggestedRectification"
function RootCauseComplaintList(props) {
  // const handleRootCauseComplaintList = (e, fail) => {
  //   if (!fail) {
  //     setRootCauseComplaint((prev) => prev.concat(e.target.value))
  //   } else {
  //     setRootCauseComplaint((prev) =>
  //       prev.filter((item) => {
  //         return e.target.value !== item
  //       })
  //     )
  //   }
  //   if (e.target.value === "lose Belt") {
  //     setHideElement(true)
  //     console.log(e.target.checked)
  //   }
  // }

  // const [rootChecked, setRootChecked] = useState(false)

  // const onClickHandler = () => {
  //   if (checked === true) setShowTextArea(true);
  // };

  // const onChangeHandler = (e) => {
  //   setRootChecked(e.target.checked)
  // }

  const [hideElement, setHideElement] = useState(false)
  const [textAreaHide, setTextAreaHide] = useState(false)

  const handleChange = () => {
    setHideElement(!hideElement)
  }

  const handleTextBox = () => {
    setTextAreaHide(!textAreaHide)
  }

  return (
    <>
      <div className="Probable-root-cause-Fail-reason">
        <h3>Probable Root Cause</h3>
        <div className="Engine_oil_Drain">
          <input type="checkbox" value="lose Belt" className="inpt" onChange={handleChange} />
          <label className="lable"> lose Belt </label>
        </div>
        <div className="Engine_oil_hose">
          <input type="checkbox" value="No Belt" className="inpt" />
          <label className="lable"> No Belt </label>
        </div>
        <div className="Engine_cylinder_head">
          <input type="checkbox" value=" Belt issue " className="inpt" />
          <label className="lable"> Belt issue </label>
        </div>
        <div className="Engine_oil_filter_leak">
          <input type="checkbox" value="Changing Belt" className="inpt" />
          <label className="lable"> Changing Belt</label>
        </div>
        <div>
          <input
            type="checkbox"
            // value={checked}
            className="inpt"
            // defaultChecked={false}
            // onClick={() => onClickHandler()}
            // onChange={(e) => onChangeHandler(e)}
            onChange={handleTextBox}
          />
          <p className="lable"> Others</p>
        </div>
        {textAreaHide && (
          <div className="Root-cause-text-area">
            {/* <textarea
              rows="8"
              cols="10"
              placeholder="Type to add a reason..."
              //  value={rootValue}
              // onClick={() => onClickSaveText()}
              // onChange={(e) => handleChangeRootText(e)}
            ></textarea> */}
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type to add a reason" rows="3"></textarea>
          </div>
        )}

        <div style={{ marginLeft: "0rem" }}>
          {/* <div
            style={{ position: "absolute", left: "18rem", bottom: "3.5rem" }}
          >
            <button
              onClick={() => {
                submitComplaint();
              }}
              className="Save_Button_btn"
            >
              {" "}
              SAVE
            </button>
          </div>
          <div style={{ paddingLeft: "6rem", marginTop: "10rem" }}>
            <button
              onClick={() => {
                cancelComplaint();
              }}
              className="Save_Button_btn"
            >
              {" "}
              Cancel
            </button>
          </div>
          . */}

          {hideElement && (
            <div className="Suggested-retification">
              <SuggestedRetification />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default RootCauseComplaintList

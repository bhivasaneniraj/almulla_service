import React, { useEffect, useState } from "react"
import "./SuggestedRectification.css"

function SuggestedRetification({ handleChangeRootText, rootValue, setCheckedCheckboxes, checkedCheckboxes, handleSaveComplaint }) {
  const [hide, setHide] = useState(false)
  const [suggestcomplaint, setSuggestComplaint] = useState(false)
  // const retificationData = [{ value: "Engine oil drain extention" }, { value: "Oil filter" }, { value: "Fuel Filter" }, { value: "Filter Drier" }, { value: "Other" }]

  // With this useState I wan't to collect the checked checkboxes
  // const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  // This is my handler method that gets triggered when a checkbox get's checked/unchecked
  // ..and toggles the state of the checkbox
  // const handleCheckboxChange = (e, data) => {
  //   const isChecked = checkedCheckboxes.some((checkedCheckbox) => checkedCheckbox.value === data.value)
  //   if (isChecked) {
  //     setCheckedCheckboxes(checkedCheckboxes.filter((checkedCheckbox) => checkedCheckbox.value !== data.value))
  //   } else {
  //     setCheckedCheckboxes(checkedCheckboxes.concat(data))
  //   }
  //   if (data.value === "other") {
  //     setHide(e.target.checked)
  //   }
  // }

  const handleSuggestedComplaintList = (e, fail) => {
    if (!fail) {
      setSuggestComplaint((prev) => prev.concat(e.target.value))
    } else {
      setSuggestComplaint((prev) =>
        prev.filter((item) => {
          return e.target.value !== item
        })
      )
    }
  }

  const handleTextArea = () => {
    setHide(!hide)
  }

  return (
    <div className="Suggested-retification-fail-reasons">
      <h3>Suggested Retification</h3>
      <div className="Suggested-retification">
        <input type="checkbox" value="Engine oil drain extention" className="inpt" />
        <label className="lable"> Engine oil drain extention </label>
      </div>
      <div className="Suggested-retification">
        <input type="checkbox" value="Oil filter" className="inpt" />
        <label className="lable"> Oil filter </label>
      </div>
      <div className="Suggested-retification">
        <input type="checkbox" value=" Fuel Filter" className="inpt" />
        <label className="lable"> Fuel Filter </label>
      </div>
      <div className="Suggested-retification">
        <input type="checkbox" value="Engine Clutch Replaced" className="inpt" />
        <label className="lable"> Engine Clutch Replaced </label>
      </div>
      <div className="Suggested-retification">
        <input onChange={handleTextArea} type="checkbox" value="Other" className="inpt" />
        <label className="lable">Other </label>
      </div>
      {hide && (
        <div className="Text-area">
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type to add a reason" rows="3"></textarea>
          {/* <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a reason..."
            value={rootValue}
            // onClick={() => onClickSaveText()}
            //  onChange={(e) => handleChangeRootText(e)}
          ></textarea> */}
        </div>
      )}
    </div>
  )
}

export default SuggestedRetification

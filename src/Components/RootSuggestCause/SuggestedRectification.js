import React from "react"
import "./SuggestedRectification.css"

function SuggestedRetification({ handleClickComplaint }) {
  return (
    <div className="btn_submit">
      <button onClick={handleClickComplaint}>...Add suggested retification</button>
    </div>
  )
}

export default SuggestedRetification

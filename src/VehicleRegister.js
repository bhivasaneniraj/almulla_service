import React from "react";
import { useState } from "react";
import "./Style.css";

function VehicleRegister() {
  const [text, settext] = useState();
  const [blackBg, setblackBg] = useState("none");
  const [faillist, setfaillist] = useState("none");
  const [omplistf, setomplistf] = useState("none");
  const [completSubmite, setcompletSubmite] = useState();
  const [omdemo, setomdemo] = useState([]);
  // const [Showhide, setShowhide] = useState("Hello World")

  // const showhie = () => {
  //       console.log(Showhide);
  // }

  const ktnum = (e) => {
    settext(e.target.value);
  };

  const submit = () => {
    console.log(text);
  };

  const complaint = () => {
    setblackBg("block");
    setomplistf("block");
  };
  const failure = () => {
    setblackBg("block");
    setfaillist("block");
  };
  var a = [];

  const demooo = (e) => {
    setcompletSubmite(e.target.value);
  };
  const helomk = (e) => {
    var value = e.target.value;
    var checked = e.target.checked;
    if (checked) {
      setomdemo([...omdemo, value]);
    } else {
      setomdemo(omdemo.filter((e) => e !== value));
    }
  };

  const compSubmite = () => {
    if (completSubmite != undefined) {
      console.log(completSubmite);
      setblackBg("none");
      setomplistf("none");
    }
  };

  const failuereSubmite = () => {
    if (omdemo.length === 0) {
    } else {
      setblackBg("none");
      setfaillist("none");
      console.log(omdemo);
    }
  };

  const options = [
    {
      label: "Send Report to Foremen",
      value: "Send Report to Foremen",
    },
    {
      label: "Assigned to Foreman - Shabbir",
      value: "Assigned to Foreman - Shabbir",
    },
    {
      label: "Assigned to Foreman - Hafizullah",
      value: "Assigned to Foreman - Hafizullah",
    },
    {
      label: "Assigned to Foreman - Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];


  const tabledata = [
    { UnitDetail: "Cooling Unit", KTNo: "17/30866", SerialNo: "VKA94286893",Chassis: " NK004102-F",Model:"CITIMAX-400",Date:"16.10.2022",WarrantyStart:" 13.06.2022",WarrantyEnd:" 16.06.2023"},
    { UnitDetail: "Tail Lift", KTNo: "17/30866", SerialNo: "21084589" ,Chassis:"9031793-N",Model:"ALU,24V,1500KG",Date:" 16.09.2022",WarrantyStart:" 27.06.2021",WarrantyEnd:" 26.06.2022"},
    
  ]


 var name = " 915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES";

  

  return (
    <>
      <div className="main_div">
        <div className="Page_two_logoAndLogOut">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Al_Mulla_Group_Logo.svg/1200px-Al_Mulla_Group_Logo.svg.png"
            alt="logo"
          />
          <div className="vl"></div>
          <h3> Welcome to Al Mulla Industries Service Mobile Solutions</h3>
          <br />
        </div>
        <div className="heading">
          <span>Anisur Rahman </span>

          <div className="Page_two_LogOut">
            <i class="fa-solid fa-arrow-right-from-bracket">
              <h1 className="head">Logout</h1>
            </i>
          </div>
        </div>
        <div className="Page_two_search_Chooes_box">
          <h2 className="bottom"> Vehicle Receiver </h2>
          <div className="page_two_middel_box">
            <div className="page_two_chooes">
              <div className="kt">
                <input
                  type="radio"
                  name="chooes"
                  checked
                  className="choesBTN"
                />
                <h2> KT Number </h2>
              </div>
              <div className="page_two_or">
                <p> O </p>
                <span></span>
                <p> R </p>
              </div>
              <div className="chassis">
                <input type="radio" name="chooes" className="choesBTN" />
                <h2> Chassis </h2>
              </div>
            </div>
            <div className="page_two_serchbar">
              <input type="text" placeholder="Enter number" onChange={ktnum} />
              <button onClick={submit}> Search </button>
            </div>
          </div>
        </div>
       
        <div className="hideshow">
          <div className="hideshow">
            <div className="page_two_table">
              <div className="dropdown">
                <form className="dpd">
                  <label className="labell">
                    <b>Location</b>{" "}
                  </label>

                  <select className="dpdbtn">
                    <option value=" Shuwaikh Van 1" className="op1">
                      {" "}
                      Shuwaikh Van 1
                    </option>

                    <option value="Shuwaikh Van 2" className="op2">
                      <b> Shuwaikh Van 2 </b>
                    </option>
                    <option value="Kuwait" className="op3">
                      {" "}
                      <b>Kuwait</b>
                    </option>
                    <option value="Shuwaikh Van 3" className="op4">
                      {" "}
                      <b>Shuwaikh Van 3</b>
                    </option>
                  </select>
                </form>
              </div>

              <span>
                {" "}
                Customer <p> {name} </p>
              </span>
              
              <table>
               
                  <tr>
                    <th>
                      {" "}
                      <input type="checkbox" className="chck1" />
                    </th>
                    <th>Unit Details</th>
                    <th>KT No.</th>
                    <th>Serial No.</th>
                    <th>Chassis</th>
                    <th>Model</th>
                    <th>Date</th>
                    <th>Warranty Start</th>
                    <th>Warranty End</th>
                  </tr>
              {tabledata.map((val,key) => {
                return(
                  <tr key={key} >
                    <th className="tab">
                      {" "}
                      <input type="checkbox" className="chck1" />
                    </th>
                    <td>{val.UnitDetail}</td>
                    <td>{val.KTNo}</td>
                    <td>{val.SerialNo} </td>
                    <td>{val.Chassis} </td>
                    <td> {val.Model} </td>
                    <td> {val.Date}</td>
                    <td className="tdata"> {val.WarrantyStart}</td>
                    <td className="tdata2"> {val.WarrantyEnd}</td>
                  </tr>

                )
              })}
                {/* {tabledata.map((val,key) => {
                  return(
                    <tr>
                    <th>
                      {" "}
                      <input type="checkbox" className="chck1" />
                    </th>
                    <td>Tail Lift</td>
                    <td>17/30866</td>
                    <td> 21084589</td>
                    <td>9031793-N</td>
                    <td>ALU,24V,1500KG</td>
                    <td> 16.09.2022</td>
                    <td className="tdata3">27.06.2021</td>
                    <td className="tdata4"> 26.06.2022</td>
                  </tr>
                  )
                })}
                 */}
                
              </table>

              <div className="tablecheckbox">
                <h2>
                  <b>Physical Remarks / Observation</b>{" "}
                </h2>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3pwWb17B4t0KZcwIY9bxpC2QfIGeDD7beQ&usqp=CAU"
                  alt="image"
                />

                <table className="checktable">
                  <tr>
                    <td className="scratches">
                      <b> 1. Scratches</b>
                    </td>
                    <td>
                      {" "}
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck2"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck2"
                        >
                          {" "}
                          Right
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck3"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck3"
                        >
                          Left
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck4"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck4"
                        >
                          Front
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck5"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck5"
                        >
                          Back
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>2. Glass Broken</b>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck6"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck6"
                        >
                          Driver
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck7"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck7"
                        >
                          Left
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck8"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck8"
                        >
                          Right
                        </label>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <b>3. Lights Broken</b>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck9"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck9"
                        >
                          Front
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck10"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck10"
                        >
                          Back
                        </label>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <b>4. Body Panel Condition</b>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck11"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck11"
                        >
                          Bulged
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck12"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck12"
                        >
                          Accident
                        </label>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <b>5. Body Accessories</b>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck13"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck13"
                        >
                          Lock <br />
                          Screen
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck14"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck14"
                        >
                          Door <br /> Broken
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck15"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck15"
                        >
                          Door Locks <br />
                          Damaged
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="tableDefaultCheck16"
                          className="click"
                        />
                        <label
                          class="custom-control-label"
                          for="tableDefaultCheck16"
                        >
                          Back Side <br />
                          Guard Damaged
                        </label>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="page_two_complaint_failure">
              <h2>Breakdown Analysis For Cooling Unit</h2>
              <div className="complaint_failure">
                <div className="complaint">
                  <p> Customer complaint </p>
                  <i class="fa-solid fa-plus" onClick={complaint}></i>
                </div>
                <div className="failure">
                  <p> Failure Reason </p>
                  <i class="fa-solid fa-plus" onClick={failure}></i>
                </div>
              </div>
            </div>

            <div className="page_two_bothcomp_fail_list">
              <div className="comp_list">
                <p>Periodic maintenance service </p>
              </div>
              <div className="fail_list">
                <p> Unit Service </p>
              </div>
            </div>
          </div>

          {/* custome complaint tail */}

          <div className="page_two_complaint_failure1">
            <h2>Breakdown Analysis For Tail Lift</h2>
            <div className="complaint_failure1">
              <div className="complaint1">
                <p> Customer complaint </p>
                <i class="fa-solid fa-plus" onClick={complaint}></i>
              </div>
              <div className="failure1">
                <p> Failure Reason </p>
                <i class="fa-solid fa-plus" onClick={failure}></i>
              </div>
            </div>
            <div className="page_two_bothcomp_fail_list1">
              <div className="comp_list1">
                <p> Engine Oil Leak </p>
              </div>
              <div className="fail_list1">
                <p> Engine Oil drain extension </p>
              </div>
            </div>
          </div>

          <div className="main_black_div" style={{ display: blackBg }}>
            <div
              className="page_two_complaint_list"
              onChange={demooo}
              style={{ display: omplistf }}
            >
              <h3>Customer Complaint</h3>
              <div className=" complist">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Periodic maintenance service"}
                />
                <p>Periodic maintenance service</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Engine oil leak"}
                />
                <p>Engine oil leak</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"An abnormal noise from Engine"}
                />
                <p>An abnormal noise from Engine</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Engine not cooling"}
                />
                <p>Engine not cooling</p>
              </div>
              <div className=" complist ">
                <input type="radio" name="compChoes" value={"Engine Hot"} />
                <p>Engine Hot</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Engine Not Staring"}
                />
                <p>Engine Not Staring</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Stand by not working & noisy"}
                />
                <p>Stand by not working & noisy</p>
              </div>
              <div className=" complist ">
                <input type="radio" name="compChoes" value={"UNIT AUX"} />
                <p>UNIT AUX</p>
              </div>
              <div className=" complist ">
                <input
                  type="radio"
                  name="compChoes"
                  value={"Compressor Stuck"}
                />
                <p>Compressor Stuck</p>
              </div>
              <button onClick={compSubmite}> Save </button>
            </div>
            <div
              className="page_two_Failure"
              onChange={helomk}
              style={{ display: faillist }}
            >
              <h3>Failure Reason</h3>
              <div className="failure_reason">
                <input
                  type="checkbox"
                  value="Engine oil Drain extension leak"
                />
                <label> Engine oil Drain extension leak </label>
              </div>
              <div className="failure_reason">
                <input type="checkbox" value="Engine oil Hose" />
                <label> Engine oil Hose </label>
              </div>
              <div className="failure_reason">
                <input
                  type="checkbox"
                  value="Engine cylinder Head cover Gasket "
                />
                <label> Engine cylinder Head cover Gasket </label>
              </div>
              <div className="failure_reason">
                <input type="checkbox" value="Engine Oil filter leak" />
                <label> Engine Oil filter leak</label>
              </div>
              <button onClick={failuereSubmite}>Submit</button>
            </div>
          </div>

          <div className="search_foreman">
            <select className="select">
              {options.map((option) => (
                <option value={option.value}>
                  <b>{option.label}</b>
                </option>
              ))}
            </select>
          </div>
          <div className="job_card">
            <button className="job_cardbtn">Create Job Card</button>
          </div>
        </div>
     =
      </div>
    </>
  );
}

export default VehicleRegister;

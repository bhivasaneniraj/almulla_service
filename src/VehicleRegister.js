import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CoolComplaints from "./Components/CoolComplaints";
import FailureReason from "./Components/FailureReason";
import TailComplaint from "./Components/TailComplaint";
import Pagetwocomponent from "./Components/pagetwocomponent";
import "./Style.css";
import PhysicalRemark from "./Components/PhysicalRemaks/PhysicalRemark";

function VehicleRegister() {
  const [text, settext] = useState();
  const [blackBg, setblackBg] = useState("none");
  const [faillist, setfaillist] = useState("none");
  const [omplistf, setomplistf] = useState("block");
  const [completSubmite, setcompletSubmite] = useState();
  const [omdemo, setomdemo] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [checkedAllBox, setCheckedAllBox] = useState(false);
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [searchTextInput, setSearchTextInput] = useState("");
  const [failureComplaints, SetFailureComplaints] = useState("");
  const [customerComplaint, setCustomerComplaint] = useState([]);
  const [failureComplaintsList, setFailureComplaintsList] = useState([]);
  const [TailLiftComplaint, setTailLiftComplaint] = useState([]);
  const [CustComplaint, setCustComplaint] = useState([]);
  const [pagetwocomplaintlist, setpagetwocomplainlist] = useState(false);
  const [msg, setMsg] = useState("")

function submit(){
  setMsg("")
}
  // const [Showhide, setShowhide] = useState("Hello World")

  // const showhie = () => {
  //       console.log(Showhide);
  // }

  const navigate = useNavigate;

  const handleCheckedAll = () => {
    if (!checkedAllBox) {
      setCheckedAllBox(true);
      setCheckedFirst(true);
      setCheckedSecond(true);
    } else {
      setCheckedAllBox(false);
      setCheckedFirst(false);
      setCheckedSecond(false);
    }
  };

  const handleCheckedFirst = () => {
    if (!checkedFirst && checkedSecond) {
      setCheckedAllBox(true);
    } else {
      setCheckedAllBox(false);
    }
    setCheckedFirst(!checkedFirst);
  };

  const handleCheckedSecond = () => {
    if (!checkedSecond && checkedFirst) {
      setCheckedAllBox(true);
    } else {
      setCheckedAllBox(false);
    }
    setCheckedSecond(!checkedSecond);
  };

  const ktnum = (e) => {
    settext(e.target.value);
    setSearchTextInput(e.target.value);
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
      setCustomerComplaint(completSubmite);
      setCustComplaint((preValue) => {
        return [...preValue, completSubmite];
      });
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
      label: "Foreman",
      value: "Foreman",
    },
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];

  const Select_option = [
    {
      id: 1,
      label1: " Shuwaikh Van 1",
      value: "Shuwaikh Van 1",
    },
    {
      id: 2,
      label2: "Shuwaikh Van 2",
      value: "Shuwaikh Van 2",
    },
  ];

  function Submit() {
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
        WarrantyEnd: "16.06.2022",
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
        WarrantyEnd: "26.06.2022",
      },
    ];
    if (searchTextInput === "17/30866") {
      setData(tabledata);
      setShow(true);
    } else {
      alert("Please Enter Correct Number");
    }
  }

  var name = " 915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES";

  const [checkedAll, setCheckedAll] = useState(false);

  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  /* ################################################ */

  /* #### TOGGLES checK STATE BASED ON inputName #### */

  /* ################################################ */

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };

      newState[inputName] = !prevState[inputName];

      return newState;
    });
  };

  /* ###################################################### */

  /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */

  /* ###################################################### */

  const selectAll = (value) => {
    setCheckedAll(value);

    setChecked((prevState) => {
      const newState = { ...prevState };

      for (const inputName in newState) {
        newState[inputName] = value;
      }

      return newState;
    });
  }; // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  /* ############################################# */

  /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */

  /* ############################################# */

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  const handleRadioButton = (e) => {
    SetFailureComplaints(e.target.value);
  };

  useEffect(() => {
    console.log(TailLiftComplaint, "failureListr");
  }, [TailLiftComplaint]);

  useEffect(() => {
    console.log(failureComplaintsList, "failureList");
  }, [failureComplaintsList]);

  const handlerAdioButton = (e) => {
    setCustComplaint(e.target.value);
  };
  useEffect(() => {
    console.log(CustComplaint, "CustomerComplaint");
  }, [CustComplaint]);

  return (
    <>
      <div className="main_div">
        <div className="Page_two_logoAndLogOut">
          <img src="/images/bitmap@2x.png" alt="example" />
          <div className="vl"></div>
          <h3>
            <b> Welcome to Al Mulla Industries Service Mobile Solutions</b>
          </h3>
          <br />
        </div>
        <div className="heading">
          <span>Anisur Rahman </span>

          <div className="Page_two_LogOut">
            <i>
              <img
                src="./images/shape.png"
                alt=""
                onClick={() => navigate("/")}
              />
            </i>
            <h1 className="head">
              <b>Logout</b>{" "}
            </h1>
          </div>
        </div>
        <div className="Page_two_search_Chooes_box">
          <h2 className="bottom">
            <b> Vehicle Receiver</b>{" "}
          </h2>
          <div className="page_two_middel_box">
            <div className="page_two_chooes">
              <div className="kt">
                <input
                  type="radio"
                  name="chooes"
                  checked
                  className="choesBTN"
                />
                <h2>
                  <b>KT Number</b>{" "}
                </h2>
              </div>
              <div className="page_two_or">
                <p> O </p>
                <span></span>
                <p> R </p>
              </div>
              <div className="chassis">
                <input type="radio" name="chooes" className="choesBTN" />
                <h2>
                  <b>Chassis</b>{" "}
                </h2>
              </div>
            </div>
            <div className="page_two_serchbar">
              <input type="text" placeholder="Enter number" onChange={ktnum} />
              <button onClick={Submit}> Search </button>
            </div>
          </div>
        </div>

        {show && (
          <div className="hideshow">
            <div className="hideshow">
              <div className="page_two_table">
                <b
                  style={{
                    fontSize: "16pt",
                    paddingLeft: "20px",
                    display: "flex",
                    paddingTop: "15px",
                  }}
                >
                  Location{" "}
                </b>
                <div
                  className="drop_down_value"
                  style={{
                    marginTop: "-33px",
                    /* padding-left: 59px; */
                    position: "relative",
                    left: "8%",
                    border: "1.5px solid rgba(200,200,200,0.5)",
                    height: "40pt",
                    width: "407px",
                  }}
                >
                  <select
                    className="Drop_select"
                    style={{
                      marginTop: "2%",
                      width: "96%",
                      border: "none",
                      paddingLeft: "78px",
                      fontSize: "16pt",
                      color: "rgb(0, 0, 0)",
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    {Select_option.map((option) => (
                      <option value={option.value}>
                        <b>{option.value}</b>
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="dropdown">
                  <form className="dpd">
                    <label className="labell">
                      <b>Location</b>{" "}
                    </label>

                    <select className="dpdbtn">
                    {Select_option.map((option) => (
                      <>

                    
                  <option value={option.value}>
                    <b>{option.label1}</b>
                     </option>
                  <option value={option.value}>
                    <b>{option.label2}</b>
                  </option>
                  </>
                  
                ))}
                    </select>
                  </form>
                </div> */}

                <span>
                  {" "}
                  Customer <p> {name} </p>
                </span>

                <table>
                  <tr>
                    <th>
                      {" "}
                      <input
                        type="checkbox"
                        className="chck1"
                        style={{
                          width: "24px",
                          height: "23px",
                          border: "1px solid rgb(29,249,80)",
                          cursor: "pointer",
                        }}
                        onChange={(event) => {
                          handleCheckedAll();
                          selectAll(event.target.checked);
                        }}
                        checked={checkedAllBox}
                      />
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

                  <tr>
                    <th className="tab">
                      {" "}
                      <input
                        type="checkbox"
                        name="id"
                        className="chck1"
                        style={{
                          width: "24px",
                          height: "23px",
                          border: "1px solid rgb(29,249,80)",
                          cursor: "pointer",
                        }}
                        onChange={() => {
                          toggleCheck(data[0].id);
                          handleCheckedFirst();
                        }}
                        checked={checkedFirst}
                      />
                    </th>
                    <td>{data[0].UnitDetail}</td>
                    <td>{data[0].KTNo}</td>
                    <td>{data[0].SerialNo} </td>
                    <td>{data[0].Chassis} </td>
                    <td> {data[0].Model} </td>
                    <td> {data[0].Date}</td>
                    <td className="tdata"> {data[0].WarrantyStart}</td>

                    <td className="tdata2"> {data[0].WarrantyEnd}</td>
                  </tr>

                  <tr>
                    <th className="tab">
                      {" "}
                      <input
                        type="checkbox"
                        name="id"
                        className="chck1"
                        style={{
                          width: "24px",
                          height: "23px",
                          border: "1px solid rgb(29,249,80)",
                          cursor: "pointer",
                        }}
                        onChange={() => {
                          toggleCheck(data[1].id);
                          handleCheckedSecond();
                        }}
                        checked={checkedSecond}
                      />
                    </th>
                    <td>{data[1].UnitDetail}</td>
                    <td>{data[1].KTNo}</td>
                    <td>{data[1].SerialNo} </td>
                    <td>{data[1].Chassis} </td>
                    <td> {data[1].Model} </td>
                    <td> {data[1].Date}</td>
                    <td className="tdata3"> {data[1].WarrantyStart}</td>

                    <td className="tdata4"> {data[1].WarrantyEnd}</td>
                  </tr>

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

                <PhysicalRemark />
              </div>

              {checkedFirst && (
                <CoolComplaints
                  complaint={complaint}
                  failure={failure}
                  handlerAdioButton={handlerAdioButton}
                  CustComplaint={CustComplaint}
                  failureComplaintsList={failureComplaintsList}
                  setCustComplaint={setCustComplaint}
                />
              )}
            </div>
            {/* <hr style={{height:"1pt", width:"1000pt",color:"rgb(8,136,38)"}} /> */}
            {/* custome complaint tail */}
            {checkedSecond && (
              <TailComplaint complaint={complaint} failure={failure} />
            )}
            <div className="main_black_div" style={{ display: blackBg }}>
              <div
                className="page_two_complaint_list"
                onChange={demooo}
                style={{ display: omplistf }}
              >
                <Pagetwocomponent
                  compSubmite={compSubmite}
                  failureComplaints={failureComplaints}
                  handleRadioButton={handleRadioButton}
                  failureComplaintsList={failureComplaintsList}
                  setFailureComplaintsList={setFailureComplaintsList}
                />
              </div>

              {/* <div className="complaints-container"> */}
              {/* <h3>Customer Complaint</h3>
          
              <div className="complist">
            
              <input
                  type="radio"
                  name="compChoes"
                 value={"Periodic maintenance service"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Periodic maintenance service</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                  value={"Engine oil leak"}
                  onChange={handleRadioButton}
                  
                
                />
                <p>Engine oil leak</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"An abnormal noise from Engine"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>An abnormal noise from Engine</p>
              </div>


              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"Engine not cooling"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Engine not cooling</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"Engine Hot"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Engine Hot</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"Engine Not Staring"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Engine Not Staring</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"Stand by not working & noisy"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Stand by not working & noisy</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"UNIT AUX"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>UNIT AUX</p>
              </div>

              <div className="complist">
              <input
                  type="radio"
                  name="compChoes"
                 value={"Compressor Stuck"}
                 onChange={handleRadioButton}
                  
                
                />
                <p>Compressor Stuck</p>
              </div>
               
              </div>
              {failureComplaints === 'Engine oil leak' && <FailureReason /> }
<button onClick={compSubmite}> Save</button>
              </div>  */}

              {/* <div
                className="page_two_Failure"
                onChange={helomk}
                style={{ display: faillist }}
              >
                <h3>Failure Reason</h3>
                <div className="failure_reason">
                  <input
                    type="checkbox"
                    value="Engine oil Drain extension leak"
                    onChange={handleFailureComplaintsList}
                  />
                  <label> Engine oil Drain extension leak </label>
                </div>
                <div className="failure_reason">
                  <input type="checkbox" value="Engine oil Hose" onChange={handleFailureComplaintsList} />
                  <label> Engine oil Hose </label>
                </div>
                <div className="failure_reason">
                  <input
                    type="checkbox"
                    value="Engine cylinder Head cover Gasket "
                    onChange={handleFailureComplaintsList}
                  />
                  <label> Engine cylinder Head cover Gasket </label>
                </div>
                <div className="failure_reason">
                  <input type="checkbox" value="Engine Oil filter leak" 
                    onChange={handleFailureComplaintsList}
                  />
                  <label> Engine Oil filter leak</label>
                </div>
                <button onClick={compSubmite}>Submit</button>
              </div> */}
            </div>
            <div className="drop_down_value">
              <b>Send Report To - </b>
              <select
                className="Drop_select"
                style={{
                  marginTop: "6%",

                  width: "60%",

                  border: "none",

                  backgroundcolor: "rgb(226,245,231)",

                  paddingLeft: "15px",

                  fontSize: "16pt",

                  color: "rgb(0,0,0)",

                  fontFamily: "Roboto-Bold",
                }}
              >
                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>
            {/* [7:44 PM] Shubham Rai
            {error && (
              <ErrorModel
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
              />
            )} */}
            <div className="job_card">
              <button className="job_cardbtn" onClick={submit}>
                <b>Create Job Card</b>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default VehicleRegister;

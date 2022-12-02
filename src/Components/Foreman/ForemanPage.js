import React, { useEffect, useState } from "react";

import ForemTailComponent from "./ForemanTailComponent";
import ForemanCoolComplaint from "./ForemanCoolComplaint";
import PhysicalRemarks from "../PhysicalRemaks/PhysicalRemark";
import Pagetwocomponent from "../pagetwocomponent";
import "../../foreman.css";
import ErrorModel from "../ThankYouFolder/Error";

import { useNavigate } from "react-router-dom";

function Foremanpage() {
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
  const [details, setDetails] = useState([]);
  // const [pagetwocomplaintlist, setpagetwocomplainlist] = useState(false);
  // const [Showhide, setShowhide] = useState("Hello World")
  const [msg, setMsg] = useState("");

  function submit() {
    setMsg({
      title: "Sending..",
      message: "Thank You!!",
    });
  }
  const errorHandler = () => {
    setMsg("");
  };

  // const showhie = () => {
  //       console.log(Showhide);
  // }

  const Nav = useNavigate;

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
        WarrantyStart: "15.06.2023",
        WarrantyEnd: "16.06.2023",
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

    setDetails(tabledata);

    if (searchTextInput === "17/30866") {
      setData(tabledata);
      setShow(true);
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
    console.log(failureComplaintsList, "failureList");
  }, [failureComplaintsList]);

  const handleFailureComplaintsList = (e) => {
    if (e.target.checked) {
      setFailureComplaintsList((prev) => prev.concat(e.target.value));
    } else {
      setFailureComplaintsList((prev) =>
        prev.filter((item) => {
          return item !== e.target.value;
        })
      );
    }
  };

  const getColor = (UnitDetail) => {
    if (UnitDetail.length === 0) return "red";
    if (UnitDetail.length < 10) return "blue";
    return "";
  };

  const coolComponentData = [
    {
      id: 1,
      customerComplaint: "Engine oil leak",
      failureReason: "Engine oil Drain extension leak",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
    {
      id: 2,
      // customerComplaint: "Engine oil leak",
      failureReason: "Engine oil Hose ",
      probableRootCause: "Derive belt loose",
      suggestedRectifiction: "Motor Replacement",
    },
  ];

  const datas = [
    {
      id: 1,
      customerComplaint: "Periodic maintenance  service ",
      failureReason: "Unit Service",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
    {
      id: 2,
      customerComplaint: "Periodic maintenance  service ",
      failureReason: "Unit Service",
      probableRootCause: "Derive belt expand",
      suggestedRectifiction: "Belt Replacement",
    },
  ];

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
  ];
  var Referenceno = "300021572";
  var location = "Shuwaikh Van 1";
  var refer = "915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES";
  return (
    <>
      <div className="main">
        <div className="foreman">
          <img src="/images/bitmap@2x.png" alt="logo" />
          <div className="v2"></div>
          <h3>
            <b>Welcome to Al Mulla Industries Service Mobile Solutions</b>{" "}
          </h3>
        </div>
        <div className="header">
          <span>Shabbir </span>

          <div className="Logout">
            <i>
              <img className="Logout_Butoon"
                src="./images/shape.png"
                alt=""
                onClick={() => (window.location.href = "/")}
              />
            </i>

            <h1 className="head1">
              <b>Logout</b>{" "}
            </h1>
          </div>
        </div>
        <div className="CardReference">
          <h2 className="card_ref">
            <b>Job Card Reference Number - {Referenceno}</b>{" "}
            <div className="loc">
              <b>
                {" "}
                Location: <span>{location}</span>
              </b>
            </div>
          </h2>

          {/* <h3 className="loc">
            <b>
              {" "}
              Location: <span>{location}</span>
            </b>{" "}
          </h3> */}
        </div>

        <b>
          {" "}
          <p className="paragraph">Customer {refer} </p>{" "}
        </b>
        <div className="datatable">
          {/* <table className="tabular">
            <tr className="column">
              <th>Unit Details</th>
              <th>KT No.</th>
              <th>Serial No.</th>
              <th>Chassis</th>
              <th>Model</th>
              <th>Date</th>
              <th>
                Warranty <br />
                Start
              </th>
              <th>
                Warranty <br />
                End
              </th>
            </tr>

            {tabdata.map((val, key) => {
              return (
                <tr key={val.id}>
                    <td>{val.UnitDetail}</td>
                    <td>{val.KTNo}</td>
                    <td>{val.SerialNo}</td>
                    <td>{val.Chassis}</td>
                    <td>{val.Model}</td>
                    <td>{val.Date}</td>
                    <td className="start ">{val.WarrantyStart}</td>
                    <td className="End">{val.WarrantyEnd}</td>
                </tr>
              );
            })}
          </table> */}
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
        <div className="tablecheckbox">
          <h2>
            <b>Physical Remarks / Observation</b>{" "}
          </h2>
          <img src="./images/Truck@2x.png" alt="image" />

          <div className="checkboxes">
            <table className="checktable">
              <tr>
                <td className="scratches">
                  <b> 1.Scratches</b>
                </td>
                <td>
                  {" "}
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck2"
                    className="click"
                    />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck2"
                    className="Right"
                  >
                    {" "}
                    Right
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck3"
                    className="click"
                    style={{ width: "20px" }}
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck3"
                    className="Left"
                  >
                    Left
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck4"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck4"
                    className="Front"
                  >
                    Front
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck5"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck5"
                    className="Back"
                  >
                    <p>Back</p>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="scratches">
                  <b> 2. Glass Broken</b>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck6"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck6"
                    className="Driver"
                  >
                    Driver
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck7"
                    className="click"
                   />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck7"
                    className="Left2"
                  >
                    Left
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck8"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck8"
                    className="Right2"
                  >
                    Right
                  </label>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="scratches">
                  <b> 3. Lights Broken</b>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck9"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck9"
                    className="Front2"
                  >
                    Front
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck10"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck10"
                    className="Back2"
                  >
                    Back
                  </label>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="scratches">
                  <b> 4. Body Panel Condition</b>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck11"
                    className="click"
                   />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck11"
                    className="Bulged"
                  >
                    Bulged
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck12"
                    className="click"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck12"
                    className="Accident"
                  >
                    Accident
                  </label>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="scratches">
                  <b> 5. Body Accessories</b>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck13"
                    className="click1"
                 />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck13"
                    className="Lock_Screen"
                  >
                    Lock <br />
                    <p> Screen</p>
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck14"
                    className="click1"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck14"
                    className="Door_Broken"
                  >
                    Door <br /> <p> Broken</p>
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck15"
                    className="click1"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck15"
                    className="Door_Lock"
                  >
                    Door Locks <br />
                    <p className="damaged">Damaged</p>
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="tableDefaultCheck16"
                    className="click1"
                  />
                  <label
                    class="custom-control-label"
                    for="tableDefaultCheck16"
                    className="Back_Guard"
                  >
                    Back Side <br />
                    <p className="guard"> Guard Damaged</p>
                  </label>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "9rem" }}>
        <ForemanCoolComplaint
          datas={coolComponentData}
          complaint={complaint}
          failure={failure}
        />
      </div>
      <ForemTailComponent datas={datas} />

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
          />
        </div>
      </div>
      {msg && (
        <ErrorModel
          title={msg.title}
          message={msg.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="btn_div mt-5">
        <div className="Card_job">
          <button className="job_cardbtn_btn" onClick={submit}>
            <b>Send</b>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Foremanpage;

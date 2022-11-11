import React from "react";

import "./foreman.css";

function Foremanview() {


  // const [first, setfirst] = useState();
  // const [Blackbg, setBlackbg] = useState("none");
  // const [Failist, setFailist] = useState("none");
  // const [list, setlist] = useState("none");
  // const [CompleteSubmit, setCompleteSubmit] = useState("none");
  // const [Demo, setDemo] = useState("none");

  // const kTnum = (e) => {
  //   setfirst(e.target.value);
  // };

  // const Submit = () => {
  //   console.log(first);
  // };

  // const Complaint = () => {
  //   setBlackbg("block");
  //   setlist("block");
  // };


  // const Failure = () => {
  //   setBlackbg("block");
  //   setFailist("block");
  // };

  // var a = [];

  // const Demooo = (e) => {
  //   setCompleteSubmit(e.target.value);
  // };


  // const hello = (e) => {
  //   var value = e.target.value;
  //   var checked = e.target.checked;
  //   if (checked) {
  //     setDemo([...Demo, value]);
  //   } else {
  //     setDemo(Demo.filter((e) => e !== value));
  //   }
  // };


  // const CompSubmite = () => {
  //   if (CompleteSubmit != undefined) {
  //     console.log(CompleteSubmit);
  //     setBlackbg("none");
  //     setlist("none");
  //   }
  // };


  // const FailuereSubmite = () => {
  //   if (Demo.length === 0) {
  //   } else {
  //     setBlackbg("none");
  //     setlist("none");
  //     console.log(Demo);
  //   }
  // };

  const tabdata = [
    {
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
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Al_Mulla_Group_Logo.svg/1200px-Al_Mulla_Group_Logo.svg.png"
            alt="logo"
          />
          <div className="v2"></div>
          <h3> Welcome to Al Mulla Industries Service Mobile Solutions</h3>
        </div>
        <div className="header">
          <span>Shabbir </span>

          <div className="Logout">
            <i class="fa-solid fa-arrow-right-from-bracket">
              <h1 className="head1">
                <b>Logout</b>{" "}
              </h1>
            </i>
          </div>
        </div>
        <div className="CardReference">
          <h3>
            <b>Job Card Reference Number - {Referenceno}</b>{" "}
          </h3>

          <h3 className="loc">
            <b>
              {" "}
              Location: <span>{location}</span>
            </b>{" "}
          </h3>

          <h3 className="line"></h3>
        </div>

        <b>
          {" "}
          <p className="paragraph">Customer {refer} </p>{" "}
        </b>
        <div className="datatable">
          <table className="tabular">
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
                <tr key={key}>
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
          </table>
        </div>
        <div className="chckbox">
          <h2>
            <b>Physical Remarks / Observation</b>{" "}
          </h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3pwWb17B4t0KZcwIY9bxpC2QfIGeDD7beQ&usqp=CAU"
            alt="image"
          />

          <table className="checktable_class">
            <tr>
              <td className="scratches_class">
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
                  <label class="custom-control-label" for="tableDefaultCheck2">
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
                  <label class="custom-control-label" for="tableDefaultCheck3">
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
                  <label class="custom-control-label" for="tableDefaultCheck4">
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
                  <label class="custom-control-label" for="tableDefaultCheck5">
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
                  <label class="custom-control-label" for="tableDefaultCheck6">
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
                  <label class="custom-control-label" for="tableDefaultCheck7">
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
                  <label class="custom-control-label" for="tableDefaultCheck8">
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
                  <label class="custom-control-label" for="tableDefaultCheck9">
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
                  <label class="custom-control-label" for="tableDefaultCheck10">
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
                  <label class="custom-control-label" for="tableDefaultCheck11">
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
                  <label class="custom-control-label" for="tableDefaultCheck12">
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
                  <label class="custom-control-label" for="tableDefaultCheck13">
                    Lock <br />
                    <p className="screen"> Screen</p>
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
                  <label class="custom-control-label" for="tableDefaultCheck14">
                    Door <br /> <p className="Broken"> Broken</p>
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
                  <label class="custom-control-label" for="tableDefaultCheck15">
                    Door Locks <br />
                    <p className="damaged">Damaged</p>
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
                  <label class="custom-control-label" for="tableDefaultCheck16">
                    Back Side <br />
                    <p className="guard"> Guard Damaged</p>
                  </label>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="Break_cool_unit">
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
      </div>
    </>
  );
}

export default Foremanview;

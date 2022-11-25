import React from 'react'
import './PhysicalRemarks.css'

function PhysicalRemark() {
  return (
    <>
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
                            style={{width:"20px"}}
                           
                          />
                        
                        <label  class="custom-control-label"
                            for="tableDefaultCheck2"
                            className='Right'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck3"
                            className='Left'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck4"
                            className='Front'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck5"
                            className='Back'
                          >
                           Back 
                          </label>
                     
                      </td>
                    </tr>
                    <tr>
                      <td className="scratches">
                     <b>   2. Glass Broken</b>
                      </td>
                      <td>
                      
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="tableDefaultCheck6"
                            className="click"
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck6"
                            className='Driver'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck7"
                            className='Left2'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck8"
                            className='Right2'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck9"
                            className='Front2'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck10"
                            className='Back2'
                          >
                            Back
                          </label>
                      
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="scratches">
                      <b>  4. Body Panel Condition</b>
                      </td>
                      <td>
                      
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="tableDefaultCheck11"
                            className="click"
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck11"
                            className='Bulged'
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
                            style={{width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck12"
                            className='Accident'
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
                            className="click"
                            style={{marginTop:"-16px",width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck13"
                            className='Lock_Screen'
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
                            className="click"
                            style={{marginTop:"-16px",width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck14"
                            className='Door_Broken'
                          >
                            Door <br /> <p> Broken</p>
                          </label>
                      
                      </td>
                      <td>
                       
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="tableDefaultCheck15"
                            className="click"
                            style={{marginTop:"-16px",width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck15"
                            className='Door_Lock'
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
                            className="click"
                            style={{marginTop:"-16px",width:"20px"}}
                          />
                          <label
                            class="custom-control-label"
                            for="tableDefaultCheck16"
                            className='Back_Guard'
                            
                          >
                            Back Side <br />
                            <p className="guard"> Guard Damaged</p>
                          </label>
                      
                      </td>
                    </tr>
                  </table>
                  </div>

                </div>
    </>
  )
}

export default PhysicalRemark
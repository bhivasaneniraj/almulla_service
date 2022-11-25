import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import VehicleRegister from "./VehicleRegister";
import Formanv from "./Components/Foremanv";
import Technician from "./Components/Technician/Technician";
import TechnicianView from "./TechnicianView";
import 'bootstrap/dist/css/bootstrap.min.css';

import Foremanpage from "./Components/Foreman/ForemanPage";
import Manager from "./Components/Manager/Manager";
import ManagerView from "./Components/Manager/ManagerView";


function App() {



  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/Vehicleregister" element={<VehicleRegister />} />
    <Route path="/Foremanv" element={<Formanv/>} />
  <Route path ="ForemanPage" element={<Foremanpage/>} />
    <Route path="/technicianview" element={<TechnicianView/>} />
    <Route path="/technicianpage" element={<Technician/>} />
    <Route path="/Managerpage" element={<Manager/>} />
    <Route path="/ManagerView" element={<ManagerView/>} />
  </Routes>
</Router>
   </>
  );
}

export default App;

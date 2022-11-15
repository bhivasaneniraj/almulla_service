import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import VehicleRegister from "./VehicleRegister";
import Formanv from "./Components/Foremanv";
import Foremanview from "./Foremanview";
import TechnicianView from "./TechnicianView";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/Vehicleregister" element={<VehicleRegister />} />
    <Route path="/Foremanv" element={<Formanv/>} />
    <Route path="/Foremanpage" element={<Foremanview/>} />
    <Route path="/technicianview" element={<TechnicianView/>} />
  </Routes>
</Router>
   </>
  );
}

export default App;

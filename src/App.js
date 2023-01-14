import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/LoginPage/Login"
import "./Components/LoginPage/login.css"
import VehicleRegister from "./Components/MainComponent/VehicleRegister"
import Foremanv from "./Components/Foreman/Foremanv"
import Technician from "./Components/Technician/Technician"
import TechnicianView from "./Components/Technician/TechnicianView"
import "bootstrap/dist/css/bootstrap.min.css"
import Foremanpage from "./Components/Foreman/ForemanPage"
import ForemanAssigned from "./Components/Foreman/ForemanAssigned"
import ForemanCompleted from "./Components/Foreman/ForemanCompleted"
import Manager from "./Components/Manager/Manager"
import ManagerView from "./Components/Manager/ManagerView"
import ManagerAssigned from "./Components/Manager/ManagerAssigned"
import ManagerCompleted from "./Components/Manager/ManagerCompleted"
import Register from "./Components/Regsiteration/Register"
import ForgetPass from "./Components/Regsiteration/ForgetPass"
import SupervisorButton from "./Components/PendingJobs/SupervisorButton"
import ForemanJobsButton from "./Components/PendingJobs/ForemanJobsButton"
import TechnicainJobsButtons from "./Components/PendingJobs/TechnicainJobsButtons"
import TechnicainAssigned from "./Components/Technician/TechnicianAssigned"
import TechnicianWorkInProgress from "./Components/Technician/TechnicinaWorkInProgress"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Vehicleregister" element={<VehicleRegister />} />
          <Route path="/Foremanv" element={<Foremanv />} />
          <Route path="ForemanPage" element={<Foremanpage />} />
          <Route path="/technicianview" element={<TechnicianView />} />
          <Route path="/technicianpage" element={<Technician />} />
          <Route path="/SupervisorPage" element={<Manager />} />
          <Route path="/SupervisorProgressJob" element={<ManagerView />} />
          <Route path="/SupervisorAssignedJob" element={<ManagerAssigned />} />
          <Route path="/SupervisorCompletedJob" element={<ManagerCompleted />} />
          <Route path="/Registration" element={<Register />} />
          <Route path="/passwordReset" element={<ForgetPass />} />
          <Route path="/Supervisorjobs" element={<SupervisorButton />} />
          <Route path="/ForemanJobs" element={<ForemanJobsButton />} />
          <Route path="/ForemanAssignedJob" element={<ForemanAssigned />} />
          <Route path="/ForemanCompletedJob" element={<ForemanCompleted />} />
          <Route path="/ForemanProgressJob" element={<Foremanv />} />
          <Route path="/TechnicianJobs" element={<TechnicainJobsButtons />} />
          <Route path="/TechnicianAssignedJob" element={<TechnicainAssigned />} />
          <Route path="/TechnicianProgressJob" element={<TechnicianWorkInProgress />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

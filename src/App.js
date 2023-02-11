import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/LoginPage/Login"
import "./Components/LoginPage/login.css"
import VehicleRegister from "./Components/MainComponent/VehicleRegister"
import ForemanProgress from "./Components/Foreman/ForemanProgress"
import Technician from "./Components/Technician/Technician"
import TechnicianView from "./Components/Technician/TechnicianView"
import "bootstrap/dist/css/bootstrap.min.css"
import Foremanpage from "./Components/Foreman/ForemanPage"
import ForemanAssigned from "./Components/Foreman/ForemanAssigned"
import ForemanCompleted from "./Components/Foreman/ForemanCompleted"
import Supervisor from "./Components/SupervisorPage/Supervisor"
import SupervisorProgress from "./Components/SupervisorPage/SupervisorProgress"
import SupervisorAssigned from "./Components/SupervisorPage/SupervisorAssigned"
import SupervisorCompleted from "./Components/SupervisorPage/SupervisorCompleted"
import Register from "./Components/Regsiteration/Register"
import ForgetPass from "./Components/Regsiteration/ForgetPass"
import SupervisorButton from "./Components/PendingJobs/SupervisorButton"
import ForemanJobsButton from "./Components/PendingJobs/ForemanJobsButton"
import TechnicainJobsButtons from "./Components/PendingJobs/TechnicainJobsButtons"
import TechnicainAssigned from "./Components/Technician/TechnicianAssigned"
import TechnicianWorkInProgress from "./Components/Technician/TechnicinaWorkInProgress"
import ManagerViewJobButton from "./Components/PendingJobs/ManagerViewJobButton"
import ManagerCompletedJob from "./Components/ManagerComponents/ManagerCompletedJob"
import ManagerProgressJob from "./Components/ManagerComponents/ManagerProgressJob"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Vehicleregister" element={<VehicleRegister />} />
          <Route path="/ForemanProgressJob" element={<ForemanProgress />} />
          <Route path="ForemanPage" element={<Foremanpage />} />
          <Route path="/technicianview" element={<TechnicianView />} />
          <Route path="/technicianpage" element={<Technician />} />
          <Route path="/SupervisorPage" element={<Supervisor />} />
          <Route path="/SupervisorProgressJob" element={<SupervisorProgress />} />
          <Route path="/SupervisorAssignedJob" element={<SupervisorAssigned />} />
          <Route path="/SupervisorCompletedJob" element={<SupervisorCompleted />} />
          <Route path="/Registration" element={<Register />} />
          <Route path="/passwordReset" element={<ForgetPass />} />
          <Route path="/SupervisorJobs" element={<SupervisorButton />} />
          <Route path="/ForemanJobs" element={<ForemanJobsButton />} />
          <Route path="/ForemanAssignedJob" element={<ForemanAssigned />} />
          <Route path="/ForemanCompletedJob" element={<ForemanCompleted />} />
          <Route path="/TechnicianJobs" element={<TechnicainJobsButtons />} />
          <Route path="/TechnicianAssignedJob" element={<TechnicainAssigned />} />
          <Route path="/TechnicianProgressJob" element={<TechnicianWorkInProgress />} />
          <Route path="/ManagerViewJob" element={<ManagerViewJobButton />} />
          <Route path="/ManagerCompletedJob" element={<ManagerCompletedJob />} />
          <Route path="/ManagerProgressJob" element={<ManagerProgressJob />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

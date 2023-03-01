import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import EmployeeProfilePage from "./Pages/EmployeeProfilePage";
import EmployeeRegistrationPage from "./Pages/EmployeeRegistrationPage";
import HomePage from "./Pages/HomePage";
import AdminLogin from './Components/AdminLogin/AdminLogin'

function App() {
  return (
    <div className="">
      <NavbarComponent/>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/profile/:id'  element={<EmployeeProfilePage/>}/>
        <Route path='/admin'  element={<AdminLogin/>}/>
        <Route path='/registration'  element={<EmployeeRegistrationPage/>}/>
        


      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

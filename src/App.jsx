
import Login from "./Pages/Login";
import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
     <Router>
        <Routes>
             <Route path="/" element={<Login/>} />
             <Route path="/signup" element={<SignUp/>} />
             <Route path="/dashboard" 
             element = {

                  <DashBoard/>
              
             }>
             

             </Route>
        </Routes>
     </Router>
  )
 ;
}

export default App;

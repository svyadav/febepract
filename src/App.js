import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<Navigate to={"/login"}/>} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App;

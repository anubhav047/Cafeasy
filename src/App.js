import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Userselect from './components/Userselect';
import Customerlogin from './components/Customerlogin';
import Stafflogin from './components/Stafflogin';
import Customerhome from './components/Customerhome';
import Customercart from './components/Customercart';
import Customerseat from './components/Customerseat';


function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Userselect/>}></Route>
       <Route exact path="/customerlogin" element={<Customerlogin/>}></Route>
       <Route exact path="/stafflogin" element={<Stafflogin/>}></Route>
       <Route exact path="/customerhome" element={<Customerhome/>}></Route>
       <Route exact path="/customercart" element={<Customercart/>}></Route>
       <Route exact path="/customerseat" element={<Customerseat/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

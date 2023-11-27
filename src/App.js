import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Userselect from './components/Userselect';
import Customerlogin from './components/Customerlogin';
import Stafflogin from './components/Stafflogin';
import Customerhome from './components/Customerhome';
import Customercart from './components/Customercart';
import Customerseat from './components/Customerseat';
import Staffseat from './components/Staffseat';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/ContextReducer';
import Staffhome from './components/Staffhome';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Userselect/>}></Route>
       <Route exact path="/customerlogin" element={<Customerlogin/>}></Route>
       <Route exact path="/stafflogin" element={<Stafflogin/>}></Route>
       <Route exact path="/customerhome" element={<Customerhome/>}></Route>
       <Route exact path="/staffhome" element={<Staffhome/>}></Route>
       <Route exact path="/customercart" element={<Customercart/>}></Route>
       <Route exact path="/customerseat" element={<Customerseat/>}></Route>
       <Route exact path="/staffseat" element={<Staffseat/>}></Route>
       </Routes>
       <ToastContainer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

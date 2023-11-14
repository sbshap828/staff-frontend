import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
// import EmpDetail from "./screens/EmpDetail.jsx";
import EmpMembs from "./screens/EmpMembs.jsx";
// import EmpDetailCreate from "./screens/EmpDetailCreate.jsx/index.js";

// import EmpDetailEdit from "./screens/EmpDetailEdit.jsx/index.js";
// import { as Router} from "react-router-dom";
// import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  // const [EmpDetail, setEmpDetail] = useState({})
   console.log("Hello")
  return (
    <div className="App">
      {/* <Router> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/EmpDetail" element={<EmpDetail empdetail={EmpDetail}/>} /> */}
         <Route path="/EmpMembs" element={<EmpMembs />} />
        {/* <Route path="/EmpMembs" element={<empdetailcreate/>} />
      */}
      
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App


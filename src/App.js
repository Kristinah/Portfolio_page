import Home from "./Pages/Home";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Stamped from "./Pages/Stamped";
import MasterThesis from "./Pages/MasterThesis";

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stamped' element={<Stamped/>}/>
        <Route path="/master-thesis" element={<MasterThesis />} />
      </Routes>
      </Router>
    </div>
  );
}

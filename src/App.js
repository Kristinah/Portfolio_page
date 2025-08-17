import Home from "./Pages/Home";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Stamped from "./Pages/Stamped";


export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route/>
        <Route path='/' element={<Home/>} />
        <Route path='/stamped' element={<Stamped/>}/>
        <Route/>
      </Routes>
      </Router>
    </div>
  );
}

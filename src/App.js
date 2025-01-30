import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom'
import Stamped from "./Pages/Stamped";


export default function App() {
  return (
    <div>
      <Routes>
        <Route/>
        <Route path='/' element={<Home/>} />
        <Route path='/stamped' element={<Stamped/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

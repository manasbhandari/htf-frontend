import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Experts from "./pages/Experts";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Landing />} />
        <Route path="/Experts" element={<Experts />} />
        <Route path="/forms" element={<Form/>} />
        
       
        
      </Routes>
    </>
  );
}

export default App;

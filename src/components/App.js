import {Route, Routes } from "react-router-dom";
import { Contact, Help } from "../components/Footer";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;

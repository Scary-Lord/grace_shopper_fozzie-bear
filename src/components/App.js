import {Route, Routes } from "react-router-dom";
import Contact from "./components/Footer/Footer";
import Help from "./components/Footer/Footer";

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

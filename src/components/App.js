import {Route, Routes } from "react-router-dom";
import { Contact, Help } from "../components/Footer";
import { CartPage, Confirmation } from "./checkout";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;

import {Route, Routes } from "react-router-dom";
import { Contact, Help } from "../components/Footer";
import { CartPage, Confirmation } from "./checkout";
// import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import CreateProfile from "./CreateProfile/CreateProfile";
// import Footer from "../components/Footer/Footer";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path='/user/addUser' element={<CreateProfile />} />
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;

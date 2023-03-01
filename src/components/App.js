import {Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Products from "./Products/Products";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import CreateProfile from "./CreateProfile/CreateProfile";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/createprofile" element={<CreateProfile />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

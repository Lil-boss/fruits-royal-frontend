import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ManageInventory from "./Pages/manageInventory/ManageInventory";
import About from "./Pages/About/About"
import Blogs from "./Pages/Blogs/Blogs"
import Contact from "./Pages/Contact/Contact"
import AddItem from "./components/AddItem/AddItem";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/addInventory' element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;

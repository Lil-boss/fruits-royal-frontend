import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ManageInventory from "./Pages/manageInventory/ManageInventory";
import About from "./Pages/About/About"
import Blogs from "./Pages/Blogs/Blogs"
import Contact from "./Pages/Contact/Contact"
import AddItem from "./components/AddItem/AddItem";
import ManageItem from "./components/ManageItem/ManageItem";
import Modal from "./components/Modal/Modal"
import MyItem from "./components/MyItem/MyItem";
import Register from "./Pages/auth/Register/Register";
import Login from "./Pages/auth/Login/Login";
import RequireAuth from "./Pages/auth/RequiredAuth/RequireAuth"
import ItemModal from "./components/ItemModal/ItemModal"
import UpdateModal from "./components/UpdateModal/UpdateModal"
import ShowModal from "./components/ShowModal/ShowModal"
import { Toaster } from "react-hot-toast";
import ForgetPassword from "./Pages/auth/ForgetPassword/ForgetPassword";
import NotFound from "./Pages/Extra/NotFound/NotFound";


function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>} />
        <Route path="/inventory/:productId" element={<RequireAuth>{
          <Modal />
        }
        </RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/addInventory' element={<AddItem />} />
        <Route path='/manageitem' element={<ManageItem />} />
        <Route path='/myitem' element={<MyItem />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/item/:id' element={<ItemModal />} />
        <Route path='/update/:id' element={<UpdateModal />} />
        <Route path='/show/:id' element={<ShowModal />} />
        <Route path='/forgetpass' element={<ForgetPassword />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;

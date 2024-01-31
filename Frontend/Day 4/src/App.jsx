import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/Aboutus"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import './App.css';
import Register from "./pages/Register"
import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import YourProfile from "./pages/YourProfile"
import YourWishlist from "./pages/YourWishlist"
import AdminDashboard from "./pages/AdminDashboard"
import ContactUs from "./pages/ContactUs"
import BoatHouse from "./pages/BoatHouse"
import Statistics from "./pages/Statistics"
import AdminAllUsers from "./pages/AdminAllUsers"
import AdminAllBoats from "./pages/AdminAllBoats"
import AdminViewOfUser from "./pages/AdminViewOfUser"
import AdminViewOfBoatHouse from "./pages/AdminViewOfBoatHouse"

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(true);
  const [userOrAdmin, setUserOrAdmin]=useState("admin");
  return (
    <div className="entire">
      <BrowserRouter>
        <NavBar login={isLoggedIn} userOrAdmin={userOrAdmin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/signin" element={<Login />}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/boat-house" element={<BoatHouse/>}/>

          <Route path="/dashboard/your-profile" element={<Dashboard rightContent={<YourProfile/>}/>}/>
          <Route path="/dashboard/your-stays" element={<Dashboard rightContent={<YourProfile/>}/>}/>
          <Route path="/dashboard/your-wishlist" element={<Dashboard rightContent={<YourWishlist/>}/>}/>

          {/* <Route path="/dashboard/add-boat-house" element={<AdminDashboard rightContent={<AddBoatHouse/>}/>}/>
          <Route path="/dashboard/edit-boat-house" element={<AdminDashboard rightContent={<AddBoatHouse/>}/>}/>
          <Route path="/dashboard/delete-boat-house" element={<AdminDashboard rightContent={<DeleteBoatHouse/>}/>}/> */}

          <Route path="/admin-dashboard/statistics" element={<AdminDashboard rightContent={<Statistics/>}/>}/>
          <Route path="/admin-dashboard/all-users" element={<AdminDashboard rightContent={<AdminAllUsers/>}/>}/>
          <Route path="/admin-dashboard/all-users/user*" element={<AdminDashboard rightContent={<AdminViewOfUser/>}/>}/>
          <Route path="/admin-dashboard/all-boats" element={<AdminDashboard rightContent={<AdminAllBoats/>}/>}/>
          <Route path="/admin-dashboard/all-boats/boat*" element={<AdminDashboard rightContent={<AdminViewOfBoatHouse/>}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

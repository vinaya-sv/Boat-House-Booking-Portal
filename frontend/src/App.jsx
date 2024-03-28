import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/Aboutus"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import './App.css';
import Register from "./pages/Register"
import { useEffect, useState } from "react"
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
import { useUserContext } from "./pages/UserContext"
import SiteSettings from "./pages/SiteSettings"
import YourStays from "./pages/YourStays"

function App() {
  const {isLoggedIn,adminOrUser}=useUserContext();
  return (
    <div className="entire">
      <BrowserRouter>
      {localStorage.getItem("role")!="ADMIN" &&
        <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/signin" element={<Login />}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/boat-house*" element={<BoatHouse/>}/> 

          {isLoggedIn &&
          <>
          <Route path="/dashboard/your-profile" element={<Dashboard rightContent={<YourProfile/>}/>}/>
          <Route path="/dashboard/your-stays" element={<Dashboard rightContent={<YourStays/>}/>}/>
          <Route path="/dashboard/your-wishlist" element={<Dashboard rightContent={<YourWishlist/>}/>}/>
          </>
          }
        </Routes>
        </>
        }
        {
          isLoggedIn && localStorage.getItem("role")=="ADMIN" &&
        <Routes>
          <Route path="/admin-dashboard/statistics" element={<AdminDashboard rightContent={<Statistics/>}/>}/>
          <Route path="/admin-dashboard/all-users" element={<AdminDashboard rightContent={<AdminAllUsers/>}/>}/>
          <Route path="/admin-dashboard/all-users/user*" element={<AdminDashboard rightContent={<AdminViewOfUser/>}/>}/>
          <Route path="/admin-dashboard/all-boats" element={<AdminDashboard rightContent={<AdminAllBoats/>}/>}/>
          <Route path="/admin-dashboard/all-boats/boat*" element={<AdminDashboard rightContent={<AdminViewOfBoatHouse/>}/>}/>
          <Route path="/admin-dashboard/site-settings/" element={<AdminDashboard rightContent={<SiteSettings/>}/>}/>
        </Routes>
        }
      </BrowserRouter>
    </div>
  )
}

export default App

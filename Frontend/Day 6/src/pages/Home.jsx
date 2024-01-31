import { useState } from 'react';
import React from 'react'

import '../assets/css/Home.css';
import BoatHouseCard from '../components/BoatHouseCard';
import NavBar from '../components/NavBar';
function Home(){
    const [sideBarHide, toggleSideBar]=useState(true);
    const handleFilterButton=()=>{
        toggleSideBar(!sideBarHide);
    }
    return (
        <>

        {/* <NavBar/> */}
        <div className="homepage-outer">
            <div className="filter-sidebar" style={{left:(sideBarHide)?"-18%":"0%",}}>
                <div className='filter-contents'>
                    <label className="filter-content-label">Destination</label>
                    <input className="filter-contents-calendar" type="text"></input>
                    <label className="filter-content-label">Check in</label>
                    <input className="filter-contents-calendar" type="datetime-local"></input>
                    <label className="filter-content-label">Check out</label>
                    <input className="filter-contents-calendar" type="datetime-local"></input>
                    <br/>
                    <br/>
                    <hr/>
                    Price: Low to High
                    <hr/>
                    Price: High to Low
                    <hr/>
                    Best rating
                    <hr/>
                </div>
                <button className="filter-sidebar-button" onClick={handleFilterButton}>FILTER</button>
            </div>
            <div className="boathouse-s-display" style={{width:(sideBarHide)?"98%":"80%",marginLeft:(sideBarHide)?"2%":"20%"}}>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            <BoatHouseCard/>
            </div>
                
        </div>
        </>
    );
}
export default Home;
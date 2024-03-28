import { useEffect, useState } from 'react';
import React from 'react'
import {localhost} from '../services/localhost';
import '../assets/css/Home.css';
import BoatHouseCard from '../components/BoatHouseCard';
import NavBar from '../components/NavBar';
import axios from 'axios';
function Home(){
    const [sideBarHide, toggleSideBar]=useState(true);
    const [boats, setBoats]=useState([]);
    const handleFilterButton=()=>{
        toggleSideBar(!sideBarHide);
    }
    useEffect(()=>{
        const fetchBoatData= async ()=>{
            const response=await axios.get(`${localhost}/boat/get/`);
            const {data}=response;
            setBoats(data);
        }
        fetchBoatData();
    },[]);
    return (
        <div className="homepage-outer">
            {/* <div className="filter-sidebar" style={{left:(sideBarHide)?"-18%":"0%",}}>
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
            </div> */}
            <div className="boathouse-s-display" style={{width:(sideBarHide)?"100%":"80%"
            // ,marginLeft:(sideBarHide)?"2%":"20%"
            }}>
            {boats.map((boat,index)=>
                <BoatHouseCard key={index} boat={boat}/>
            )}
            </div>  
        </div>
    );
}
export default Home;
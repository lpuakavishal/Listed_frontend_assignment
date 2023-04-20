import React from 'react'
import './Sidebar.css';
import {FiPieChart} from "react-icons/fi"
import {SlSettings} from "react-icons/sl"
import {BiUserCircle} from "react-icons/bi"
import {BsTags} from "react-icons/bs"
import {TbCalendarTime} from "react-icons/tb"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='board responsive'>
          <h2 className=''>Board.</h2>
        </div>
        <div className='dashboard responsive'>
          <FiPieChart style={{color:"#FFFFFF"}}/>
          <span className='das'>Dashboard</span>
        </div>
        <div className='schedules responsive'>
          <BsTags style={{color:"#FFFFFF"}}/>
          <span className=''>Transactions</span>
        </div>
        <div className='schedules responsive'>
          <TbCalendarTime style={{color:"#FFFFFF"}}/>
          <span className=''>Schedules</span>
        </div>
        <div className='schedules responsive'>
          <BiUserCircle style={{color:"#FFFFFF"}}/>
          <span className=''>Users</span>
        </div>
        <div className='schedules responsive'>
          <SlSettings style={{color:"#FFFFFF"}}/>
          <span className=''>Settings</span>
        </div>
        <div className='help'>
          
          <span className=''>Help</span>
        </div>
        <div className='contact'>
          
          <span className=''>Contact Us</span>
        </div>
        

    </div>
  )
}

export default Sidebar;
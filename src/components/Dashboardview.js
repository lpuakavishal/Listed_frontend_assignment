import React from 'react'
import './Dashboardview.css';
import {AiOutlineSearch} from "react-icons/ai"
import {BsBell} from "react-icons/bs"

export const Dashboardview = () => {
  return (
    <div className='flex irems-center dashview'>
        <div className='dash1'>
            <div>Dashboard</div>
        </div>
        <div className='dash2'>
        <div style={{display:'flex'}}>
            <input type='text' className='bg-[#FFFFFF] h-[30px] outline-none pl=[13px] w=[250px] rounded-[10px] placeholder:text-[14px] leading-[20px] font-normal' placeholder=' Search...'/>
        </div>
            <AiOutlineSearch className='iconSearch'/>
        <div >
             <BsBell/> 
        </div>
        <div >
            <img className='img' src="https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </div>
        </div>
    </div>
  )
}
export default Dashboardview;
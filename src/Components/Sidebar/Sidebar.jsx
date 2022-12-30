import React, { useContext } from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

import { DarkModeContext } from '../../Context/DarkModeAction';

const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
   <>
   <div className="sidebar">
<div className="sTop">
  <Link to='/' style={{textDecoration:"none"}} >
  
<span className="logo">ShaanBooking</span>
</Link>
</div>
<hr />
<div className="sCenter">
<ul>
<p className="sTitles">MAIN</p>
    <li>
        
        <DashboardIcon className='icons'/>
       <span>Dashboard</span> 
       </li>
       <p className="sTitles">LISTS</p>

       <Link to='/users' style={{textDecoration:"none"}} >
       <li>
   
        <Person2Icon className='icons'/>
        <span>Users</span> 
        </li>
       </Link>
       
       <Link to='/products' style={{textDecoration:"none"}} >
        <li>
        <Inventory2Icon className='icons'/>
        <span>Products</span> 
        </li>
        </Link>
        <li>
        <BusinessCenterRoundedIcon className='icons'/>
        <span>Orders</span> 
        </li>
        <li>
        <LocalShippingRoundedIcon className='icons'/>
        <span>Delivery</span> 
        </li>
        <p className="sTitles">USEFULL</p>
        <li>
        
        <AnalyticsIcon className='icons'/>
        <span>Stats</span> 
        </li>
        
        <li>
        
        <NotificationsNoneIcon className='icons'/>
        <span>Notifications</span> 
        </li>
        <p className="sTitles">SERVICES</p>
        <li>
        <HealthAndSafetyOutlinedIcon className='icons'/>
        <span>System Health</span> 
        </li>
        <li>
        <PsychologyOutlinedIcon className='icons'/>
        <span>Logs</span> 
        </li>
        <li>
        <SettingsApplicationsIcon className='icons'/>
        <span>Setting</span> 
        </li>
        <p className="sTitles">USER</p>
        <li>
      
        <AccountCircleIcon className='icons'/>
        <span>Profile</span> 
        </li>
        <li>
        <ExitToAppIcon className='icons'/>
        <span>Logout</span> 
        </li>
 
</ul>
</div>
<div className="sBottom">
    <div className="moreColorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
    <div className="moreColorOptions" onClick={()=>dispatch({type:"DARK"})}></div>
    {/* <div className="moreColorOptions"></div> */}
</div>
   </div> 
   </>
  )
}

export default Sidebar
 
import React, { useContext } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

import { DarkModeContext } from '../../Context/DarkModeAction';
// import { ListAltOutlined } from '@mui/icons-material';

const Navbar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
<>
<div className="navbar">
  <div className="nav-wrapper">
    <div className="search">
      <input type="text" placeholder='Search Here....' />
      <SearchIcon />
    </div>

    <div className="nav-items">
      <div className="nav-item">
        <LanguageIcon className='nav-icon'/>
        English
      </div>
      <div className="nav-item">
     <DarkModeOutlinedIcon className='nav-icon' onClick={()=>dispatch({type:"TOGGLE"})} />
      </div>
      <div className="nav-item">
       <FullscreenExitOutlinedIcon className='nav-icon'/>
      </div>
      <div className="nav-item">
       <NotificationsNoneOutlinedIcon className='nav-icon'/>
       <div className="counter">1</div>
      </div>
      <div className="nav-item">
        <ChatBubbleOutlineOutlinedIcon className='nav-icon'/>
        <div className="counter">2</div>
      </div>
      <div className="nav-item">
      <FormatListBulletedOutlinedIcon className='nav-icon'/>
      </div>
      <div className="nav-item">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIF5IdhplZa3ndYWdQ72Wrxz04yHaQ49tR4OZvrhNvN1laA9JSZaPKZY_E-o-Qd53I6w&usqp=CAU" alt="UserImage" className='avatar' />
      </div>
     
    </div>
  </div>
</div>
</>
  )
}

export default Navbar

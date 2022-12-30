import React from 'react'
import './Feature.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
 import {CircularProgressbar} from 'react-circular-progressbar'
 import 'react-circular-progressbar/dist/styles.css';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
 const Feature=()=>{
    return(
        <>
        <div className="feature">
           <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
           </div>
           <div className="bottom">
<div className="featureChart">
<CircularProgressbar value={70} text="70%" strokeWidth={4.5} />
</div>
<p className="title">Total sales made today</p>
<p className="amount">$420</p>
<p className="desc">Previous transactions processing. Last payment may be not included.</p>
<div className="summary">
    <div className="item">
        <div className="itemTitle">Target</div>
        <div className="itemResult negative">
            <KeyboardArrowDownIcon  fontSize='small'/>

            <div className="resultsAmount">$42.0</div>
        </div>
    </div>
    <div className="item">
        <div className="itemTitle">Last Week</div>
        <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon  fontSize='small'/>

            <div className="resultsAmount">$42.0</div>
        </div>
    </div>
    <div className="item">
        <div className="itemTitle">Last Month</div>
        <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon  fontSize='small'/>

            <div className="resultsAmount">$42.0</div>
        </div>
    </div>
</div>

           </div>
        </div>
        </>
    )
 }
 export default Feature;
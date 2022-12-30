import React, { useState } from 'react'
import './AddNew.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const AddNew = ({inputs,title}) => {
  const [file, setFile] = useState("");
  console.log(file)
  return (
<>
<div className="new">
  <Sidebar/>
  <div className="newContainer">
<Navbar/>
<div className="top">
<h1 className="topTitle">{title}</h1>
</div>
<div className="bottom">
<div className="left">
<img
              src={
                file
                  ?URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
</div>
<div className="right">
<form >
<div className="formInput">
  <label htmlFor='file' >
    Image: <DriveFolderUploadOutlinedIcon className='icon'/>
  </label>
  <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} />
</div>
{inputs.map((input)=>(
  <div className="formInput" key={input.id}>
  <label >{input.label} </label>
  <input type={input.type} placeholder={input.placeholder} />
</div>
))}



<button className='newBtn'>SEND</button>
</form>
</div>
</div>
  </div>
</div>
</>
  )
}

export default AddNew

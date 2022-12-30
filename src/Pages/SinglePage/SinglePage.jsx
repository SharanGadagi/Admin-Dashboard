import React from 'react'
import './SinglePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import TableList from '../../Components/Table/Table'

const SinglePage = () => {
  return (
  <>
  <div className="singlePage">
    <Sidebar/>
    <div className="spContainer">
      <Navbar/>
    <div className="top">
      <div className="left">
      <div className="editButton">Edit</div>
        <h1 className="leftTitle">Information</h1>
        <div className="leftItem">
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="avatar" className="leftImg" />
          <div className="leftDetails">
            <h1 className="detailTitle">Shaan G</h1>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">Sharangadagi@gmail.com</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">phone:</span>
              <span className="itemValue">+918971078420</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Address:</span>
              <span className="itemValue">Dharwad</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemValue">India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
       <Chart aspect={4 / 1.2} title="User Spending ( Last 6 Months)"/>
      </div>
    </div>

    <div className="bottom">
    <h1 className="title">Last Transactions</h1>
 <TableList/>
    </div>
    </div>
  </div>
  </>
  )
}

export default SinglePage

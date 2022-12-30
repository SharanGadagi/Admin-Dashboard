import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Chart from '../../Components/Chart/Chart'
import Feature from '../../Components/Feature/Feature'
import Table from '../../Components/Table/Table'

const Home = () => {
  
  return (
  <>
  <div className="home">
   <Sidebar/> 
   <div className="homeContainer">
    <Navbar/>
  <div className="widgets">
    <Widget type="user"/>
    <Widget type="order"/>
    <Widget type="earning"/>
    <Widget type="balance"/>
  </div>
  <div className="charts">
    <Feature/>
    <Chart title="Last 6 Months (Revenue)" aspect={2 / 0.8}/>
  </div>
  <div className="tableListContainer">
    <div className="tableListTitle">
      <Table/>
    </div>
  </div>
   </div>
  </div>
  </>
  )
}

export default Home

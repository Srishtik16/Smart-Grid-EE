import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { currentchartdata, yLabel1, yLabel2 } from '../../currentchartdata'
import '../home/home.scss'

const CurrentChart = () => {
  return (
      <>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <Chart data = {currentchartdata} title="AC Current v/s Day of Week" aspect={2 / 1} yLabel={yLabel1}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
        <div className="charts">
          <Chart data = {currentchartdata} title="DC Current v/s Day of Week" aspect={2 / 1} yLabel={yLabel2}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
      </div>
    </div>
    </>
  )
}

export default CurrentChart

import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { voltagechartdata, yLabel1, yLabel2 } from '../../voltagechartdata'
import '../home/home.scss'

const VoltageChart = () => {
  return (
      <>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <Chart data = {voltagechartdata} title="AC Voltage v/s Day of Week" aspect={2 / 1} yLabel={yLabel1}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
        <div className="charts">
          <Chart data = {voltagechartdata} title="DC Voltage v/s Day of Week" aspect={2 / 1} yLabel={yLabel2}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
      </div>
    </div>
    </>
  )
}

export default VoltageChart

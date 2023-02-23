import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { powerchartdata, yLabel1, yLabel2 } from '../../powerchartdata'
import '../home/home.scss'

const PowerChart = () => {
  return (
      <>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <Chart data = {powerchartdata} title="Active Power Consumed v/s Date" aspect={2 / 1} yLabel={yLabel1}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
        <div className="charts">
          <Chart data = {powerchartdata} title="Reactive Power Consumed v/s Date" aspect={2 / 1} yLabel={yLabel2}/>
          {/* Add New Charts inside div for better alignment */}
        </div>
      </div>
    </div>
    </>
  )
}

export default PowerChart

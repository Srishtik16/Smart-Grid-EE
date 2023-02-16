import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Datatable from "../../components/datatable/Datatable";
import { hData, homeColumns, homeRows } from "../../homedata";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

  const [Data, setData] = useState([]);
  // console.log(homeColumns);
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/api/smartgrid/`)
  //   .then((response) => {
  //     // console.log("Test");
  //     // console.log(response.data);
  //     setData(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }, []);

  var sample = new Array();
  for(let i in Data) {
    sample.push(Data[i]);
    // console.log(Data[i]);
  }
  console.log(sample);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="current" />
          <Widget type="voltage" />
          <Widget type="power" />
          {/* <Widget type="balance" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">Summary</div>
          {/* <Table /> */}
          <Datatable title = {hData} userColumns = {homeColumns} userRows = {sample}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

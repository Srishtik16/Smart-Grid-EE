import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Datatable from "../../components/datatable/Datatable";
import { hData, homeColumns, homeRows } from "../../homedata";
import { TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

  const [Data, setData] = useState([]);
  const [P, setP] = useState(0);
  const [Idatas, setIdatas] = useState(0);
  // const [Q, setQ] = useState(0);
  const [D, setD] = useState(0);
  const [N, setN] = useState(0);
  // var sample = new Array();
  // const processInput = async (e) => {
  //   // e.preventDefault();
  //   for(let i in Data) {
  //     var value = Data[i];
  //     // value["P"] = P;
  //     // value["I"] = I;
  //     // value["D"] = D;
  //     // value["N"] = N;
  //     Data[i].P = P;
  //     Data[i].I = I;
  //     sample.push(Data[i]);
  //     console.log("DATA DE");
  //     console.log(Data[i]);
  //   }
  //   console.log(sample);
  // }
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
    // var value = Data[i];
    // value['P'] = 0;
    // value['I'] = 0;
    // value['D'] = 0;
    // value['N'] = 0;
    sample.push(Data[i]);
    console.log("DATA DE");
    console.log(Data[i]);
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
          <div>
            <form className="inputForm" >
            <TextField id="standard-basic" label="P" variant="standard" value={P} onChange={(e) => setP(e.target.value)} name="P"/>
            <TextField id="standard-basic" label="I" variant="standard" value={Idatas} onChange={(e) => setIdatas(e.target.value)} name="Idatas"/>
            <TextField id="standard-basic" label="D" variant="standard" value={D} onChange={(e) => setD(e.target.value)} name="D"/>
            {/* <TextField id="standard-basic" label="Q" variant="standard" value={Q} onChange={(e) => setQ(e.target.value)} name="Q"/> */}
            {/* <input type='text' id = "standard-basic1" value={Q} onChange={(e) => setQ(e.target.value)} name="Q"/> */}
            <TextField id="standard-basic" label="N" variant="standard" value={N} onChange={(e) => setN(e.target.value)} name="N"/>
            {/* <button type="submit" className="submitButton">Submit</button> */}
            </form>
          </div>
          {/* <Table /> */}
          {/* {  */}
            {/* console.log(Q + " HERE")} */}
          <Datatable title = {hData} userColumns = {homeColumns} userRows = {Data} Pdata = {P} Ddata = {D} IData = {Idatas} Ndata = {N}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

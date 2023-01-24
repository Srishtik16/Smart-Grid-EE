import "../../pages/list/list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { cData, currentColumns, currentRows } from "../../currentdata";
// import { userColumn, userRow } from "../../voltagedata";

const CurrentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title = {cData} userColumns = {currentColumns} userRows = {currentRows}/>
        {/* <Datatable userColumns = {userColumn} userRows = {userRow}/> */}
      </div>
    </div>
  )
}

export default CurrentList
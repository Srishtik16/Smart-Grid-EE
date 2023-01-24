import "../../pages/list/list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { pData, powerColumns, powerRows } from "../../powerdata";
// import { userColumn, userRow } from "../../voltagedata";

const PowerList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title = {pData} userColumns = {powerColumns} userRows = {powerRows}/>
        {/* <Datatable userColumns = {userColumn} userRows = {userRow}/> */}
      </div>
    </div>
  )
}

export default PowerList
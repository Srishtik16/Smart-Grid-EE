import "../../pages/list/list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { vData, voltageColumns, voltageRows } from "../../voltagedata";
// import { userColumn, userRow } from "../../voltagedata";

const VoltageList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title = {vData} userColumns = {voltageColumns} userRows = {voltageRows}/>
        {/* <Datatable userColumns = {userColumn} userRows = {userRow}/> */}
      </div>
    </div>
  )
}

export default VoltageList
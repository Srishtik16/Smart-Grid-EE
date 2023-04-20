import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../currentdata";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = ({title, userRows, userColumns, Pdata = 0, Idata = 5, Ddata = 0, Ndata = 0}) => {
  const [data, setData] = useState(userRows);
  console.log("DATATABLE")
  console.log(data)
  const [P, setP] = useState(0);
  const [I, setI] = useState(5);
  const [D, setD] = useState(0);
  const [N, setN] = useState(0);
  async function handlePIDN() {
    const Pawait = await(Pdata)
    const Iawait = await(Idata)
    const Dawait = await(Ddata)
    const Nawait = await(Ndata)
    if(Pawait) {
      setP(Pawait);
    }
    if(Iawait) {
      setI(Iawait);
    }
    if(Dawait) {
      setD(Dawait);
    }
    if(Nawait) {
      setN(Nawait);
    }
    else {
      console.log("ERROR");
    }
  }


  useEffect(() => {
    axios.get(`http://localhost:5000/api/smartgrid/`)
    .then((response) => {
      // console.log("Test");
      // console.log(response.data);
      // delete response.data['id']
      response.data.sort(function(a, b) {
        return a.SerialNo - b.SerialNo
      })
      for(let i in response.data) {
        response.data[i]['Timestamp'] = response.data[i]['Timestamp'].substring(0, 10)
        response.data[i]['P'] = Pdata
        response.data[i]['D'] = Ddata
        response.data[i]['Idatas'] = Idata
        response.data[i]['N'] = Ndata
        console.log(response.data)
      }
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [Pdata, Idata, Ddata, Ndata]);


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        // columns={userColumns.concat(actionColumn)}
        columns = {userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        components={{Toolbar: GridToolbar, }}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;

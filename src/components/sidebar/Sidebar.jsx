import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BoltIcon from '@mui/icons-material/Bolt';
import BarChartIcon from '@mui/icons-material/BarChart';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">SMART GRID</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">CURRENT</p>
          <Link to="/currentData" style={{ textDecoration: "none" }}>
            <li>
              <BoltIcon fontSize="large" className="icon" />
              <span>Current Data</span>
            </li>
          </Link>
          <Link to="/currentcharts" style={{ textDecoration: "none" }}>
            <li>
              <BarChartIcon className="icon" />
              <span>Current Charts</span>
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">VOLTAGE</p>
          <Link to="/voltageData" style={{ textDecoration: "none" }}>
            <li>
              <ElectricMeterIcon className="icon" />
              <span>Voltage Data</span>
            </li>
          </Link>
          <Link to="/voltagecharts" style={{ textDecoration: "none" }}>
            <li>
              <BarChartIcon className="icon" />
              <span>Voltage Charts</span>
            </li>
          </Link>
          <p className="title">POWER</p>
          <Link to="/powerData" style={{ textDecoration: "none" }}>
          <li>
            <BatteryChargingFullIcon className="icon" />
            <span>Power Data</span>
          </li>
          </Link>
          <Link to="/powercharts" style={{ textDecoration: "none" }}>
            <li>
              <BarChartIcon className="icon" />
              <span>Power Charts</span>
            </li>
          </Link>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <>
              {isUser ?
              <span onClick={() => {logout({returnTo: window.location.origin})}}>Logout</span> :
              <Link to="/login"></Link> }
            </>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

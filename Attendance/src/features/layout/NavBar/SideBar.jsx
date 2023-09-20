import classes from "./SideBar.module.css"
import { Link } from "react-router-dom";

const SideBar = () =>{
    return (
      <div className={classes.sideBar}>
        <div className={classes.logo}>
          <h2>LOGO</h2>
          <h1>SEMICOLON</h1>
        </div>
        <div className={classes.sideBarItems}>
          <div className={classes.linkContainer}><Link to={"/home"} className={classes.Link} >Home</Link></div>
          <div className={classes.linkContainer}><Link to={"/addAdmin"} className={classes.Link} >Add Admin</Link></div>
          <div className={classes.linkContainer}><Link to={"/removeAdmin"} className={classes.Link} >Remove Admin</Link></div>
          <div className={classes.linkContainer}><Link to={"/addCohort"} className={classes.Link} >Add Cohort</Link></div>
          <div className={classes.linkContainer}><Link to={"/removeCohort"} className={classes.Link} >Remove Cohort</Link></div>
          <div className={classes.linkContainer}><Link to={"/enableCohortAttendance"} className={classes.Link} >Enable Cohort's Attendance</Link></div>
          <div className={classes.linkContainer}><Link to={"/disableCohortAttendance"} className={classes.Link} >Disable Cohort's Attendance</Link></div>
          <div className={classes.linkContainer}><Link to={"/enableNativeAttendance"} className={classes.Link} >Enable Native's Attendance</Link></div>
          <div className={classes.linkContainer}><Link to={"/disableNativeAttendance"} className={classes.Link} >Disable Native's Attendance</Link></div>
          <div className={classes.linkContainer}><Link to={"/editAttendanceStatus"} className={classes.Link} >Edit Attendance Status</Link></div>
          <div className={classes.linkContainer}><Link to={'/generateNativeAttendanceReport'} className={classes.Link} >Generate Native's Attendance Report</Link></div>
          <div className={classes.linkContainer}><Link to={"/generateCohortAttendanceReport"} className={classes.Link} >Generate Cohort's Attendance Report</Link></div>
          <div className={classes.linkContainer}><Link to={"/setAttendanceTime"} className={classes.Link} >Set Attendance Time</Link></div>
          <div className={classes.linkContainer}><Link to={"/"} className={classes.Link} >logout</Link></div> 
        </div>
      </div>
    );
};

export default SideBar;
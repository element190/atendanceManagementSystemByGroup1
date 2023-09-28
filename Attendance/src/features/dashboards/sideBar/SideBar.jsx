import classes from "./SideBar.module.css"
import { Link } from "react-router-dom";  
import semiImage from "../../../assests/images/semi.png"

const SideBar = () =>{
    return (
      <div className={classes.sideBar}>
        <div className={classes.logo}>
          {/* <h2>{semiImage}</h2> */}
          <img src={semiImage} alt="Semicolon image"/>
          <h1>SEMICOLON</h1>
        </div>
        <div className={classes.sideBarItems}>
          <div className={classes.linkContainer}><Link to={"/adminHome"} className={classes.Link} >Home</Link></div>
          <div className={classes.linkContainer}><Link to={"/addAdmin"} className={classes.Link} >Add Admin</Link></div>
          <div className={classes.linkContainer}><Link to={"/removeAdmin"} className={classes.Link} >Remove Admin</Link></div>
          <div className={classes.linkContainer}><Link to={"/addNative"} className={classes.Link} >Add Native</Link></div>
          <div className={classes.linkContainer}><Link to={"/removeNative"} className={classes.Link} >Remove Native</Link></div>
          <div className={classes.linkContainer}><Link to={"/removeCohort"} className={classes.Link} >Remove Cohort</Link></div>
          <div className={classes.linkContainer}><Link to={"/cohortAttendance"} className={classes.Link} >Cohort's Attendance Status</Link></div>
          <div className={classes.linkContainer}><Link to={"/nativeAttendance"} className={classes.Link} > Native's Attendance Status</Link></div>
          <div className={classes.linkContainer}><Link to={"/editAttendanceStatus"} className={classes.Link} >Edit Attendance Status</Link></div>
          <div className={classes.linkContainer}><Link to={'/generateNativeAttendanceReport'} className={classes.Link} >Generate Native's Attendance Report</Link></div>
          <div className={classes.linkContainer}><Link to={"/generateCohortAttendanceReport"} className={classes.Link} >Generate Cohort's Attendance Report</Link></div>
          <div className={classes.linkContainer}><Link to={"/setAttendanceTime"} className={classes.Link} >Set Attendance Time</Link></div>
          <div className={classes.linkContainer}><Link to={"/"} className={classes.Link} >Logout</Link></div> 
        </div>
      </div>
    );
};

export default SideBar;
import { Link } from "react-router-dom";
import semiImage from "../../../assests/images/semi.png";
import classes from './nativeSideBar.module.css'

const NativeSideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.logo}>
        {/* <h2>{semiImage}</h2> */}
        <img src={semiImage} alt="Semicolon image" />
        <h1>SEMICOLON</h1>
      </div>
      <div className={classes.sideBarItems}>
        <div className={classes.linkContainer}>
          <Link to={"/takeAttendance"} className={classes.Link}>
           Take Attendance
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/generateNativeAttendance"} className={classes.Link}>
            Generate Attendance
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/checkAttendanceHistory"} className={classes.Link}>
           Check Attendance History
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/"} className={classes.LinkLogout}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NativeSideBar;

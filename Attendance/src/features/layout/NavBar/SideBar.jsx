import classes from "./SideBar.module.css"

const SideBar = () =>{
    return (
      <div className={classes.sideBar}>
        <div className={classes.logo}>
          <h2>LOGO</h2>
          <h1>SEMICOLON</h1>
        </div>
        <div className={classes.sideBarItems}>
          <p>Add Admin</p>
          <p>Remove Admin</p>
          <p>Add Cohort</p>
          <p>Remove Cohort</p>
          <p>Enable Cohort's Attendance</p>
          <p>Disable Cohort's Attendance</p>
          <p>Enable Native's Attendance</p>
          <p>Disable Native's Attendance</p>
          <p>Edit Attendance Status</p>
          <p>Generate Native's Attendance Report</p>
          <p>Generate Cohort's Attendance Report</p>
          <p>Set Attendance Time</p>
        </div>
      </div>
    );
};

export default SideBar;
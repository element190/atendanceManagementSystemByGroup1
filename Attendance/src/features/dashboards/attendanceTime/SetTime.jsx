import SideBar from "../sideBar/SideBar";
import classes from "./setTime.module.css"
import Button from "../../UI/button/Button";

const SetTime = ()=> {
    return (
      <div className={classes.main}>
        <SideBar />
        <div className={classes.innerContainer}>
          <h1>Set Attendance Time</h1>
          <h2>Hi Admin,</h2>
          <div className={classes["time-input"]}>
            <div>
              <p>Start</p>
              <input type="time" name="time" id="" />
            </div>
            <div>
              <p>End</p>
              <input type="time" name="time" id="" />
            </div>
          </div>
          <div className={classes.flexBtn}>
            <Button className={classes.button}>Submit</Button>
            <Button className={classes.button}>Cancel</Button>
          </div>
        </div>
      </div>
    );
};

export default SetTime;
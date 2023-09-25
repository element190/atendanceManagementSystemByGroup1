import React, { useState } from "react";
// import SideBar from "../nativeSideBar/nativeSideBar";
import NativeSideBar from "../nativeSideBar/nativeSideBar";
import classes from "./nativeGenerateAttendance.module.css";
import Button from "../../UI/button/Button";

const NativeGenerateAttendanceReport = () => {
  //    const [selectedOption, setSelectedOption] = useState('');

  //   const handleChange = (e) => {
  //     setSelectedOption(e.target.value);
  //   };

  return (
    <div className={classes.main}>
      <NativeSideBar/>
      {/* <h1>Option List Example</h1> */}
      <div className={classes.innerContainer}>
        <p>Generate Native's Attendance Report</p>
        <form action="" className={classes.formInput}>
          
          {/* value={selectedOption} onChange={handleChange} */}

          {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
        
          <input className={classes.input} type="date" name="" id="" />
          <input className={classes.input} type="date" name="" id="" />
          <Button className={classes.btn}> Generate</Button>
        </form>
      </div>
    </div>
  );
};

export default NativeGenerateAttendanceReport;

import React from "react";
import img from "../../assests/images/timeandattendance.png";
import classes from "../../features/reusables/authImage.module.css"

const AuthImage = ()=> {
    return (
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
    );
};

export default AuthImage;
import React from "react";
import img from "../../assests/images/istockphoto-1421053049-612x612.jpg";
import classes from "../../features/reusables/authImage.module.css"

const AuthImage = ()=> {
    return (
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
    );
};

export default AuthImage;
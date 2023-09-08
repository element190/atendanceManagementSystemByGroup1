import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "../../../../src/App.css";
import AuthImage from "../../reusables/AuthImages";
import img from "../../../../src/assests/images/istockphoto-1421053049-612x612.jpg";

const Login =() => {

    const myStyle={
        backgroundImage: `url(${img})` ,
        height:'100vh',
        // marginTop:'-70px',
        // marginBottom: "-70px",
        margin: "-56px",
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

  return (
    <Fragment>
        <div className='interface'>

                    <div className='division'>
                        <form action="">
                            <label htmlFor="" style={{marginTop:"30px"}}>SubjectID: </label><br></br>
                            <input type="text" name="" className="input" /><br></br>

                            <label htmlFor="">Password: </label><br></br>
                            <input type="password" name="" className='input' /><br></br>
                            
                            <br></br><input align="right" type="button" color='blue' value="Login" className='loginsign'/>
                            
                        </form>

                        <h3><span style={{color: "blue"}}>Admin?</span></h3>

                        <p>If you are not user, you are not<br></br>welcome</p>
                    </div>


                    <div style={myStyle}>
                            <AuthImage />
                    </div>

        </div>
    </Fragment>
    
  )
}


export default Login;

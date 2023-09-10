import React, { Fragment, useState } from 'react';
import classes from "./styles/login.module.css"
import AuthImage from "../../reusables/AuthImages";
import Card from '../../UI/card/Card';
import Button from '../../UI/button/Button';
import NavigationButton from '../../UI/button/NavigationButton';
import { useNavigate } from 'react-router-dom';
// import img from "../../../../src/assests/images/istockphoto-1421053049-612x612.jpg";

const Login =() => {
    
     const initialValue = {
        userName: '',
        password: '',
    }

    const [data, setData] = useState(initialValue);
    const navigate = useNavigate()

    const onChangleHandler = (e)=>{
      setData((prev)=>({
          ...prev,[e.target.name] : e.target.value
      }))
    }

     const onClickHandler = () => {
        navigate("/Signup")
     };

    const onSumbitHandler = async (e)=>{
        e.preventDefault();
        const userDetails = {
            userName: data.userName,
            password: data.password
        }
    }

//     useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

    // const myStyle={
    //     // backgroundImage: `url(${img})` ,
    //     height:'100vh',
    //     // marginTop:'-70px',
    //     // marginBottom: "-70px",
    //     margin: "-56px",
    //     fontSize:'50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };

  return (
    <Card>
      <div className={classes.mainContainer}>
        <div>
          <AuthImage />
        </div>

        <div className={classes.formContainer}>
          <p className={classes.loginText}>LOGIN</p>
          <form action="" onSubmit={onSumbitHandler} className={classes.form}>
            <label htmlFor="">
              Username <span>*</span>
            </label>
            <br></br>
            <input
              type="text"
              name="username"
              placeholder="wifi username"
              className={classes.input}
              onChange={onChangleHandler}
              required
            />
            <br></br>

            <label htmlFor="">
              Password <span>*</span>
            </label>
            <br></br>
            <input
              type="password"
              placeholder="wifi Password"
              name="pasword"
              onChange={onChangleHandler}
              className={classes.input}
              required
            />
            <br></br>
            <br></br>
            <Button>Login</Button>
          </form>
          <div>
            <NavigationButton onClick={onClickHandler}>
              Register
            </NavigationButton>
          </div>
        </div>
      </div>
    </Card>
  );
}


export default Login;

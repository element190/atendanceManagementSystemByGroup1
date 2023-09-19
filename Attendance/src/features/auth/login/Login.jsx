import React, {useState } from 'react';
import classes from "./styles/login.module.css"
import AuthImage from "../../reusables/AuthImages";
import Card from '../../UI/card/Card';
import Button from '../../UI/button/Button';
import NavigationButton from '../../UI/button/NavigationButton';
import { useNavigate } from 'react-router-dom';

const Login =() => {
  const initialValue = {
    scv: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);
  const navigate = useNavigate();

  const onChangleHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    const userDetails = {
      scv: data.scv,
      password: data.password,
    };

    const response = await axios.post(
      "http://localhost:8080/api/v1/user/login",
      userDetails
    );

    if (response.status === 200) {
      console.log("BC res -->", response.data);
    }
  };

  const onClickHandler = () => {
    navigate("/Signup");
  };

  
        // const requestOptions = {
        //   method: "POST", 
        //   headers: {
        //     "Content-Type": "application/json", 
        //   },
        //   body: JSON.stringify(jsonData), 
        // };

        // fetch("https://example.com/api/endpoint", requestOptions)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("Response data:", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });

  //     useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8080/api/v1/user/login");
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
              SCV <span>*</span>
            </label>
            <br></br>
            <input
              type="text"
              name="Scv"
              placeholder="scv"
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

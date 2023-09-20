import React, { useEffect, useState } from "react";
import AuthImage from "../../reusables/AuthImages";
import Button from "../../UI/button/Button";
import axios from "axios";
import classes from "./styles/signUp.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/card/Card";
import NavigationButton from "../../UI/button/NavigationButton";
// import Login from "../login/Login";

const SignUp = () => {
  const initialValue = {
    email: "",
    scv: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  // const [goToLogin, setGoToLogin] = useState(false)
  const navigate = useNavigate();

  const onChangleHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    setScreenWidth(screenWidth);
    setScreenHeight(screenHeight);
  }, []);

  // const onClickHandler = () =>{
  //    setGoToLogin(true)
  // }

  //  if (goToLogin) {
  //    return <Navigate to="/login" />;
  //  }

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    const userDetails = {
      semicolonEmail: data.email,
      scv: data.scv,
      password: data.password,
      screenWidth: screenWidth,
      screenHeight: screenHeight,
    };

    console.log(userDetails);

    await axios.post("https://foodapp-3a5aa-default-rtdb.firebaseio.com/orders.json'",
        userDetails
      )
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(`Response Error: ${error.response.status}`);
          //  console.log(userDetails);
          //  if (response.status === 200) {
          //    console.log("BC res -->", response.data);
          //  }
        }
      });
      setData("");
      navigate("/login");
  };
  return (
    <Card>
      <div className={classes.mainContainer}>
        <div>
          <AuthImage />
        </div>
        <div className={classes.formContainer}>
          <p className={classes.register}>REGISTER</p>
          <form action="" className={classes.form} onSubmit={onSumbitHandler}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <div>
              <input
                placeholder="semicolon's email"
                type="email"
                name="email"
                onChange={onChangleHandler}
                value={data.email}
                required
              />
            </div>
            <label htmlFor="scv">
              SCV
              {/* <span>*</span> */}
            </label>
            <div>
              <input
                placeholder="Natives only"
                type="text"
                name="scv"
                onChange={onChangleHandler}
                value={data.scv}
                // required
              />
            </div>
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div>
              <input

                // placeholder="password"

                placeholder=""

                type="password"
                name="password"
                onChange={onChangleHandler}
                value={data.password}
                required
              />
            </div>
            {error && <h1>{error}</h1>}
            <Button>Sign up</Button>
          </form>
          <div>
            <NavigationButton
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </NavigationButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SignUp;

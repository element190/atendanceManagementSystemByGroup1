import React, { Fragment } from "react";
import AuthImage from "../../reusables/AuthImages";
import Button from "../../UI/Button";

const SignUp = () => {
  return (
    <Fragment>
      <div>
        <AuthImage />
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" 
            // value={data.email} 
            required />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="userName" 
            // value={data.userName} 
            required />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" 
            // value={data.password} 
            required />
          </div>
          <Button>Sign up</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;

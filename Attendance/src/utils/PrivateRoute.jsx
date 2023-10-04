import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = (props) => {
  console.log("This is isLogged in privateRoute.js", props.onLogin);
  return (
    props.onLogin ? <Outlet/> : <Navigate to="/"/>
  )
};

export default PrivateRoute;

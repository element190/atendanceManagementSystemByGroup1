import classes from "./takeAttendance.module.css";
import Button from "../../UI/button/Button";
import NativeSideBar from "../nativeSideBar/nativeSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { getIpAddress } from "../../../utils";

const TakeAttendance = () => {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("")
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [ipAddress, setIpAddress] = useState("")


  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

 

  useEffect(()=>{
    async function apiCall() {
      let ipAddress = await getIpAddress();
      setIpAddress(ipAddress)
      console.log("Ip addrress -> ", ipAddress);
    }
  
    apiCall();
    const firstName = sessionStorage.getItem("firstName");
    setFirstName(firstName);
  },[])

    useEffect(() => {
      
      setInterval(() => {
        setTime(getTime());
      }, 1000);
    }, []);

    function getTime() {
      const now = new Date();
      return now.toLocaleString("en-Us", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    }

    useEffect(() => {
      const screenWidth = String(window.screen.width).valueOf();
      const screenHeight = String(window.screen.height).valueOf();

      setScreenWidth(screenWidth);
      setScreenHeight(screenHeight);
    }, []); 

  const onClickHandler = async (e) => {
    e.preventDefault;

    setAttendanceStatus("PRESENT");
    const semicolonEmail = sessionStorage.getItem('semicolonEmail')
    
    console.log(attendanceStatus)

    const userDetails = {
      attendanceStatus: attendanceStatus,
      semicolonEmail: semicolonEmail,
      ipAddress : ipAddress,
      screenWidth: screenWidth,
      screenHeight: screenHeight,
    };

    console.log("Data sent successfully:", userDetails);
    console.log("Data sent successfully:", semicolonEmail);

    try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/natives/takeAttendance",
        userDetails
      );
      console.log("Data sent successfully:", response);
      
      console.log("Data sent successfully:", response.data);
      console.log("response", response.status);
      setMessage(response.data.data)

      } catch (error) {
        console.log(error.response);
        setError(error.response.data.data);

        // console.log(error);
      }
    };

  // useEffect(() => {
  //   const fetchCurrentTimeAndDate = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://worldtimeapi.org/api/timezone/Africa/Lagos"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         const dateTimeString = new Date(data.utc_datetime).toLocaleString();
  //         setCurrentDateTime(dateTimeString);
  //       } else {
  //         throw new Error("Failed to fetch time and date");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching time and date:", error);
  //     }
  //   };
  //   fetchCurrentTimeAndDate();
  // }, []);

  return (
    <div className={classes.flex}>
      <NativeSideBar />
      <div className={classes.main}>
        <h1>Welcome, {firstName} </h1>
        <h2 className={classes.time}>{time}</h2>
        <p>Please, take your attendance</p>
        <Button onClick={onClickHandler} className={classes.button}>
          Take Attendance
        </Button>
        {message && <p className={classes.message}>{message}</p>}
        {error && <p className={classes.message}>{error}</p>}
      </div>
    </div>
  );
};

export default TakeAttendance;

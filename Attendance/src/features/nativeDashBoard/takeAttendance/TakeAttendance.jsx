import classes from "./takeAttendance.module.css";
import Button from "../../UI/button/Button";
import NativeSideBar from "../nativeSideBar/nativeSideBar";
import { useEffect, useState } from "react";

const TakeAttendance = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [message, setMessage] = useState("");

  const onClickHandler = async (e) => {
    e.preventDefault;

    try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/natives/takeAttendance",
        userDetails
      );
      console.log("Data sent successfully:", response.data);
      console.log("response", response.status);
      setMessage(response.data)

    } catch (error) {
      setError(error.response.data.data);
      console.log(error.response.data.data);
    }
  };

  useEffect(() => {
    const fetchCurrentTimeAndDate = async () => {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/Africa/Lagos"
        );
        if (response.ok) {
          const data = await response.json();
          const dateTimeString = new Date(data.utc_datetime).toLocaleString();
          setCurrentDateTime(dateTimeString);
        } else {
          throw new Error("Failed to fetch time and date");
        }
      } catch (error) {
        console.error("Error fetching time and date:", error);
      }
    };
    fetchCurrentTimeAndDate();
  }, []);

  return (
    <div className={classes.flex}>
      <NativeSideBar />
      <div className={classes.main}>
        <h1>Welcome, native </h1>
        <h2 className={classes.time}>{currentDateTime}</h2>
        <p>Please, take your attendance</p>
        <Button onClick={onClickHandler} className={classes.button}>Take Attendance</Button>
      </div>
      {message && <p className={classes.message}>{message}</p>}
    </div>
  );
};

export default TakeAttendance;

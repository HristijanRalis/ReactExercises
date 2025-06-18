import { format } from "date-fns";
import React, { useEffect, useState } from "react";
// import styles from "./Date.module.scss"

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), "iiii, hh:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const formatTime = format(new Date(), "iiii, hh:mm:ss a");
      setCurrentTime(formatTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Clock</h1>
      <p>{currentTime}</p>
    </div>
  );
};

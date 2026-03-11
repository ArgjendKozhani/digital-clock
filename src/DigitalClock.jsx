import { useState, useEffect } from "react";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function pad(num) {
  return String(num).padStart(2, "0");
}

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const dayName = DAYS[time.getDay()];
  const monthName = MONTHS[time.getMonth()];
  const date = time.getDate();
  const year = time.getFullYear();

  return (
    <div className="clock-wrapper">
      <div className="clock-card">
        <div className="clock-time">
          <span className="time-digits">
            {pad(displayHours)}:{pad(minutes)}:{pad(seconds)}
          </span>
          <span className="time-ampm">{amPm}</span>
        </div>
        <div className="clock-date">
          {dayName}, {monthName} {date}, {year}
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;

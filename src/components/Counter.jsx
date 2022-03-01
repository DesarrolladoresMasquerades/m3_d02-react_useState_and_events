import { useState } from "react";

export default function DaysOfWeeks() {
  const daysOfWeek = ["monday", "tuesday", "wednesday"];

  const [currentDay, setDay] = useState("monday");

  function goToNextDay() {
    const nextIndex = daysOfWeek.indexOf(currentDay) + (1 % daysOfWeek.length);
    setDay(daysOfWeek[nextIndex]);
  }
  return (
    <p onClick={goToNextDay}>
      Today is: <span>{currentDay}</span>
    </p>
  );
}

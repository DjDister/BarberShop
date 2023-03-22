import React from "react";
import styles from "./WorkingHours.module.css";

type WorkingHour = {
  day: string;
  hours: string;
};

export default function WorkingHours({
  workinghours,
  className,
}: {
  workinghours: WorkingHour[];
  className?: string;
}) {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  return (
    <div className={`${styles.container} ${className}`}>
      {workinghours
        .sort((a, b) => {
          return (
            daysOfWeek.indexOf(a.day.slice(0, 3).toLocaleLowerCase()) -
            daysOfWeek.indexOf(b.day.slice(0, 3).toLocaleLowerCase())
          );
        })
        .map((wh, index) => (
          <div key={index} className={styles.whElement}>
            <h1>{wh.day}</h1>
            <div>{wh.hours}</div>
          </div>
        ))}
    </div>
  );
}

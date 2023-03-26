import React from "react";
import styles from "./Footer.module.css";
import { createClient } from "next-sanity";
import Scissors from "../Icons/Scissors";
import Phone2 from "../Icons/Phone2";
import Email2 from "../Icons/Email2";
import Home from "../Icons/Home";
import { Employee, OurService, Review, WorkingHour } from "@/types";
const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Footer({
  workinghours,
}: {
  workinghours: WorkingHour[];
}) {
  return (
    <div className={styles.whitesettup}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Scissors width="150px" height="150px" />
          BARBER
        </div>
        <div className={styles.aboutus}>
          <div className={styles.title}> ABOUT US</div>
          <div>
            This salon has been satisfying customers for 20 years, come and see
            for yourself !
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Phone2 fill="#396e3d" />
              +48 123 456 789
            </div>
            <div className={styles.icon}>
              <Email2 fill="#396e3d" /> barbarshop@gmail.com
            </div>
            <div className={styles.icon}>
              {" "}
              <Home fill="#396e3d" />
              ul Akademicka 5 Warszawa
            </div>
          </div>
        </div>
        <div className={styles.workinghours}>
          <div className={styles.title}>OPENING TIMES</div>
          <div className={styles.workinghoursdiv}>
            {workinghours.map((x, index) => (
              <div key={index} className={styles.workinghourselem}>
                <div>{x.day}</div>
                <div>{x.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const [workinghours] = await Promise.all([
    client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
  ]);
  return {
    props: {
      workinghours,
    },
  };
}

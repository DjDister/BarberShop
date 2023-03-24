import React from "react";
import styles from "./Footer.module.css";
import Scissors from "../Icons/Scissors";
import Phone2 from "../Icons/Phone2";
import Email2 from "../Icons/Email2";
import Home from "../Icons/Home";
export default function Footer() {
  return (
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
        <div></div>
      </div>
    </div>
  );
}

import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./SecondComponent.module.css";
import Foto1 from "../images/foto1.jpg";
import Foto2 from "../images/foto2.jpg";
import Foto3 from "../images/foto3.jpg";
import Foto4 from "../images/foto4.jpg";
import Foto5 from "../images/foto5.jpg";
import Foto6 from "../images/foto6.jpg";
import Foto7 from "../images/foto7.jpg";
import Foto8 from "../images/foto8.jpg";
import Image from "next/image";

export default function SecondComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>WELCOME TO BARBERSHOP</div>
        <div className={styles.images}>
          <Image
            src={Foto1}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie1}
          />
          <Image
            src={Foto2}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie2}
          />
          <Image
            src={Foto3}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie3}
          />
          <Image
            src={Foto4}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie4}
          />
          <Image
            src={Foto5}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie5}
          />
          <Image
            src={Foto6}
            alt="My Image"
            width={200}
            height={200}
            className={styles.zdjecie6}
          />
          <Image
            src={Foto7}
            alt="My Image"
            width={250}
            height={150}
            className={styles.zdjecie7}
          />
          <Image
            src={Foto8}
            alt="My Image"
            width={200}
            height={150}
            className={styles.zdjecie8}
          />
        </div>
      </div>
    </div>
  );
}

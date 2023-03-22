import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
const navbarelements = ["Home", "Gallery", "Stylist", "Prices", "Contact"];

export default function Navbar() {
  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "yellow",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "20%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.3rem",
          }}
        >
          <Image
            src="https://cdn.discordapp.com/attachments/1087793261780926525/1087805241778507846/Aleksy_realistyc_logo_for_barber_92d34f75-b0ec-4622-9645-163d00ac8839.png"
            alt=""
            width={80}
            height={70}
          />
          BEST BARBER
        </div>
        <div style={{ width: "60%", backgroundColor: "blue", display: "flex" }}>
          {navbarelements.map((x, index) => {
            return (
              <div
                key={index}
                className={styles.navbarelements}
                style={{
                  width: `${100 / navbarelements.length + 1}%`,
                }}
              >
                {x.toLocaleUpperCase()}
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "20%",
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.bookameeting}>BOOK A MEETING</div>
        </div>
      </div>
    </div>
  );
}

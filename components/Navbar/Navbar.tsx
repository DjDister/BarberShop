import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { createClient } from "next-sanity";
import MenuOpen from "../Icons/MenuOpen";
import MenuClose from "../Icons/MenuClose";
const navbarelements = ["Home", "Gallery", "Stylist", "Prices", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    const navMenu = document.querySelector(`.${styles.navMenu}`);
    if (menuOpen) {
      navMenu && navMenu.classList.add("closing");
      navMenu && navMenu.classList.remove("opening");
    } else {
      navMenu && navMenu.classList.add("opening");
      navMenu && navMenu.classList.remove("closing");
    }
  };

  return (
    <div className={styles.main} style={{ height: "70px" }}>
      <div className={styles.container}>
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
              justifyContent: "center",
              gap: "5%",
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
          <div
            style={{ width: "60%", backgroundColor: "blue", display: "flex" }}
          >
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
      <div
        className={styles.mobileNav}
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "yellow",
            position: "relative",
          }}
        >
          Navbar for mobile device
          <div className={styles.menuOpener} onClick={handleMenuToggle}>
            <MenuOpen height="50px" width="50px" />
          </div>
          <div
            className={styles.navMenu}
            style={{
              display: "flex",
              position: "absolute",
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
                height: `${(navbarelements.length + 1) * 30}px`,
                width: "100%",
              }}
            >
              {navbarelements.map((x, index) => {
                return (
                  <div key={index} className={styles.navbarelements}>
                    {x.toLocaleUpperCase()}
                  </div>
                );
              })}
            </div>
            {/* <div
              className={styles.menuCloser}
              onClick={() => setMenuOpen(false)}
            >
              {<MenuClose />}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

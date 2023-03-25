import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { createClient } from "next-sanity";
import MenuOpen from "../Icons/MenuOpen";
import MenuClose from "../Icons/MenuClose";
import Scissors from "../Icons/Scissors";
import { Elem } from "@/types";

const navbarelements = ["Home", "Gallery", "Stylist", "Prices", "Contact"];

export default function Navbar({ array }: { array: Elem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.main} style={{ height: "70px" }}>
      <div className={styles.container}>
        <div
          style={{
            width: "80%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            position: "relative",
          }}
        >
          <div className={styles.titlewithlogo}>
            <Scissors width="60px" height="60px" />
            BARBER
          </div>
          <div style={{ width: "60%", display: "flex", color: "white" }}>
            {navbarelements.map((x, index) => {
              return (
                <div
                  key={index}
                  className={styles.navbarelements}
                  style={{
                    width: `${100 / navbarelements.length + 1}%`,
                  }}
                >
                  <a
                    href={
                      x === "Contact"
                        ? "/Contact"
                        : x === "Gallery"
                        ? "/gallery"
                        : "/"
                    }
                  >
                    {x}
                  </a>
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "20%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.bookameeting}>BOOK A MEETING</div>
          </div>
        </div>
      </div>
      <div className={styles.mobileNav}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            position: "relative",
          }}
        >
          <div className={styles.titlewithlogo}>
            <Scissors width="60px" height="60px" />
            BARBER
          </div>
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
                backgroundColor: "black",
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: `${(navbarelements.length + 1) * 30}px`,
                width: "60%",
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

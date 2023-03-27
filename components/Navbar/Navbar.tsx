import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { createClient } from "next-sanity";
import MenuOpen from "../Icons/MenuOpen";
import MenuClose from "../Icons/MenuClose";
import Scissors from "../Icons/Scissors";
import { Elem } from "@/types";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";

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
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Scissors width="60px" height="60px" />
              BARBER
            </Link>
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
                  {x === "Gallery" || x === "Contact" || x === "Home" ? (
                    <Link
                      href={
                        x === "Contact"
                          ? "/Contact"
                          : x === "Gallery"
                          ? "/gallery"
                          : "/"
                      }
                    >
                      {x}
                    </Link>
                  ) : (
                    <ScrollLink to={x} smooth={true} duration={1000}>
                      {x}
                    </ScrollLink>
                  )}
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "30%",

              display: "flex",
              flexDirection: "row-reverse",

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
            height: "100%",
            backgroundColor: "black",
            color: "white",
            position: "relative",
            opacity: "0.9",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Scissors width="60px" height="60px" />
            BARBER
          </Link>

          <div className={styles.menuOpener} onClick={handleMenuToggle}>
            <MenuOpen height="50px" width="50px" />
          </div>
        </div>
        <div
          className={styles.navMenu}
          style={{
            display: "flex",
            position: "absolute",
            opacity: "1",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              flexDirection: "column",
              height: `${navbarelements.length * 40 + 55}px`,
              width: "60%",
              borderRadius: "10px",
              opacity: "1",
            }}
          >
            {navbarelements.map((x, index) => {
              return (
                <div
                  key={index}
                  className={styles.navbarelements}
                  style={{ height: "40px", opacity: "1" }}
                >
                  {x === "Gallery" || x === "Contact" ? (
                    <Link href={x === "Contact" ? "/Contact" : "/gallery"}>
                      {x.toLocaleUpperCase()}
                    </Link>
                  ) : (
                    <ScrollLink to={x} smooth={true} duration={1000}>
                      {x.toLocaleUpperCase()}
                    </ScrollLink>
                  )}
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
              }}
            >
              <div
                className={styles.bookameeting}
                style={{
                  height: "40px",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                BOOK A MEETING
              </div>
            </div>
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
  );
}

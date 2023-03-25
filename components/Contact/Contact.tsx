import React from "react";
import styles from "./Contact.module.css";
import Phone2 from "../Icons/Phone2";
import Email2 from "../Icons/Email2";
import Home from "../Icons/Home";
import World from "../Icons/World";
import Phone3 from "../Icons/Phone3";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.part1}>
          {" "}
          <div className={styles.title}>CONTACT US</div>
          <div className={styles.line}>
            <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
            <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
            <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quas quasi repellendus vel atque tempore iure perferendis! Soluta
            itaque consectetur, ex eos blanditiis a autem, unde nesciunt, error
            facere maiores?
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.getIn}>
            <div className={styles.title2}>GET IN TOUCH</div>
            <div className={styles.line}>
              <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
              <div style={{ width: "80%", backgroundColor: "#faedcd" }}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
                width: "100%",
              }}
            >
              <form
                action="https://formsubmit.io/send/barber@gmail.com"
                method="POST"
                style={{ width: "100%" }}
              >
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder=" ENTER YOUR NAME*"
                    style={{
                      width: "100%",
                      height: "35px",
                      marginBottom: "20px",
                      border: "2px solid #faedcd",
                    }}
                  ></input>
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="email"
                    placeholder=" ENTER YOUR EMAIL*"
                    style={{
                      width: "100%",
                      height: "35px",
                      marginBottom: "20px",
                      border: "2px solid #faedcd",
                    }}
                  ></input>
                </div>
                <div>
                  <textarea
                    placeholder=" YOUR MESSAGE*"
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      height: "195px",
                      maxWidth: "100%",
                      minWidth: "100%",
                      border: "2px solid #faedcd",
                    }}
                  ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className={styles.button}
                    type="submit"
                    style={{
                      width: "35%",
                      height: "40px",
                      border: "2px solid #faedcd",
                      fontSize: "1rem",
                      outline: "none",
                      backgroundColor: "#396e3d",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.findUs}>
            <div className={styles.title2}>FIND US QUICKLY</div>
            <div className={styles.line}>
              <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
              <div style={{ width: "80%", backgroundColor: "#faedcd" }}></div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.401909776394!2d20.979674930352985!3d52.21791551501446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccbd03a47cb1%3A0x35a8ff348d83eb7b!2sAkademicka%205%2C%2002-038%20Warszawa!5e0!3m2!1spl!2spl!4v1679742708262!5m2!1spl!2spl"
                width="100%"
                height="370"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className={styles.extraInf}>
            <div className={styles.title2}> INFORMATION</div>
            <div className={styles.line}>
              <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
              <div style={{ width: "80%", backgroundColor: "#faedcd" }}></div>
            </div>
            <div
              className={styles.insideExtra}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem cupiditate ducimus voluptate eos aliquam impedit,
              laborum eaque quas eum quo vitae ipsa esse. Nihil laudantium
              provident aut a! Laborum, vel.
            </div>
            <div className={styles.insideExtra}>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <Phone2 fill="#396e3d" />
                  +48 123 456 789
                </div>
                <div className={styles.icon}>
                  <Phone3 fill="#396e3d" /> +49 9876 6543 321
                </div>
                <div className={styles.icon}>
                  {" "}
                  <Home fill="#396e3d" />
                  ul Akademicka 5 Warszawa
                </div>
                <div className={styles.icon}>
                  {" "}
                  <Email2 fill="#396e3d" />
                  barbarshop@gmail.com
                </div>
                <div className={styles.icon}>
                  {" "}
                  <World fill="#396e3d" />
                  www.bestbarber.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
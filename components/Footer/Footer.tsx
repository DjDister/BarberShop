import React from "react";
import styles from "./Footer.module.css";
import { createClient } from "next-sanity";
import Scissors from "../Icons/Scissors";
import Phone2 from "../Icons/Phone2";
import Email2 from "../Icons/Email2";
import Home from "../Icons/Home";
import Image from "next/image";
import { WorkingHour, FooterType } from "@/types";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Footer({
  workinghours,
  footer,
}: {
  workinghours: WorkingHour[];
  footer: FooterType;
}) {
  const imageProps = useNextSanityImage(
    client,
    footer.logo
  ) as UseNextSanityImageProps | null;
  return (
    <div className={styles.whitesettup}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {imageProps ? (
            <Image
              src={imageProps ? imageProps.src : ""}
              className={styles.logoImage}
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <Scissors width="150px" height="150px" />
              BARBER
            </>
          )}
        </div>
        <div className={styles.aboutus}>
          <div className={styles.title}> ABOUT US</div>
          <div>{footer.description}</div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Phone2 fill="#396e3d" />
              {footer.phone}
            </div>
            <div className={styles.icon}>
              <Email2 fill="#396e3d" /> {footer.email}
            </div>
            <div className={styles.icon}>
              {" "}
              <Home fill="#396e3d" />
              {footer.address}
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

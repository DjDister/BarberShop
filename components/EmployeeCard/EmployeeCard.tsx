import { Employee } from "@/types";
import { createClient } from "next-sanity";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import React from "react";
import Image from "next/image";
import styles from "./EmployeeCard.module.css";
import Razor from "../Icons/Razor";
import Link from "next/link";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const imageProps = useNextSanityImage(
    client,
    employee.image
  ) as UseNextSanityImageProps | null;
  return (
    <div className={styles.cardCont}>
      <Image
        className={styles.employeeImage}
        alt="employeeImage"
        src={imageProps ? imageProps.src : ""}
        width={150}
        height={150}
      />
      <h3 className={styles.employeeName}>{employee.name}</h3>
      <div className={styles.razorIconLine}>
        <Razor
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
          }}
          height="24px"
          width="24px"
        />
      </div>
      <p className={styles.employeeRole}>{employee.role}</p>
      <p className={styles.employeeBio}>{employee.bio}</p>
      <div className={styles.employeeEmail}>{employee.email}</div>
      <div className={styles.socialCont}>
        {employee.fblink && (
          <Link href={employee.fblink}>
            <Facebook width="16px" height="16px" fill={"grey"} />
          </Link>
        )}
        {employee.instalink && (
          <Link href={employee.instalink}>
            <Instagram width="18px" height="18px" fill={"grey"} />
          </Link>
        )}
        {employee.twitterlink && (
          <Link href={employee.twitterlink}>
            <Twitter width="16px" height="16px" fill={"grey"} />
          </Link>
        )}
      </div>
    </div>
  );
}

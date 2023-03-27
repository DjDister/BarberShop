import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";
import {
  Employee,
  FooterType,
  LandingData,
  OurService,
  Review,
  WorkingHour,
} from "@/types";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import SecondComponent from "@/components/SecondComponents/SecondComponent";
import Footer from "@/components/Footer/Footer";
import { Element } from "react-scroll";
import Image from "next/image";

import { Elem } from "@/types";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Home({
  workinghours,
  ourservices,
  reviews,
  employees,
  navbar,
  landingphotos,
  landingdata,
  footer,
}: {
  workinghours: WorkingHour[];
  ourservices: OurService[];
  reviews: Review[];
  employees: Employee[];
  navbar: Elem[];
  landingphotos: any[];
  landingdata: LandingData[];
  footer: FooterType[];
}) {
  const workinghoursImageBackground = useNextSanityImage(
    client,
    landingdata[0].workinghoursImageBackground
  ) as UseNextSanityImageProps | null;
  return (
    <div style={{ width: "100%", height: "100%" }} className={styles.container}>
      <Element name="Home">
        <Navbar array={navbar} />
        <SecondComponent photos={landingphotos} title={landingdata[0].title} />
      </Element>

      <Element name="Prices">
        <div style={{ width: "100%", marginTop: "40px", marginBottom: "30px" }}>
          <div style={{ width: "100%" }}>
            <OurServices ourservices={ourservices} />
          </div>
        </div>
        <div className={styles.workinghoursCont}>
          <Image
            src={workinghoursImageBackground?.src || ""}
            alt="My Image"
            className={styles.workinghoursBackgroundImage}
            fill
            style={{
              zIndex: 1,
              objectFit: "cover",
            }}
          />
          <WorkingHours className={styles.wkcont} workinghours={workinghours} />
        </div>
      </Element>
      <Element name="Stylist">
        <div>
          <div
            style={{
              textAlign: "center",
              color: "gray",
              fontSize: "1.8rem",
              marginTop: "40px",
            }}
          >
            {landingdata[0].ourTeamTitle}
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "2.3rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {landingdata[0].ourTeamTitle2}
          </div>
          <div
            className={styles.line}
            style={{
              width: "100%",
              height: "3px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
            <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
            <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
          </div>
        </div>
      </Element>

      <div
        style={{
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 40,
        }}
      >
        {employees &&
          employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
      </div>

      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop: "40px",
          }}
        >
          {landingdata[0].reviewsTitle}
        </div>
        <div
          className={styles.line}
          style={{
            width: "100%",
            height: "3px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
          <div style={{ width: "10%", backgroundColor: "#396e3d" }}></div>
          <div style={{ width: "30%", backgroundColor: "#faedcd" }}></div>
        </div>
      </div>
      <div
        className={styles.reviewdiv}
        style={{ width: "100%", marginTop: 40 }}
      >
        {reviews &&
          reviews.slice(0, 4).map((review, index) => (
            <div key={index} className={styles.rewiev}>
              <ReviewCard review={review} />
            </div>
          ))}
      </div>
      <Footer workinghours={workinghours} footer={footer[0]} />
    </div>
  );
}

export async function getStaticProps() {
  const [
    workinghours,
    ourservices,
    reviews,
    employees,
    navbar,
    landingphotos,
    landingdata,
    footer,
  ] = await Promise.all([
    client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
    client.fetch<OurService>(`*[_type == "ourservices"]`),
    client.fetch<Review[]>(`*[_type == "reviews"]`),
    client.fetch<Employee[]>(`*[_type == "employees"]`),
    client.fetch<Elem>(`*[_type == "navbar"]`),
    client.fetch<Elem>(`*[_type == "landingphoto"]`),
    client.fetch<LandingData>(`*[_type == "landingdata"]`),
    client.fetch<FooterType>(`*[_type == "footer"]`),
  ]);
  return {
    props: {
      workinghours,
      ourservices,
      reviews,
      employees,
      navbar,
      landingphotos,
      landingdata,
      footer,
    },
  };
}

import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";
import { Employee, OurService, Review, WorkingHour } from "@/types";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import SecondComponent from "@/components/SecondComponents/SecondComponent";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

import { Elem } from "@/types";

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
}: {
  workinghours: WorkingHour[];
  ourservices: OurService[];
  reviews: Review[];
  employees: Employee[];
  navbar: Elem[];
}) {
  let component;
  if (typeof window !== "undefined") {
    switch (window.location.pathname) {
      case "/Contact":
        component = <Contact />;
        break;
    }
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar array={navbar} />
      <SecondComponent />
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <WorkingHours className={styles.wkcont} workinghours={workinghours} />
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <OurServices ourservices={ourservices} />
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
      <div className={styles.reviewdiv} style={{ width: "100%" }}>
        {reviews &&
          reviews.slice(0, 4).map((review, index) => (
            <div key={index} className={styles.rewiev}>
              <ReviewCard review={review} />
            </div>
          ))}
      </div>
      <div>
        <div style={{ textAlign: "center", color: "gray", fontSize: "1.8rem" }}>
          MEET OUR TEAM OF BEARD PROFESSIONALS
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          OUR BARBERS AND STYLISTS
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
        style={{
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {employees &&
          employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
      </div>

      {/* <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <OurServices ourservices={ourservices} />
        </div>
        <div style={{ width: "50%" }}></div>
      </div> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const [workinghours, ourservices, reviews, employees, navbar] =
    await Promise.all([
      client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
      client.fetch<OurService>(`*[_type == "ourservices"]`),
      client.fetch<Review[]>(`*[_type == "reviews"]`),
      client.fetch<Employee[]>(`*[_type == "employees"]`),
      client.fetch<Elem>(`*[_type == "navbar"]`),
    ]);
  return {
    props: {
      workinghours,
      ourservices,
      reviews,
      employees,
      navbar,
    },
  };
}

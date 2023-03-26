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
  landingphotos,
}: {
  workinghours: WorkingHour[];
  ourservices: OurService[];
  reviews: Review[];
  employees: Employee[];
  navbar: Elem[];
  landingphotos: any[];
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
      <SecondComponent photos={landingphotos} />
      <Contact />

      <div style={{ width: "100%", backgroundColor: "red" }}>
        <WorkingHours className={styles.wkcont} workinghours={workinghours} />
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <OurServices ourservices={ourservices} />
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
      <div style={{ width: "100%" }}>
        {reviews &&
          reviews
            .slice(0, 4)
            .map((review, index) => <ReviewCard key={index} review={review} />)}
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
  const [workinghours, ourservices, reviews, employees, navbar, landingphotos] =
    await Promise.all([
      client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
      client.fetch<OurService>(`*[_type == "ourservices"]`),
      client.fetch<Review[]>(`*[_type == "reviews"]`),
      client.fetch<Employee[]>(`*[_type == "employees"]`),
      client.fetch<Elem>(`*[_type == "navbar"]`),
      client.fetch<Elem>(`*[_type == "landingphoto"]`),
    ]);
  return {
    props: {
      workinghours,
      ourservices,
      reviews,
      employees,
      navbar,
      landingphotos,
    },
  };
}

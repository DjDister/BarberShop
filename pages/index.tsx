import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";
import { Employee, OurService, Review, WorkingHour } from "@/types";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";

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
}: {
  workinghours: WorkingHour[];
  ourservices: OurService[];
  reviews: Review[];
  employees: Employee[];
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
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
    </div>
  );
}

export async function getStaticProps() {
  const [workinghours, ourservices, reviews, employees] = await Promise.all([
    client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
    client.fetch<OurService>(`*[_type == "ourservices"]`),
    client.fetch<Review[]>(`*[_type == "reviews"]`),
    client.fetch<Employee[]>(`*[_type == "employees"]`),
  ]);
  return {
    props: {
      workinghours,
      ourservices,
      reviews,
      employees,
    },
  };
}

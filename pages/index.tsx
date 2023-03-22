import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";
<<<<<<< HEAD
=======
import { OurService, Review, WorkingHour } from "@/types";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
>>>>>>> 0610b39fe2566abff26fb9df448413cceeabeea9

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Home({
  workinghours,
<<<<<<< HEAD
  navbar,
}: {
  workinghours: WorkingHour[];
  navbar: NavbarElems[];
=======
  ourservices,
  reviews,
}: {
  workinghours: WorkingHour[];
  ourservices: OurService[];
  reviews: Review[];
>>>>>>> 0610b39fe2566abff26fb9df448413cceeabeea9
}) {
  console.log(workinghours);
  console.log(navbar);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <WorkingHours className={styles.wkcont} workinghours={workinghours} />
      </div>
      {/* <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <OurServices ourservices={ourservices} />
        </div>
        <div style={{ width: "50%" }}></div>
<<<<<<< HEAD
      </div> */}
=======
      </div>
      <div style={{ width: "100%" }}>
        {reviews &&
          reviews
            .slice(0, 4)
            .map((review, index) => <ReviewCard key={index} review={review} />)}
      </div>
>>>>>>> 0610b39fe2566abff26fb9df448413cceeabeea9
    </div>
  );
}

<<<<<<< HEAD
type WorkingHour = {
  day: string;
  hours: string;
};
type NavbarElems = {
  navabrelem: string;
};
=======
export async function getStaticProps() {
  const [workinghours, ourservices, reviews] = await Promise.all([
    client.fetch<WorkingHour>(`*[_type == "workinghour"]`),
    client.fetch<OurService>(`*[_type == "ourservices"]`),
    client.fetch<Review[]>(`*[_type == "reviews"]`),
  ]);
>>>>>>> 0610b39fe2566abff26fb9df448413cceeabeea9

export async function getStaticProps() {
  const navbar = await client.fetch<NavbarElems>(`*[_type == "navbar"]`);
  const workinghours = await client.fetch<WorkingHour>(
    `*[_type == "workinghour"]`
  );
  return {
    props: {
      workinghours,
<<<<<<< HEAD
      navbar,
=======
      ourservices,
      reviews,
>>>>>>> 0610b39fe2566abff26fb9df448413cceeabeea9
    },
  };
}

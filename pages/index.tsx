import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Home({
  workinghours,
  navbar,
}: {
  workinghours: WorkingHour[];
  navbar: NavbarElems[];
}) {
  console.log(workinghours);
  console.log(navbar);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <WorkingHours className={styles.wkcont} workinghours={workinghours} />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minus
        itaque ratione iure corporis repudiandae minima tempore autem fuga
        delectus nulla, nobis, reiciendis blanditiis quidem et vitae dolorum
        magnam explicabo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        aliquam eum? Ipsum ducimus quisquam blanditiis atque mollitia debitis
        eius, consequatur, impedit totam repellendus adipisci dolor consectetur
        libero accusamus quos et.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
        repellendus ullam, eligendi soluta in eaque, ratione quasi hic quibusdam
        quas error amet nostrum, culpa libero quisquam dicta modi mollitia?
      </p>
      {/* <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <OurServices ourservices={ourservices} />
        </div>
        <div style={{ width: "50%" }}></div>
      </div> */}
    </div>
  );
}

type WorkingHour = {
  day: string;
  hours: string;
};
type NavbarElems = {
  navabrelem: string;
};

export async function getStaticProps() {
  const navbar = await client.fetch<NavbarElems>(`*[_type == "navbar"]`);
  const workinghours = await client.fetch<WorkingHour>(
    `*[_type == "workinghour"]`
  );
  return {
    props: {
      workinghours,
      navbar,
    },
  };
}

import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";
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
  navbar,
}: {
  workinghours: WorkingHour[];
  navbar: Elem[];
}) {
  console.log(workinghours);
  console.log(navbar);
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

import styles from "@/styles/Home.module.css";
import App from "./App";
import { createClient } from "next-sanity";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import Navbar from "@/components/Navbar/Navbar";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Home({
  workinghours,
}: {
  workinghours: WorkingHour[];
}) {
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <WorkingHours className={styles.wkcont} workinghours={workinghours} />
      </div>
    </div>
  );
}

type WorkingHour = {
  day: string;
  hours: string;
};

export async function getStaticProps() {
  const workinghours = await client.fetch<WorkingHour>(
    `*[_type == "workinghour"]`
  );
  return {
    props: {
      workinghours,
    },
  };
}

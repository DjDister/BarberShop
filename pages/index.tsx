import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import App from "./App";
import { createClient } from "next-sanity";
const inter = Inter({ subsets: ["latin"] });

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
  console.log(workinghours);
  return (
    <div>
      <App />
    </div>
  );
}

type WorkingHour = {
  day: string;
  hour: string;
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

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
  navbar,
}: {
  workinghours: WorkingHour[];
  navbar: NavbarElems[];
}) {
  console.log(workinghours);
  console.log(navbar);
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

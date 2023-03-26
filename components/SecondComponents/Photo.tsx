import React from "react";
import Image from "next/image";
import styles from "./SecondComponent.module.css";
import { createClient } from "next-sanity";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import image from "next/image";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Photo({ photo, index }: { photo: any; index: number }) {
  const imageProps = useNextSanityImage(
    client,
    photo.image
  ) as UseNextSanityImageProps | null;
  return (
    <Image
      src={imageProps?.src || ""}
      alt="My Image"
      width={200 + index * 10}
      height={150 + index * 15}
      style={{ objectFit: "cover" }}
      className={styles[`photo${index + 1}`]}
    />
  );
}

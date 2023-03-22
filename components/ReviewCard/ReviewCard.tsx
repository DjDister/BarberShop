import { Review } from "@/types";
import Image from "next/image";
import React from "react";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import { createClient } from "@sanity/client";
import styles from "./ReviewCard.module.css";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function ReviewCard({ review }: { review: Review }) {
  const imageProps = useNextSanityImage(
    client,
    review.image
  ) as UseNextSanityImageProps | null;

  return (
    <div className={styles.cardCont}>
      <Image
        className={styles.reviewImage}
        alt="reviewerImage"
        src={imageProps ? imageProps.src : ""}
        width={150}
        height={150}
      />
      <div>
        <div>{review.review}</div>
        <div className={styles.reviewerName}>{review.name}</div>
      </div>
    </div>
  );
}

import { createClient } from "next-sanity";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import React from "react";
import Image from "next/image";

const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function GalleryPhoto({
  image,
  index,
}: {
  image: any;
  index: number;
}) {
  const imageProps = useNextSanityImage(
    client,
    image.image
  ) as UseNextSanityImageProps | null;
  const imageWith = index % 3 === 0 ? 350 : index % 2 === 0 ? 340 : 250;
  const imageHeight = index % 3 === 0 ? 350 : index % 2 === 0 ? 450 : 200;
  return (
    <Image
      width={imageWith}
      height={imageHeight}
      style={{ objectFit: "cover", marginRight: "10px" }}
      src={imageProps?.src || ""}
      alt={""}
    />
  );
}

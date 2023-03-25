import GalleryPhoto from "@/components/GalleryPhoto/GalleryPhoto";
import Navbar from "@/components/Navbar/Navbar";
import { GalleryPhotoType, Elem } from "@/types";
import { createClient } from "next-sanity";
import React, { useEffect } from "react";
import styles from "../styles/Gallery.module.css";
const client = createClient({
  projectId: "0kjvrvfn",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function Gallery({
  galleryphotos,
  navbar,
}: {
  galleryphotos: GalleryPhotoType[];
  navbar: Elem[];
}) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carouselRef.current) {
      const parent = carouselRef.current;

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        parent.scrollLeft += event.deltaY;
      };

      parent.addEventListener("wheel", handleWheel);

      return () => {
        parent.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Navbar array={navbar} />
      <div
        style={{
          height: "100%",
          overflowX: "scroll",
          display: "flex",
        }}
        ref={carouselRef}
        className={styles.carousel}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={styles.container}
        >
          {galleryphotos &&
            galleryphotos.map((photo, index) => (
              <GalleryPhoto key={index} image={photo} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [galleryphotos, navbar] = await Promise.all([
    client.fetch<GalleryPhotoType[]>(`*[_type == "galleryphoto"]`),
    client.fetch<Elem>(`*[_type == "navbar"]`),
  ]);
  return {
    props: {
      galleryphotos,
      navbar,
    },
  };
}

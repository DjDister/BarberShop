import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./SecondComponent.module.css";
import Photo from "./Photo";

const MemoizedPhoto = React.memo(Photo);

export default function SecondComponent({ photos }: { photos: any[] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState<number>(-180);
  const [top, setTop] = useState<number>(-200);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (boxRef.current && window.screen.width > 768) {
      const { left: boxLeft, top: boxTop } =
        boxRef.current.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const newLeft = mouseX - boxLeft - boxRef.current.offsetWidth / 2;
      const newTop = mouseY - boxTop - boxRef.current.offsetHeight / 2;

      setLeft(-200 + newLeft / 10);
      setTop(-200 + newTop / 10);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className={styles.container}>
      <div className={styles.box} ref={boxRef} style={{ left, top }}>
        <div className={styles.title}>WELCOME TO BARBERSHOP</div>
        <div className={styles.images}>
          {photos.map((photo, index) => (
            <MemoizedPhoto key={index} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

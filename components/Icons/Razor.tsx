import React from "react";

export default function Razor({
  width,
  height,
  style,
  fill = "#343C44",
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      fill={fill}
      viewBox="0 0 100 100"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="hairdryer"></g> <g id="scissor"></g>{" "}
        <g id="razor">
          {" "}
          <g>
            {" "}
            <path d="M91.7,69.2c-2.4-2-5.4-3.1-8.5-3.1L39.7,8.4c-2-2.6-5.7-3.2-8.4-1.2L21,15c-0.2,0.2-0.4,0.4-0.4,0.7c0,0.3,0,0.5,0.2,0.7 l34.8,46.3c0.3,0.4,1,0.5,1.4,0.2c0.9-0.7,1.9-1,3-1c1.6,0,3.1,0.7,4,2l3,4c-16.1,1.3-32.2,0.8-48.2-1.6c-3.8-0.6-7.6,0.5-10.5,3 C5.6,71.6,4,75,4,78.6c0,6.1,4.5,11.3,10.7,12.4c12.3,2,24.4,3,36.3,3c11.7,0,23.2-1,34.5-2.9C91.6,90,96,84.8,96,78.7v-0.1 C96,75,94.4,71.6,91.7,69.2z M56.6,60.7L23,16l1.6-1.2l34,45.2C57.9,60.2,57.2,60.4,56.6,60.7z M65.6,62.7 c-1.1-1.5-2.7-2.4-4.6-2.7c0,0,0-0.1,0-0.1L26.2,13.6l6.4-4.8c1.8-1.3,4.3-1,5.6,0.8l42.6,56.7c-3.8,0.6-7.6,1-11.5,1.4L65.6,62.7 z M94,78.7c0,5.1-3.7,9.5-8.9,10.4C62.7,93,39.1,93,15,89c-5.2-0.9-9-5.2-9-10.4c0-3,1.3-5.9,3.6-7.9c2-1.7,4.5-2.6,7.2-2.6 c0.6,0,1.1,0,1.7,0.1c16.7,2.5,33.6,3,50.4,1.5c0,0,0,0,0,0c0,0,0,0,0,0c4.2-0.4,8.4-0.9,12.6-1.5c3.2-0.5,6.4,0.4,8.9,2.5 c2.3,2,3.6,4.9,3.6,7.9V78.7z"></path>{" "}
            <path d="M83.5,71c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S87.6,71,83.5,71z M83.5,84c-3,0-5.5-2.5-5.5-5.5 s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S86.5,84,83.5,84z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g id="razor_blade_1_"></g> <g id="comb"></g>{" "}
        <g id="shaving_machine"></g> <g id="barbershop"></g>{" "}
        <g id="barber_pole"></g> <g id="hairstylist"></g> <g id="kids"></g>{" "}
        <g id="mature"></g> <g id="woman"></g> <g id="moustache"></g>{" "}
        <g id="hair_gel"></g> <g id="shampoo"></g> <g id="mirror"></g>{" "}
        <g id="spray"></g> <g id="apron"></g> <g id="chair"></g>{" "}
        <g id="mask"></g>{" "}
      </g>
    </svg>
  );
}

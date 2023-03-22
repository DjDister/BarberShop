import React from "react";

export default function PersonAdd({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=person-add">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5C11.103 5 12 5.897 12 7C12 8.103 11.103 9 10 9C8.897 9 8 8.103 8 7C8 5.897 8.897 5 10 5ZM10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM10 13C6.141 13 3 16.14 3 20C3 20.552 3.447 21 4 21C4.553 21 5 20.552 5 20C5 17.243 7.243 15 10 15C12.757 15 15 17.243 15 20C15 20.552 15.447 21 16 21C16.553 21 17 20.552 17 20C17 16.14 13.859 13 10 13ZM20 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8H20V9C20 9.55 19.55 10 19 10C18.45 10 18 9.55 18 9V8H17C16.45 8 16 7.55 16 7C16 6.45 16.45 6 17 6H18V5C18 4.45 18.45 4 19 4C19.55 4 20 4.45 20 5V6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

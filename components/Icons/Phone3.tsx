import React from "react";

export default function Phone3({
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.795 2h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C6.116 3.686 6 4.09 6 5.205v13.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h5.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V5.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C16.314 2.116 15.91 2 14.795 2zM8 17.995V6.005h8v11.99H8z"
        ></path>
      </g>
    </svg>
  );
}

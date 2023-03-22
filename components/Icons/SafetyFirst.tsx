import React from "react";

export default function SafetyFirst({
  width,
  height,
  fill = "#5367fe",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      fill={fill}
      height={height || "45px"}
      width={width || "45px"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 304.761 304.761"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g id="Layer_5_88_">
            {" "}
            <g>
              {" "}
              <path d="M168.493,241.462c0-40.269,32.644-72.911,72.911-72.911c8.476,0,13.96,1.012,19.709,2.711 c3.871,1.641,5.352-1.592,5.756-3.1c2.634-9.839,4.111-19.873,4.111-29.982c0-0.677-0.378-86.735-0.378-87.798 c0-8.487-4.863-8.467-7.034-8.456c-15.578,0.074-31.457,0.081-48.161-4.734C180.703,27.186,149.85,0,138.121,0 c-11.361,0-34.269,27.187-68.974,37.192c-19.57,5.642-38.337,4.595-55.894,3.781c-2.063-0.095-5.347-0.642-6.389,6.508 c-0.263,1.802-1.602,89.731-1.602,90.699c0,85.898,106.271,166.581,132.857,166.581c8.507,0,22.214-6.832,40.662-20.561 c2.458-2.123,1.141-3.531,0.414-4.717C172.413,268.413,168.493,255.398,168.493,241.462z"></path>{" "}
              <path d="M241.862,278.639c-2.456,2.647-6.84,3.057-9.743,0.91l-46.173-34.143c-2.902-2.146-3.501-6.262-1.33-9.146l5.925-7.865 c2.171-2.884,6.329-3.496,9.24-1.36l29.609,21.728c2.91,2.135,7.3,1.717,9.755-0.931l41.79-43.742 c2.455-2.648,6.626-2.802,9.269-0.342l7.207,6.708c2.643,2.46,2.797,6.638,0.342,9.285L241.862,278.639z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
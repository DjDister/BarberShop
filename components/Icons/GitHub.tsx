import React from "react";

export default function GitHub({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={`${width ?? "32px"}`}
      height={`${height ?? "32px"}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Fill=github">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9995 1C5.92551 1 0.999512 5.82 0.999512 11.767C0.999512 16.522 4.15151 20.558 8.52251 21.981C9.07351 22.08 9.27351 21.748 9.27351 21.462C9.27351 21.207 9.26451 20.529 9.25951 19.632C6.19951 20.282 5.55451 18.188 5.55451 18.188C5.05351 16.944 4.33251 16.613 4.33251 16.613C3.33351 15.945 4.40851 15.959 4.40851 15.959C5.51251 16.035 6.09251 17.068 6.09251 17.068C7.07351 18.714 8.66651 18.238 9.29451 17.963C9.39451 17.268 9.67751 16.793 9.99251 16.523C7.54951 16.252 4.98151 15.328 4.98151 11.203C4.98151 10.028 5.41051 9.067 6.11451 8.314C6.00051 8.042 5.62351 6.947 6.22151 5.465C6.22151 5.465 7.14551 5.176 9.24751 6.568C10.1245 6.329 11.0655 6.211 12.0005 6.206C12.9345 6.211 13.8755 6.329 14.7545 6.568C16.8545 5.176 17.7765 5.465 17.7765 5.465C18.3765 6.947 17.9995 8.042 17.8855 8.314C18.5905 9.067 19.0165 10.028 19.0165 11.203C19.0165 15.339 16.4445 16.249 13.9945 16.516C14.3895 16.848 14.7405 17.505 14.7405 18.509C14.7405 19.948 14.7275 21.109 14.7275 21.462C14.7275 21.75 14.9255 22.085 15.4835 21.98C19.8505 20.554 22.9995 16.521 22.9995 11.767C22.9995 5.82 18.0745 1 11.9995 1Z"
          fill="#343C44"
        />
      </g>
    </svg>
  );
}

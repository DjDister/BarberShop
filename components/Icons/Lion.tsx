import React from "react";

export default function Lion({
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
      height={height || "50px"}
      width={width || "50px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M19.6514 8.66888C22.3714 7.65174 21.9314 5.23459 20.9714 4.16031C20.0114 3.08602 17.1486 2.42888 16.52 5.72602"
          fill="url(#paint0_radial)"
        ></path>{" "}
        <path
          d="M17.1257 5.84608C17.2629 5.12037 17.6114 4.20608 18.4629 3.96608C19.2057 3.76037 20.1029 4.12037 20.5086 4.57179C20.8914 5.00037 21.2229 5.80608 21.04 6.56037C20.8743 7.23465 20.3314 7.74894 19.4343 8.08608"
          fill="url(#paint1_linear)"
        ></path>{" "}
        <path
          d="M4.34859 8.66888C1.62859 7.65174 2.06288 5.23459 3.02859 4.16031C3.99431 3.08602 6.85145 2.42888 7.48002 5.72602"
          fill="url(#paint2_radial)"
        ></path>{" "}
        <path
          d="M6.87433 5.84608C6.73718 5.12037 6.38861 4.20608 5.53718 3.96608C4.79432 3.76037 3.89718 4.12037 3.48575 4.57179C3.1029 5.00037 2.77147 5.80608 2.95432 6.56037C3.12004 7.23465 3.6629 7.74894 4.56004 8.08608"
          fill="url(#paint3_linear)"
        ></path>{" "}
        <path
          d="M12.0001 20.9088C15.1486 20.9088 14.2058 19.1717 15.9715 19.406C17.0287 19.5488 20.9829 19.0745 21.1658 13.6288C21.4001 6.28025 16.6572 3.88596 14.4344 3.4231C12.6515 3.05167 11.3544 3.05167 9.56579 3.4231C7.34293 3.88596 2.60008 6.28025 2.84008 13.6231C3.01722 19.0688 6.97151 19.5431 8.02865 19.4002C9.80579 19.166 8.85151 20.9088 12.0001 20.9088Z"
          fill="url(#paint4_radial)"
        ></path>{" "}
        <path
          d="M6.96 14.0973C5.73714 13.7716 4.70285 12.6516 5.11428 11.1031C5.52571 9.55448 6.94285 7.1202 9.04571 7.6802C11.1486 8.2402 10.5257 11.3202 10.3143 12.1088C10.1029 12.8973 9.32 14.7202 6.96 14.0973Z"
          fill="url(#paint5_radial)"
        ></path>{" "}
        <path
          d="M17.0401 14.0975C18.2629 13.7718 19.2972 12.6518 18.8858 11.1032C18.4744 9.54892 17.0572 7.12035 14.9544 7.68035C12.8515 8.24035 13.4744 11.3204 13.6858 12.1089C13.8972 12.8975 14.6801 14.7204 17.0401 14.0975Z"
          fill="url(#paint6_radial)"
        ></path>{" "}
        <path
          d="M16.9601 10.5376C16.9601 11.4804 16.5429 11.8633 16.0344 11.8633C15.5258 11.8633 15.1086 11.4804 15.1086 10.5376C15.1086 9.89759 15.5258 9.3833 16.0344 9.3833C16.5429 9.3833 16.9601 9.89759 16.9601 10.5376Z"
          fill="url(#paint7_radial)"
        ></path>{" "}
        <path
          d="M14.1144 17.6234L12.023 16.1548L9.93156 17.6234C9.44584 19.2405 10.4287 20.7091 12.023 20.7091C13.6173 20.7091 14.6001 19.2405 14.1144 17.6234Z"
          fill="url(#paint8_linear)"
        ></path>{" "}
        <path
          d="M13.4743 19.0861C13.4743 19.8861 12.8286 20.5318 12.0286 20.5318C11.2286 20.5318 10.5771 19.8861 10.5771 19.0861C10.5771 16.7147 11.2229 15.7661 12.0229 15.7661C12.8229 15.7661 13.4743 16.7261 13.4743 19.0861Z"
          fill="url(#paint9_linear)"
        ></path>{" "}
        <path
          d="M11.8 17.4172C11.8 16.7944 11.9029 16.2915 12.0229 16.2915C12.1429 16.2915 12.2458 16.7944 12.2458 17.4172C12.2458 19.2686 12.1429 20.0115 12.0229 20.0115C11.9029 20.0115 11.8 19.2629 11.8 17.4172Z"
          fill="url(#paint10_linear)"
        ></path>{" "}
        <path
          d="M7.49146 16.1602C7.49146 17.5888 8.12003 18.9716 9.32003 18.9716C10.88 18.9716 12.0286 18.1259 12.0286 16.9945C12.0286 18.1259 13.1715 18.9716 14.7372 18.9716C15.9372 18.9716 16.5657 17.5888 16.5657 16.1602C16.56 12.6116 7.49146 12.7602 7.49146 16.1602Z"
          fill="white"
        ></path>{" "}
        <path
          d="M9.31997 18.9715C10.7371 18.9715 11.8114 18.2744 12 17.3029C12.0114 17.2972 12.0685 17.2858 12.0571 17.3029C12.2457 18.2801 13.3143 18.9715 14.7371 18.9715C15.9371 18.9715 16.5657 17.5886 16.5657 16.1601C16.5657 15.8915 16.4685 15.5944 16.2857 15.3086C16.3428 16.8515 15.76 18.4686 14.8457 18.5029C13.5314 18.5486 12.5485 17.6972 13.0343 17.2458C13.52 16.7886 14.3943 16.0229 13.9314 15.2915C13.9314 15.2915 13.36 15.8801 12.84 16.4344C12.8228 15.6115 10.1371 15.2915 10.1371 15.2915C9.67425 16.0229 10.5485 16.7886 11.0343 17.2458C11.52 17.7029 10.5371 18.5486 9.22282 18.5029C8.30854 18.4744 7.72568 16.8629 7.77711 15.3258C7.59425 15.6058 7.49711 15.8972 7.49711 16.1658C7.49139 17.5886 8.11997 18.9715 9.31997 18.9715Z"
          fill="url(#paint11_linear)"
        ></path>{" "}
        <path
          d="M12.0285 17.3315L12.0113 17.4058C11.8399 17.8858 10.1656 19.1658 8.63989 18.2458C8.63989 18.2458 9.02846 18.9258 9.96561 18.9258C11.2056 18.9258 11.8742 17.7944 12.0285 17.7944C12.1885 17.7944 12.8513 18.9258 14.0913 18.9258C15.0285 18.9258 15.417 18.2458 15.417 18.2458C13.7999 19.2115 12.0285 17.7315 12.0285 17.3315Z"
          fill="url(#paint12_linear)"
        ></path>{" "}
        <path
          d="M12.0287 14.4692C7.1658 14.4692 11.4801 17.5664 12.0287 17.5778C12.5715 17.5664 16.8915 14.4692 12.0287 14.4692Z"
          fill="url(#paint13_linear)"
        ></path>{" "}
        <path
          d="M11.0457 15.4517C11.4286 15.7774 12.6229 15.7774 13.0057 15.4517C13.2057 15.2802 12.4971 14.8917 12.0286 14.8917C11.5543 14.8859 10.8457 15.2802 11.0457 15.4517Z"
          fill="url(#paint14_linear)"
        ></path>{" "}
        <path
          d="M8.89708 10.5376C8.89708 11.4804 8.47994 11.8633 7.97137 11.8633C7.4628 11.8633 7.04565 11.4804 7.04565 10.5376C7.04565 9.89759 7.4628 9.3833 7.97137 9.3833C8.47994 9.3833 8.89708 9.89759 8.89708 10.5376Z"
          fill="url(#paint15_radial)"
        ></path>{" "}
        <path
          d="M7.96575 11.6919C8.47701 11.6919 8.89147 11.1751 8.89147 10.5376C8.89147 9.90009 8.47701 9.3833 7.96575 9.3833C7.4545 9.3833 7.04004 9.90009 7.04004 10.5376C7.04004 11.1751 7.4545 11.6919 7.96575 11.6919Z"
          fill="url(#paint16_linear)"
        ></path>{" "}
        <path
          d="M7.78288 10.4917C7.94383 10.4917 8.07431 10.3279 8.07431 10.126C8.07431 9.92399 7.94383 9.76025 7.78288 9.76025C7.62193 9.76025 7.49146 9.92399 7.49146 10.126C7.49146 10.3279 7.62193 10.4917 7.78288 10.4917Z"
          fill="url(#paint17_radial)"
        ></path>{" "}
        <path
          d="M16.0344 11.6919C16.5456 11.6919 16.9601 11.1751 16.9601 10.5376C16.9601 9.90009 16.5456 9.3833 16.0344 9.3833C15.5231 9.3833 15.1086 9.90009 15.1086 10.5376C15.1086 11.1751 15.5231 11.6919 16.0344 11.6919Z"
          fill="url(#paint18_linear)"
        ></path>{" "}
        <path
          d="M15.8515 10.4917C16.0124 10.4917 16.1429 10.3279 16.1429 10.126C16.1429 9.92399 16.0124 9.76025 15.8515 9.76025C15.6905 9.76025 15.5601 9.92399 15.5601 10.126C15.5601 10.3279 15.6905 10.4917 15.8515 10.4917Z"
          fill="url(#paint19_radial)"
        ></path>{" "}
        <defs>
          {" "}
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(19.2203 1.80111) rotate(180) scale(9.00568)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
          <linearGradient
            id="paint1_linear"
            x1="19.7699"
            y1="5.19037"
            x2="15.4548"
            y2="10.3025"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop></stop> <stop offset="1" stopColor="#8EA5A8"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint2_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(4.78758 1.80111) scale(9.0057)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
          <linearGradient
            id="paint3_linear"
            x1="4.23016"
            y1="5.19037"
            x2="8.54523"
            y2="10.3025"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop></stop> <stop offset="1" stopColor="#8EA5A8"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint4_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12.39 9.94768) rotate(-0.0324374) scale(12.3449 6.6595)"
          >
            {" "}
            <stop offset="0.00418281" stopColor="white"></stop>{" "}
            <stop offset="0.3817" stopColor="#FCFDFD"></stop>{" "}
            <stop offset="0.6851" stopColor="#F2F5F6"></stop>{" "}
            <stop offset="0.9619" stopColor="#E1E9EA"></stop>{" "}
            <stop offset="1" stopColor="#DEE7E8"></stop>{" "}
          </radialGradient>{" "}
          <radialGradient
            id="paint5_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.04717 11.0903) rotate(105.464) scale(3.30873 2.40658)"
          >
            {" "}
            <stop stopColor="#525B63"></stop>{" "}
            <stop offset="0.4545" stopColor="#394046"></stop>{" "}
            <stop offset="1" stopColor="#1F2326"></stop>{" "}
          </radialGradient>{" "}
          <radialGradient
            id="paint6_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15.9516 11.0919) rotate(74.5359) scale(3.30873 2.40658)"
          >
            {" "}
            <stop stopColor="#525B63"></stop>{" "}
            <stop offset="0.4545" stopColor="#394046"></stop>{" "}
            <stop offset="1" stopColor="#1F2326"></stop>{" "}
          </radialGradient>{" "}
          <radialGradient
            id="paint7_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.0575 11.2258) scale(4.18081)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
          <linearGradient
            id="paint8_linear"
            x1="12.0261"
            y1="20.974"
            x2="12.0261"
            y2="16.9659"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#8EA5A8"></stop>{" "}
            <stop offset="0.0464213" stopColor="#849A9D"></stop>{" "}
            <stop offset="0.2885" stopColor="#566365"></stop>{" "}
            <stop offset="0.5133" stopColor="#313839"></stop>{" "}
            <stop offset="0.7139" stopColor="#161A1A"></stop>{" "}
            <stop offset="0.8829" stopColor="#060707"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint9_linear"
            x1="12.015"
            y1="18.6455"
            x2="12.6619"
            y2="22.1818"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FF6688"></stop>{" "}
            <stop offset="1" stopColor="#FB9C9C"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint10_linear"
            x1="12.3341"
            y1="19.6049"
            x2="11.6297"
            y2="16.0974"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FF6688"></stop>{" "}
            <stop offset="1" stopColor="#B30B0B"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint11_linear"
            x1="12.0259"
            y1="14.2423"
            x2="12.0259"
            y2="21.6339"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="white"></stop>{" "}
            <stop offset="0.1494" stopColor="#F8FAFA"></stop>{" "}
            <stop offset="0.6513" stopColor="#E5ECED"></stop>{" "}
            <stop offset="1" stopColor="#DEE7E8"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint12_linear"
            x1="12.0259"
            y1="20.9736"
            x2="12.0259"
            y2="16.9655"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#8EA5A8"></stop>{" "}
            <stop offset="0.0464213" stopColor="#849A9D"></stop>{" "}
            <stop offset="0.2885" stopColor="#566365"></stop>{" "}
            <stop offset="0.5133" stopColor="#313839"></stop>{" "}
            <stop offset="0.7139" stopColor="#161A1A"></stop>{" "}
            <stop offset="0.8829" stopColor="#060707"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint13_linear"
            x1="10.764"
            y1="11.0022"
            x2="12.4792"
            y2="16.925"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#8EA5A8"></stop>{" "}
            <stop offset="0.0464213" stopColor="#849A9D"></stop>{" "}
            <stop offset="0.2885" stopColor="#566365"></stop>{" "}
            <stop offset="0.5133" stopColor="#313839"></stop>{" "}
            <stop offset="0.7139" stopColor="#161A1A"></stop>{" "}
            <stop offset="0.8829" stopColor="#060707"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint14_linear"
            x1="10.9637"
            y1="12.3692"
            x2="13.1676"
            y2="18.6134"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#8EA5A8"></stop>{" "}
            <stop offset="0.0464213" stopColor="#849A9D"></stop>{" "}
            <stop offset="0.2885" stopColor="#566365"></stop>{" "}
            <stop offset="0.5133" stopColor="#313839"></stop>{" "}
            <stop offset="0.7139" stopColor="#161A1A"></stop>{" "}
            <stop offset="0.8829" stopColor="#060707"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint15_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(7.99341 11.2258) scale(4.1808)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
          <linearGradient
            id="paint16_linear"
            x1="7.51527"
            y1="9.01666"
            x2="6.72913"
            y2="6.37603"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop></stop> <stop offset="1" stopColor="#8EA5A8"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint17_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(7.04105 9.60496) scale(2.22024)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
          <linearGradient
            id="paint18_linear"
            x1="15.5792"
            y1="9.01666"
            x2="14.7931"
            y2="6.37603"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop></stop> <stop offset="1" stopColor="#8EA5A8"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint19_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15.105 9.60496) scale(2.22023)"
          >
            {" "}
            <stop stopColor="#84909D"></stop>{" "}
            <stop offset="0.2667" stopColor="#5E6770"></stop>{" "}
            <stop offset="0.7694" stopColor="#1B1D20"></stop>{" "}
            <stop offset="1"></stop>{" "}
          </radialGradient>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
}

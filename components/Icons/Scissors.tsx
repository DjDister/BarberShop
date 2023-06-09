import React from "react";

export default function Scissors({
  width,
  height,
  fill,
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      fill={fill || "#000000"}
      width={`${width ?? "32px"}`}
      height={`${height ?? "32px"}`}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-51.2 -51.2 614.40 614.40"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <path
          transform="translate(-51.2, -51.2), scale(19.2)"
          d="M16,29.541929008904845C17.99324538816923,30.238750469190226,20.361388699816118,29.919048081538797,22.22479270550855,28.925915242215904C24.079345274287967,27.937499926654176,25.29994840923924,26.02614479546463,26.17853121456833,24.11710778152714C26.97801307519359,22.379946008444687,26.587576337136063,20.37802344096422,27.016401790044604,18.514421819837647C27.446071810831732,16.64714985205369,29.176187793886335,14.95760395153575,28.714069046806394,13.098096707120648C28.25031134069436,11.231994499370396,25.740636334110906,10.682787544884368,24.672718574990963,9.083737727178585C23.480766730204238,7.298965104152838,23.83399201239431,4.56887845848041,22.138814637880802,3.2526200548490554C20.484431758576715,1.9680374498383106,18.02444825110403,1.8122618536828052,16,2.349611329380423C14.017538712983686,2.8758162015415625,12.807595745437368,4.804463558345276,11.2526967709526,6.142123268866124C10.025673138142345,7.197716014376217,9.161168498499224,8.61322547546677,7.76576604170781,9.433417540430153C5.474986088969734,10.77989613566873,2.011632885681033,10.276824473711217,0.5001664072805347,12.462264128328545C-0.8454750848631527,14.407936308198092,-0.2191021180504782,17.34200545474739,0.8295362398836534,19.46255935671881C1.8614716436925118,21.549336586039633,4.085291582162794,22.76715039770559,6.138569301131154,23.86422855865591C7.803667546658685,24.753900181802326,9.93305324252569,24.258818099140708,11.569133808080293,25.200788452870256C13.38379637076907,26.245577060512126,14.023365826159585,28.850914686413144,16,29.541929008904845"
          fill="#396e3d"
        ></path>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style type="text/css"> </style>{" "}
        <g>
          {" "}
          <path d="M489.656,138.962c-29.791-29.783-78.087-29.79-107.878,0c-14.732,14.74-22.162,34-22.316,53.303 c-0.03,3.264-0.023,5.081-1.196,8.02c-1.182,2.939-4.838,6.078-7.902,8.264c-20.855,14.814-39.804,22.524-56.361,25.942 c-1.61,26.667,10.007,42.47,10.582,43.23l2.297,2.88c16.283-7.207,39.095-16.01,58.701-25.308 c5.767-2.74,12.185-4.992,16.372-4.261c4.195,0.731,10.9,5.383,17.103,8.788c28.963,15.878,66.057,11.558,90.597-12.982 C519.446,217.048,519.446,168.76,489.656,138.962z M464.872,222.055c-16.099,16.114-42.211,16.114-58.31,0 c-16.106-16.099-16.106-42.211,0-58.31c16.099-16.099,42.211-16.099,58.31,0.007C480.971,179.844,480.971,205.956,464.872,222.055z "></path>{" "}
          <path d="M303.455,161.64c2.171-3.064,5.318-6.713,8.256-7.902c2.939-1.181,4.756-1.174,8.02-1.204 c19.311-0.147,38.564-7.584,53.304-22.316c29.79-29.791,29.79-78.08,0-107.87c-29.791-29.797-78.087-29.797-107.87,0 c-24.54,24.54-28.866,61.634-12.982,90.597c3.404,6.196,8.056,12.901,8.788,17.095c0.731,4.195-1.529,10.605-4.261,16.373 c-13.411,28.284-25.802,63.25-33.822,75.642c0,0-179.303,208.458-201.169,236.159c-21.866,27.7-26.238,40.816-17.495,49.559 c8.744,8.751,21.874,4.379,49.567-17.487C81.483,468.42,289.941,289.11,289.941,289.11S249.118,238.095,303.455,161.64z M289.941,47.132c16.099-16.106,42.211-16.106,58.311,0c16.099,16.099,16.099,42.204,0,58.302 c-16.1,16.114-42.212,16.114-58.311,0.008C273.842,89.336,273.842,63.231,289.941,47.132z M247.671,284.738 c-5.642,5.642-14.777,5.642-20.411,0c-5.636-5.642-5.636-14.77,0-20.412c5.634-5.627,14.769-5.627,20.411,0 C253.305,269.968,253.298,279.096,247.671,284.738z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

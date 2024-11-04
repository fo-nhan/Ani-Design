import React from "react";

const ReactLove = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      style={{ ...(props?.style ? props.style : {}) }}
    >
      <g>
        <path
          fill="#f43756"
          d="M50 10c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40-17.91-40-40-40zm15.77 43.91c-2.38 2.87-5.81 5.79-9.77 9.17-1.35 1.15-2.89 2.46-4.48 3.85-.42.37-.96.57-1.52.57s-1.1-.2-1.52-.57c-1.59-1.39-3.13-2.7-4.48-3.85-3.96-3.38-7.39-6.3-9.77-9.17-2.66-3.21-3.9-6.26-3.9-9.58 0-3.24 1.11-6.22 3.12-8.4 2.04-2.21 4.83-3.43 7.87-3.43 2.27 0 4.35.72 6.18 2.14.93.71 1.76 1.59 2.5 2.61a12.7 12.7 0 0 1 2.5-2.61c1.83-1.42 3.91-2.14 6.18-2.14 3.04 0 5.83 1.22 7.87 3.43 2.01 2.18 3.12 5.16 3.12 8.4 0 3.32-1.24 6.37-3.9 9.58z"
          opacity="1"
          data-original="#f43756"
        />
      </g>
    </svg>
  );
};

export default ReactLove;
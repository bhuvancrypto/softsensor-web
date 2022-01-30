import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="347"
      height="59"
      fill="none"
      viewBox="0 0 347 59"
    >
      <path fill="url(#pattern0)" d="M0 0H347V59H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00219 0 0 .01287 0 -.002)"
            xlinkHref="#image0_834_8"
          ></use>
        </pattern>
        <image
          id="image0_834_8"
          width="457"
          height="78"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;

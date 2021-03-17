import React from "react";

const ArrowIcon = ({width = 24, height = 24}) =>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
        <path fill="none" fill-rule="evenodd" stroke="#666D7F" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="1.5" d="M7 10l5 5 5-5"/>
    </svg>

export default React.memo(ArrowIcon);
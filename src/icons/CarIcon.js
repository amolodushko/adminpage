import React from "react";

const CarIcon = ({color, width = 16, height = 14}) =>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 11" width={width} height={height}>
        <g>
            <path fill={color} fill-rule="evenodd"
                  d="M11.443 7.282a1.04 1.04 0 1 1 .001-2.081 1.04 1.04 0 0 1 0 2.081zm-9.362 0a1.04 1.04 0 1 1 0-2.081 1.04 1.04 0 0 1 0 2.081zM3.433 1.04h6.658l1.092 2.601H2.341l1.092-2.6zm10.09 4.161a1.561 1.561 0 0 0-1.196-1.508L10.881.323A.52.52 0 0 0 10.403 0H3.12a.519.519 0 0 0-.458.291L1.196 3.683A1.56 1.56 0 0 0 0 5.2v3.641h1.04v1.04a1.04 1.04 0 0 0 2.08 0v-1.04h7.283v1.04a1.04 1.04 0 0 0 2.08 0v-1.04h1.04v-3.64z"/>
        </g>
    </svg>

export default CarIcon;
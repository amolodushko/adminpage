import React from "react";
import ProgressBar from "./ProgressBar";
import {useAppContext} from "../utils/AppContext";

const CONFIG = {
    ["available"]: {
        color: "#5eebc8",
        label: "Available"
    },
    ["regular"]: {
        color: "#0cadfe",
        label: "Regular rides"
    },
    ["carpool"]: {
        color: "#b27cf9",
        label: "Carpool"
    },
    ["def"]: {
        color: "#b27cf9",
        label: "Unknown"
    }
};

const ProgressRenderer = item => {
    const config = CONFIG[item.value] || CONFIG.def;
    const {barsMode} = useAppContext();

    return barsMode ? <ProgressBar {...config} {...item}/> : <div>{config.label} {item.count}</div>
};

export default ProgressRenderer;

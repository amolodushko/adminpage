import React from "react";
import ProgressBar from "./ProgressBar";

const data = ["Available","Regular rides", "Carpool"];

const UtilizationEmptyView = () => <>
    {data.map(label=><ProgressBar key={label} label={label} pending={true}/>)}
</>;

export default UtilizationEmptyView;


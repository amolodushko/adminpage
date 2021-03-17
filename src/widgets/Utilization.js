import React from "react";
import {Card, CardTitle, CardContent} from "../styled/index";
import useFetch from "../hooks/useFetch";
import useSum from "../hooks/useSum";
import ProgressRenderer from "./ProgressRenderer";
import UtilizationEmptyView from "./UtilizationEmptyView";

const Utilization = () => {
    const [data] = useFetch(undefined);
    const sum = useSum(data);

    return <Card>
        <CardTitle>Utilization {sum ? `(${sum})` : ""}</CardTitle>
        <CardContent>
            {
                data ? (Object.entries(data).map(([k, count]) =>
                        <ProgressRenderer key={k} value={k} count={count}/>))
                    : <UtilizationEmptyView/>
            }
        </CardContent>
    </Card>
};

export default Utilization;
import {useEffect, useState} from "react";

export default function (obj = {}) {
    const [sum, setSum] = useState(0);
    useEffect(() => {
        setSum(Object.values(obj).reduce((r, i) => r + i, 0))
    }, [obj]);

    return sum;
};

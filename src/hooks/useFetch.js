import {useEffect, useState, useRef} from "react";

const MOCK = [
    {"available": 40, "regular": 25, "carpool": 35},
    {"available": 20, "regular": 2, "carpool": 12}
];

export default function (defaultValue) {
    const timer = useRef();
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        if (timer.current) {
            clearInterval(timer.current);
        }

        timer.current = setInterval(() => {
            setData(MOCK[Date.now() % 2]);
        }, 2500);


        return () => clearInterval(timer.current);
    }, []);

    return [data];
};

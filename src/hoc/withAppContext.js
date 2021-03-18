import React, {useState} from "react";
import AppContext from "../utils/AppContext";

const withAppContext = WrappedComponent => props => {
    const [barsMode, setBarsMode] = useState(true);

    return <AppContext.Provider value={{barsMode, setBarsMode}}>
        <WrappedComponent {...props}/>
    </AppContext.Provider>
};

export default withAppContext;
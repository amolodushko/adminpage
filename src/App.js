import React, {useState} from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import AppContext from "./utils/AppContext";

const Wrapper = styled.div`
  display: flex;  
  flex: 1;
  flex-direction: row;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function App() {
    const [barsMode, setBarsMode] = useState(true);
    return <AppContext.Provider value={{barsMode, setBarsMode}}> <Wrapper>
        <Navigation/>
        <Map/>
        <Sidebar/>
    </Wrapper>
    </AppContext.Provider>
}

export default App;

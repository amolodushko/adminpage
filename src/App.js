import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import withAppContext from "./hoc/withAppContext";
import compose from "./utils/compose";

const Wrapper = styled.div`
  display: flex;  
  flex: 1;
  flex-direction: row;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const App = () => <Wrapper>
    <Navigation/>
    <Map/>
    <Sidebar/>
</Wrapper>;

export default compose(withAppContext)(App);

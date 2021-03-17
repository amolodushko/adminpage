import React from "react";
import styled from "styled-components";
import Switch from "../widgets/Switch";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const SidePanelHeader = () => <Wrapper><Switch/></Wrapper>;

export default React.memo(SidePanelHeader);
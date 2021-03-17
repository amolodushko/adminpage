import React, {useState} from "react";
import styled from "styled-components";
import Utilization from "../widgets/Utilization";
import SidePanelHeader from "./SidePanelHeader";
import CollapseButton from "../components/CollapseButton";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: ${({collapsed}) => !!collapsed ? 33 : 382}px;
    overflow: auto;
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media (max-width: 600px) {
        width: auto;
        flex-direction: column;
        min-height: ${({collapsed}) => !!collapsed ? 33 : 382}px;
    }     
`;

const Panel = styled.div`
  display: flex;
  flex: 1; 
  padding: 25px 20px 20px 19px;
  backdrop-filter: blur(2px);
  background-color: rgba(237,240,245, 0.8);  
  flex-direction: column;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(collapsed => !collapsed);

    if (collapsed) {
        return <Wrapper collapsed={collapsed}>
            <CollapseButton collapsed={collapsed} onClick={toggle}/>
            <Panel/>
        </Wrapper>
    }

    return <Wrapper>
        <CollapseButton collapsed={collapsed} onClick={toggle}/>
        <Panel collapsed={collapsed}>
            <SidePanelHeader/>
            <Utilization/>
        </Panel>
    </Wrapper>

};

export default React.memo(Sidebar);
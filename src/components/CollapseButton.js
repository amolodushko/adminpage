import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import styled from "styled-components";


const ToggleButton = styled.div`
  width: 23px;
  height: 43px;
  margin: 20px 0 0 0;
  border-radius: 3px 0px 0px 3px;
  box-shadow: 0 0 8px 0 rgba(204, 212, 230, 0.3);
  border: 1px solid #e4e6eb;
  border-right-width: 0;
  background-color: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: center; 
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  & > svg {
    transform: rotate(${({collapsed}) => collapsed ? 90 : -90}deg);
  }
  
    @media (max-width: 600px) {
        flex-direction: column;
        align-self: center;
        border-right-width: 1px;
        border-bottom-width: 0;
        width:43px ;
        height: 23px;
        border-radius: 3px 3px 0px 0px;
        margin-top: 0;
        
         & > svg {
            transform: rotate(${({collapsed}) => collapsed ? 180 : 360}deg);
            }
    }
`;

const CollapseButton = ({collapsed, onClick}) => <ToggleButton collapsed={collapsed}
                                                               onClick={onClick}><ArrowIcon/></ToggleButton>

export default React.memo(CollapseButton);


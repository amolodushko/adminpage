import React from "react";
import styled from "styled-components";
import CarIcon from "../icons/CarIcon";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    &:last-child {
    margin-bottom: 0;
    }
`;

const Label = styled.div`
    color: #${({pending}) => pending ? "f3f5fa" : "666d7f"};
    font-size: 12px;
    margin-bottom: 11px;
`;

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Progress = styled.div`
    display: flex;
    flex: 1;
    background: #f3f5fa;
    height: 2px;
    margin: 0 12px;
    position: relative;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: ${({count}) => count}%;
        background: ${({color}) => color};
    }
`;

const Count = styled.div`
    color: #666d7f;
    font-weight: bold;
    font-size: 12px;
`;

const ProgressBar = ({label, Icon = CarIcon, count, color = "#f3f5fa", pending = false}) => {
    return <Wrapper>
        <Label pending={pending}>{label}</Label>
        <ProgressWrapper>
            <Icon color={color}/>
            <Progress color={color} count={count}/>
            <Count>{count}</Count>
        </ProgressWrapper>
    </Wrapper>;
};

export default ProgressBar;

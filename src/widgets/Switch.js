import React, {useReducer, useCallback} from "react";
import styled from "styled-components";
import {useAppContext} from "../utils/AppContext";

const ButtonsWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    border: thin solid #acaebf;
`;

const switchReducer = (state, action) => {
    if (action === "on") {
        return true;
    } else if (action === "off") {
        return false;
    }
    return state;
};

const Button = styled.div`
  font-size: 12px;
  padding: 5px 17px;
  color: ${({active}) => active ? "#ffffff" : "#acaebf"};
  background: ${({active}) => active ? "#acaebf" : "transparent"};
  cursor: ${({active}) => active ? "default" : "pointer"};
`;

const SwitchViewMode = () => {
    const {barsMode, setBarsMode } = useAppContext();

    const on = () => setBarsMode(true);
    const off = () =>  setBarsMode(false);

    return <ButtonsWrapper>
        <Button onClick={on} active={barsMode}>Graph</Button>
        <Button  onClick={off}  active={!barsMode}>Log</Button>
    </ButtonsWrapper>
};


export default SwitchViewMode;
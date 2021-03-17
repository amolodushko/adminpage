import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 50px;
    box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #2b2f42;  
    
    @media (max-width: 600px) {
        width: auto;
        height: 50px;
    }
`;

const Navigation = () => <Wrapper/>;

export default React.memo(Navigation);
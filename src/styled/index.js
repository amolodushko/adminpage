import styled from "styled-components";

const Card = styled.div`
  margin: 24px 0 10px 1px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #edeff5;
  background-color: rgba(255, 255, 255, 0.95);
`;

const CardTitle = styled.div`
  font-size: 12px;
  color: #c6c8d8;
  text-transform: uppercase;
  padding: 13px 20px 9px 20px;
  border-bottom: 1px solid #f5f7fa;
`;

const CardContent = styled.div`
    padding: 20px;
`;

export {Card, CardTitle, CardContent};
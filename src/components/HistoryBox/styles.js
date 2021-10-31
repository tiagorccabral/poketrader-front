import styled from "styled-components";

export const TradeItemBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80%;
  align-items: center;
  justify-content: center;
`;

export const TradeItemMetadataContainer = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  padding: 1px;
`;

export const TradeItemMetadataText = styled.span`
  font-size: 12px;
  padding: 5px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TradeItemListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-content: center;
`;

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
`;

export const TradeItemMetadataText = styled.span`
  font-size: 12px;
`;
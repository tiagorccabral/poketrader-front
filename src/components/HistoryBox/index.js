import React from 'react';

import { TradeItemBox, TradeItemMetadataContainer, TradeItemMetadataText } from './styles';

function HistoryBox(props) {
  const { trade } = props;

  const dateFormat = (date) => {
    date = new Date(date)
    return date.toUTCString()
  }

  return (
    <TradeItemBox>
      <TradeItemMetadataContainer>
        <TradeItemMetadataText>Resultado: {trade.result ? 'Troca justa' : 'Troca injusta'}</TradeItemMetadataText>
        <TradeItemMetadataText>Dia: {dateFormat(trade.date)}</TradeItemMetadataText>
      </TradeItemMetadataContainer>
    </TradeItemBox>
  );
}

export default HistoryBox;
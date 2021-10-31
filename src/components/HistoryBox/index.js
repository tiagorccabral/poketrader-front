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
        <TradeItemMetadataText><strong>Resultado: &nbsp;</strong>
          {trade.result ? 'Troca justa' : 'Troca injusta'}
        </TradeItemMetadataText>
        <TradeItemMetadataText><strong>Dia: &nbsp;</strong>
          {dateFormat(trade.date)}
        </TradeItemMetadataText>
      </TradeItemMetadataContainer>
    </TradeItemBox>
  );
}

export default HistoryBox;
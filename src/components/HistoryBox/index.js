import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Container, TradeItemListContainer, TradeItemMetadataContainer, TradeItemMetadataText, TradeItemBox
} from './styles';

function HistoryBox() {

  async function fetchTradeHistory() {
    try {
      const data = await axios.get('http://localhost:3000/v1/trade_history')
      setTrades(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTradeHistory();
  }, []);

  const [trades, setTrades] = useState([]);

  const dateFormat = (date) => {
    date = new Date(date)
    return date.toUTCString()
  }

  return (
    <Container>
      <TradeItemListContainer>
        {
          trades.map(trade => {
            return (
              <TradeItemBox>
                <TradeItemMetadataContainer>
                  <TradeItemMetadataText>Resultado: {trade.result ? 'Troca justa' : 'Troca injusta'}</TradeItemMetadataText>
                  <TradeItemMetadataText>Dia: {dateFormat(trade.date)}</TradeItemMetadataText>
                </TradeItemMetadataContainer>
              </TradeItemBox>
            )
          })
        }
      </TradeItemListContainer>

    </Container>
  );
}

export default HistoryBox;
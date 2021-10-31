import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { apiEndPoint } from '../../utils/globals'
import HistoryBox from '../HistoryBox';

import {
  Container, TradeItemListContainer
} from './styles';

function HistoryList() {

  async function fetchTradeHistory() {
    try {
      const data = await axios.get(`${apiEndPoint}/trade_history`)
      setTrades(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTradeHistory();
  }, []);

  const [trades, setTrades] = useState([]);

  return (
    <Container>
      <TradeItemListContainer>
        {
          trades.map(trade => {
            return (
              <HistoryBox trade={trade} />
            )
          })
        }
      </TradeItemListContainer>

    </Container>
  );
}

export default HistoryList;
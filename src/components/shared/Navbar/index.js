import React from 'react';

import { Container, BrandName, ItemsList, Item } from './styles';

function Navbar() {
  return (
    <Container>
      <BrandName to="/">PokeTrader</BrandName>
      <ItemsList>
        <Item to="/history">Histórico</Item>
      </ItemsList>
    </Container>
  );
}

export default Navbar;
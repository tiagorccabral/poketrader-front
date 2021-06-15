import React from 'react';

import { Container, BrandName } from './styles';

function Navbar() {
  return (
    <Container>
      <BrandName to="/">PokeTrader</BrandName>
    </Container>
  );
}

export default Navbar;
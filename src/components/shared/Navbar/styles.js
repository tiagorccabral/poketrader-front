import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  background-color: #ddd;
  display: flex;
  align-items: center;
`;

export const BrandName = styled(Link)`
  text-decoration: none;
  color: red;
  font-size: 1.6em;
  margin-left: 1em;
`;

export const ItemsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items:center;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 1.3em;
  margin-left: 1em;
`;
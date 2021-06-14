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
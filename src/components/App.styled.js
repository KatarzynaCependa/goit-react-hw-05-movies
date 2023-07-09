import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 15px;
  border-bottom: 1px solid lightgray;
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 800px;
`;

export const HeaderNavLink = styled(NavLink)`
  padding: ${(p) => p.theme.space[2]}px;
  color: ${(p) => p.theme.colors.text};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.small};
  border: ${(p) => p.theme.borders.medium} ${(p) => p.theme.colors.purple};
  text-decoration: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: border-bottom-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-bottom-color: ${(p) => p.theme.colors.hoverDeepPurple};
  }
  &.active {
    border-bottom-color: ${(p) => p.theme.colors.deepPurple};
  }
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderNavLink = styled(NavLink)`
  padding: ${(p) => p.theme.space[2]}px;

  color: ${(p) => p.theme.colors.blackText};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;

  border-radius: ${(p) => p.theme.radii.small};
  border: 4px solid transparent;
  background-color: ${(p) => p.theme.colors.purple};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-bottom-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-bottom-color: ${(p) => p.theme.colors.hoverDeepPurple};
    background-color: ${(p) => p.theme.colors.hoverPurple};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  &.active {
    border-bottom-color: ${(p) => p.theme.colors.deepPurple};
    border-bottom-width: 4px;
    background-color: ${(p) => p.theme.colors.hoverPurple};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

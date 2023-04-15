import { NavContainer, HeaderNavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavContainer>
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/tweets">Tweets</HeaderNavLink>
    </NavContainer>
  );
};

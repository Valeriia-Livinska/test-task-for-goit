import { NavContainer, HeaderNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavContainer>
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/tweets">Tweets</HeaderNavLink>
    </NavContainer>
  );
};

export default Navigation;

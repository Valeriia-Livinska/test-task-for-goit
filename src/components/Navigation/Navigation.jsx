import { HeaderNavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/tweets">Tweets</HeaderNavLink>
    </nav>
  );
};

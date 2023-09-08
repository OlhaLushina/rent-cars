import { Nav, NavLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </Nav>
  );
};

import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">signup</NavLink>
      <Outlet />
    </nav>
  );
};

export default Navbar;

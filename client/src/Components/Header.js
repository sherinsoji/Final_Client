import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { logout } from "../Features/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handlelogout = async () => {
  dispatch(logout());
  //ensure that the state update from the logout action has been processed before proceeding to the next step.
  await new Promise((resolve) => setTimeout(resolve, 100));
  navigate("/login"); //redirect to login page route.
};

  return (
    <div>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handlelogout}>
              Logout
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;

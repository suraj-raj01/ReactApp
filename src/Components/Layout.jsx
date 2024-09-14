import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modecolor, modecolor1 } from "../Slice";
const Layout = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.bgcolor.color);
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="home" id="header">
            REACT-APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="counterapp">
                CounterApp
              </Nav.Link>
              <Nav.Link as={Link} to="themeapp">
                ThemeApp
              </Nav.Link>
              <Nav.Link as={Link} to="todolist">
                ToDoList
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="home">
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="themeapp">
                  ThemeApp
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="todolist">
                  ToDoList
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="counterapp">
                  CounterApp
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div style={{ display: "flex", gap: "5px" }}>
                <Nav.Link
                  onClick={() => {
                    dispatch(modecolor());
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                    alt=""
                    height="25px"
                  />
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(modecolor1());
                  }}
                >
                  <img
                    src="https://static.thenounproject.com/png/4808961-200.png"
                    alt=""
                    height="25px"
                  />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="outlet" style={{ backgroundColor: mode }}>
        <Outlet />
      </div>
      <div id="footer">
        Everything is reserved by Copyright
        <br />
        SURAJKUMAR ©www.react.com
      </div>
    </>
  );
};
export default Layout;

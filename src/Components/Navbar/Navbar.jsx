import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from 'react-router-dom';

function CustomNav() {
  const navigate = useNavigate();
  const navlinks = [
    {name: "Home", link: "/"},
    {name: "Gallery", link: "/gallery/"},
    {name: "Book event", link: "/events/"},
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Naina Event</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="align-items-center">
            {
              navlinks.map((navLink, index)=><NavLink className="nav-link" key={index} to={navLink.link}>{navLink.name}</NavLink>)
            }

            <Nav.Link><button className='btn btn-outline-info' onClick={()=>navigate("/login/")}>Login</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
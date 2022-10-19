import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

export default function NavbarHome(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">TP 1 et 2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/produits">
                <Nav.Link>Produits</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    )
}
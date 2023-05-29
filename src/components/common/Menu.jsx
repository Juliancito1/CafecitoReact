import { Navbar, Nav, Container } from "react-bootstrap";
const Menu = () => {
    return (
        <Navbar bg="danger" className="text-danger" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="#home">Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light" href="#home">Inicio</Nav.Link>
            <Nav.Link className="text-light" href="#link">Registro</Nav.Link>
            <Nav.Link className="text-light" href="#link">Administrador</Nav.Link>
            <Nav.Link className="text-light" href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;
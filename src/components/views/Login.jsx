import { Form , Button , Container } from "react-bootstrap";
const Login = () => {
    return (
        <Container className="mainPage mt-5">
            <h2 className="display-4 text-center">Iniciar Sesión</h2>
            <hr/>
            <Form>
            <Form.Group className="mb-3" controlId="formProducto">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Juan Perez" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la contraseña" />
            </Form.Group>
            <Button variant="primary">Ingresar</Button>
            </Form>
        </Container>
    );
};

export default Login;
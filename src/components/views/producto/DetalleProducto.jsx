import { Container , Card , Row , Col } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container className="mainPage mt-5">
            <Card>
                <Row>
                <Col lg={6}>
                <Card.Img variant="left" src="src/assets/Medialunas.png" className="img-fluid" />
                </Col>
                <Col lg={6}>
                <Card.Body>
                <Card.Title>DOCENA DE MEDIALUNAS</Card.Title>
                <hr />
                <Card.Text>
                Perfectas para acompañar con un rico mate 
                </Card.Text>
                <Card.Text>
                    <p><span className="text-danger">Categoria:</span> Dulce</p>
                </Card.Text>
                <Card.Text>
                    <p><span className="text-danger">Precio:</span> $1.050,00</p>
                </Card.Text>
            </Card.Body>
                </Col>
                </Row>
    </Card>
        </Container>
    );
};

export default DetalleProducto;
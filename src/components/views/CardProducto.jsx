import { Card, Col, Button } from 'react-bootstrap';

const CardProducto = () => {
    return (
        <Col md={4} lg={4}>
            <Card>
                <Card.Img variant="top" src="src/assets/Medialunas.png"/>
                <Card.Body>
                    <Card.Title>Medialunas</Card.Title>
                    <Card.Text>
                    $1080
                    </Card.Text>
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;
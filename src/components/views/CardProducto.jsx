import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProducto = ({producto}) => {
    return (
        <Col md={4} lg={4}>
            <Card>
                <Card.Img className='imgCard' src={producto.imagen}/>
                <Card.Body>
                    <Card.Title>{producto.nombreProducto}</Card.Title>
                    <Card.Text>
                    {'$'+ producto.precio}
                    </Card.Text>
                    <Link className='btn btn-primary' to={`/detalle/${producto._id}`}>Ver Detalle</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;
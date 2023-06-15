import { Container , Card , Row , Col } from "react-bootstrap";
import { obtenerProducto } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
          if(respuesta)
          {
            console.log(respuesta)
            setProducto(respuesta)
          }
          else{
            Swal.fire(
              'Se produjo un error al intentar cargar los datos',
              `Intente realizar esta operacion mas tarde`,
              'error');
          }
        });},[id]);
    return (
        <Container className="mainPage mt-5">
            <Card>
                <Row>
                <Col lg={6}>
                <Card.Img variant="left" src={producto?.imagen} className="img-fluid" />
                </Col>
                <Col lg={6}>
                <Card.Body>
                <Card.Title>{producto?.nombreProducto}</Card.Title>
                <hr />
                <Card.Text>
                {producto?.descripcion}
                </Card.Text>
                <Card.Text>
                    <span className="text-danger">Categoria:</span> {producto?.categoria}
                </Card.Text>
                <Card.Text>
                    <span className="text-danger">Precio:</span> {producto?.precio}
                </Card.Text>
            </Card.Body>
                </Col>
                </Row>
    </Card>
        </Container>
    );
};

export default DetalleProducto;
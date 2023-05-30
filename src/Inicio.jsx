import { Container, Row } from "react-bootstrap";
import CardProducto from "./components/CardProducto";

const Inicio = () => {
    return (
        <section>
        <div>
        <img
          className="d-block w-100 img-Banner"
          src="src/assets/Cafeteria-banner.png"
          alt="Imagen cafeteria"
        />
        </div>
        <Container>
            <h2 className="display-4">Nuestros productos</h2>
            <hr />
            <Row className="container my-5">
                <CardProducto></CardProducto>
            </Row>
        </Container>
        </section>

    );
};

export default Inicio;
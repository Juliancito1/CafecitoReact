import { Button, Container } from "react-bootstrap";

const Error404 = () => {
    return (
        <section className="">
            <Container>
            <img src="src/assets/404.gif" className="d-block w-100 img-error" alt="" />
            </Container>
            <div className="d-flex justify-content-center my-5">
            <Button href="/home" size="lg" variant="primary">Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;
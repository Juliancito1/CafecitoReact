import { Container, Form , Button } from "react-bootstrap";
const EditarProducto = () => {
    return (
        <Container>
            <h2 className="display-4">Editar Producto</h2>
            <hr/>
            <Form>
            <Form.Group className="mb-3" controlId="formProducto">
            <Form.Label>Producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cafe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="text" placeholder="Ej: 50" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProducto">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control type="text" placeholder="Ej: https://www.clarin.com/img/2013/10/13/las-medialunas-un-clasico-que___r1mfUtu3mg_1256x620.jpg"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select aria-label="Categoria">
            <option>Seleccione una Categoria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
            <option value="cafe">Cafe</option>
            </Form.Select>
            </Form.Group>
            <Button variant="primary">Guardar</Button>
            </Form>
        </Container>
    );
};

export default EditarProducto;
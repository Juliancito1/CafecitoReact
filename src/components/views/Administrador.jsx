import { Table , Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
const Administrador = () => {
    return (
        <section className="table-responsive container mainPage mt-5">
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <ItemProducto></ItemProducto>
            </Table>
        </section>
    );
};

export default Administrador;
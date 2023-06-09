import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Administrador = () => {
   
    const [productos,setProductos] = useState([])

    useEffect(() => {
        obtenerProductos().then((respuesta)=>{
          if(respuesta)
          {
            console.log(respuesta)
            setProductos(respuesta)
          }
          else{
            Swal.fire(
              'Se produjo un error al intentar cargar los datos',
              `Intente realizar esta operacion mas tarde`,
              'error');
          }
            //todo: resolver la situacion cuando no puedo realizar la conexion a la API
        })
    },[])

    return (
        <section className="container mainPage mt-5">
            <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4">Productos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crear'>
            Agregar
          </Link>
        </div>
        <hr></hr>
        <section className="table-responsive">

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
      <tbody>
        {
           productos.map((producto) => <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>)
        }
      </tbody>
            </Table>
        </section>
        </section>
    );
};

export default Administrador;
import { Container, Row } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";

const Inicio = () => {

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
        <section className="mainPage">
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
                {
                  productos.map((producto) =>  <CardProducto key={producto.id} producto={producto}></CardProducto>) 
                }
            </Row>
        </Container>
        </section>

    );
};


export default Inicio;
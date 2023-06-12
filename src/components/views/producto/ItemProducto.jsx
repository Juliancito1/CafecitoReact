import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ItemProducto = ({producto}) => {
  const borrarProducto = () => {
    Swal.fire({
      title: '¿Esta seguro de eliminar el producto?',
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Producto Eliminado',
          `El producto ${producto.nombreProducto} fue eliminado`,
          'success'
        )
        //aqui tengo que hacer la peticion delete
      }
    })
  }

    return (
        <tr>
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>{producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td><Link className='btn btn-warning' to={'/administrador/editar'}>Editar</Link>
          <Button className='ms-md-2' variant='danger' onClick={borrarProducto}>Borrar</Button></td>
        </tr>
    );
};

export default ItemProducto;
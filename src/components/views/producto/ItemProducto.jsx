import React from 'react';
import { Button, Table } from 'react-bootstrap';
const ItemProducto = () => {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>Docena de Medialunas</td>
          <td>$1.050,00</td>
          <td>Perfectas para acompañar con un rico mate</td>
          <td>URL</td>
          <td>Dulce</td>
          <td><Button variant='warning'>Editar</Button>
          <Button className='ms-md-2' variant='danger'>Borrar</Button></td>
        </tr>
      </tbody>
    );
};

export default ItemProducto;
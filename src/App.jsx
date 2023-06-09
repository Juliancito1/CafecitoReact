import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import EditarProducto from './components/views/producto/EditarProducto';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import { useState } from 'react';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';
import DetalleProducto from './components/views/producto/DetalleProducto';

function App() {
  const usuariodelSesionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {};
  const[usuarioLogueado,setUsuarioLogueado] = useState(usuariodelSesionStorage)

  return (
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
         <Route exact path="/registro" element={<Registro></Registro>}></Route>
         <Route exact path="/detalle/:id" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route exact path="/administrador/*" element={
        <RutasProtegidas>
          <RutasAdministrador></RutasAdministrador>
        </RutasProtegidas>}></Route>
        
        <Route exact path="/administrador/editar" element={<EditarProducto></EditarProducto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Administrador from './components/views/Administrador';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import DetalleProducto from './components/views/producto/detalleProducto';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        {/* <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route> */}
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crear" element={<CrearProducto></CrearProducto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App

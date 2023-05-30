import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/Inicio';
import Error404 from './components/Error404';
import Administrador from './components/Administrador';
function App() {

  return (
    <>
      <Menu></Menu>
      <section className='mainPage my-5'>
        {/* <Inicio></Inicio> */}
        {/* <Error404></Error404> */}
        <Administrador></Administrador>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App

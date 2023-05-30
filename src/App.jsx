import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './Inicio';
import Error404 from './Error404';
function App() {

  return (
    <>
      <Menu></Menu>
      <section className='mainPage my-5'>
        {/* <Inicio></Inicio> */}
        <Error404></Error404>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/Inicio';
function App() {

  return (
    <>
      <Menu></Menu>
      <section className='mainPage'>
        <Inicio></Inicio>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App

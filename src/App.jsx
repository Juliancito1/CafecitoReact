import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import { Container } from 'react-bootstrap';
import Menu from './components/common/Menu';
function App() {

  return (
    <>
      <Menu></Menu>
      <Container className='mainPage'></Container>
      <Footer></Footer>
    </>
  )
}

export default App

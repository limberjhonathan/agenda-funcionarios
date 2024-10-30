import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListEmployee from './pages/ListEmployee';
import Home from './pages/Home';
import EditEmployee from './pages/EditEmployee';
import Navbar from './components/NavBar';
import Footer from './components/Fotter';
import AddEmployee from './pages/AddEmployee';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route Component= { ListEmployee } path='/list' exact/>
          <Route Component= { EditEmployee } path='/edit' exact/>
          <Route Component= { Home } path='/' exact/>
          <Route Component= { AddEmployee } path='/addemployee' exact/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

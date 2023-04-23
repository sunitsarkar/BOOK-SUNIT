import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Book from './components/books';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Signup/>}/>
        <Route path='/books' element={<Book/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

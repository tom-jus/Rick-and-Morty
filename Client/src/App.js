import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Favorites from './components/Favorites/favorites'

function App () {

// useLocation() nos devuelve un objeto, dentro de el está la propiedad pathname, que nos dice donde estamos ubicados
// useNavigate() se utiliza para redireccionar como si fuera un link

const [characters, setCharacters] = useState([]);
const { pathname } = useLocation();

// URL Y API KEY que utilizamos antes de crear nuestro servidor
// const URL_BASE = "https://rickandmortyapi.com/api/character";
// const APY_KEY = "9cf76a7387bd.fae2d213a857832a51b4";

const [access, setAccess] = useState(false);
const username = "hola@hola";
const password = "hola";
const navigate = useNavigate();

const login = (userData) => {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
   }
};

useEffect(() => {
      !access && navigate('/');
   }, [access]);

  const onSearch = (id) => {
   fetch(`http://localhost:3001/rickandmorty/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
    const characterFiltered = characters.filter(character => character.id !== id)
    setCharacters(characterFiltered)
 };

  return (
     <div className='App'>
      {/* Si donde estamos ubicados es distinto de Login, mostrar siempre la navBar */}
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess}/>} 
   <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/favorites' element={<Favorites />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
  )
}

export default App;

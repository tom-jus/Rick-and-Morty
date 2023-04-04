import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'


// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };


function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
    const characterFiltered = characters.filter(character => character.id !== Number(id))
    setCharacters(characterFiltered)
 };


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
        <Cards
          characters={characters} onClose={onClose}
        />
    </div>
  )
}

export default App

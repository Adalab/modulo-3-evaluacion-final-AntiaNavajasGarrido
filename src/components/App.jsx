import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Cards from './Cards';
import Filters from './Filters/Filters';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import { fetchCharacters } from '../services/fetch';
import ls from '../services/localStorage';
import { Route, Routes } from 'react-router-dom';



function App() {

  const [characters, setCharacters] = useState([]);

  const [ filterName, setFilterName ] = useState ('');

  const [ filterHouse, setFilterHouse ] = useState ('');

  useEffect(() => {

    fetchCharacters()
      .then(responseData => {
        setCharacters(responseData);
        ls.set('characters', responseData);
      });

  }, []);

  const handleChangeFilterName = (name) => {
    setFilterName(name)
  };

  const handleChangeFilterHouse = (house) => {
    setFilterHouse(house)
  };


  const findCharacter = (id) => {
    characters.find(character => character.id === id)
  };

  const filteredCharacters = characters.filter(character => filterName === '' || character.name.toLowerCase() === filterName.toLowerCase());


  return (
    <div className='app'>
      <Header></Header>

      <Routes>

        <Route path='/' element={
          <>
              <Filters filterHouse= {filterHouse} handleChangeFilterHouse={handleChangeFilterHouse} filterName={filterName} handleChangeFilterName={handleChangeFilterName}/>
              <Cards characters={filteredCharacters} />
          </>
        } />

        <Route path='/user/:id' element={<CharacterDetail findCharacter={findCharacter} />} />

      </Routes>

      <footer>
        <small>&copy; 2024 Antia Navajas 🥒 promo Alice</small>
      </footer>
    </div>
  )
}

export default App;

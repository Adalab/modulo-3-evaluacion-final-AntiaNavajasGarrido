import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Cards from './Cards';
import Filters from './Filters';
import Header from './Header';

import {fetchCharacters}  from '../services/fetch';
import ls from '../services/localStorage';


function App() {

  const [characters, setCharacters] = useState([]);

  useEffect ( () => {

    fetchCharacters()
      .then(responseData => {
        setCharacters(responseData);
        ls.set('characters', responseData);
      });

  }, []);

   

  return (
    <div className='app'>
      <Header></Header>
      <Filters></Filters>
      <main>
        <section>
          <Cards characters={characters}></Cards>
        </section>
      </main>
      <footer>
        <small>&copy; 2024 Antia Navajas 🥒 promo Alice</small>
      </footer>
    </div>
  )
}

export default App;

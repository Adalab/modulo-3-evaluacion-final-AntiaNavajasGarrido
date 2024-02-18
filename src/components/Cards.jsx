import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Character from './Character';

function Cards(characters) {
    const renderCharacters = characters.map((character) => {
        return <li key={character.id} className='character__card'>
            <Link to={`/character/${character.id}`}>
                <Character character={character}/>
            </Link>
        </li>
    })

    return (
        <div>
            <ul className='chraracters__list'>
                {renderCharacters}
            </ul>
        </div>
    );
}

Cards.protoTypes = {
    characters: PropTypes.array
}

export default Cards;
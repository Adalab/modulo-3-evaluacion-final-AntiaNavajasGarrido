import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Character from './Character';

function Cards({characters}) {
    const renderCharacters = characters.map((eachCharacter) => {

       return ( <Link key={eachCharacter.id} to={`/character/${eachCharacter.id}`}>
            <li className='character__card'>
                <Character character={eachCharacter} />
            </li>
        </Link>

    )});

    return (
        <div>
            <ul className='chraracters__list'>
                {renderCharacters}
            </ul>
        </div>
    );
}

Cards.propTypes = {
    characters: PropTypes.array
}

export default Cards;
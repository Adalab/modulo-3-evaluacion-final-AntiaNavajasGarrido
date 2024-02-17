import PropTypes from 'prop-types'
import Character from './Character'

function Cards(characters) {
    console.log(characters);

    return (
        <div>
            <ul className='chraracters__list'>
                {characters.map((character, idx) =>
                    <li key={idx} className='character__card'>
                        <Character
                            character={character} />
                    </li>
                )}
            </ul>
        </div>
    );
}

Cards.protoTypes = {
    characters: PropTypes.array
}

export default Cards;
// import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

function CharacterDetail(findCharacter) {

    const params = useParams ();
    
    const character = findCharacter(params.id);

    return (
        <>
            <div className="character__img">
                <img src={character.image} alt="Foto del personaje" />
            </div>
            <div className="character__info">
                <h2 className="character__name">{character.name}</h2>
                <h3 className="character__race">{character.species}</h3>
                <Link to="/">Volver</Link>
            </div>
        </>
    );
}

// CharacterDetail.propTypes = {

// };

export default CharacterDetail;
import { Link } from "react-router-dom";

import '../scss/App.scss';


function Character(character) {

    return (
        <Link to={"/character/"+character.id}>
            <div className="character__img">
                <img src={character.image} alt="Foto del personaje"/>
            </div>
            <div className="character__info">
                <h2 className="character__name">{character.name}</h2>
                <h3 className="character__race">{character.species}</h3>
            </div>
        </Link>
    );
}



export default Character;
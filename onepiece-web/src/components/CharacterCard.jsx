import { Link } from "react-router-dom";


function CharacterCard({ character}) {
    return (
        <Link
            to={`/character/${character.id}`}
            className="bg-white rounded-lg shadow-md p-4 flex-col items-center hover:scale-105 transition-transform"
            >
            <img
                src={character.imagemUrl}
                alt={character.nome}
                className="w-24 h-24 object-cover rounded-full mb-2"
                />
                <h3 className="text-lg font-bold">{character.nome}</h3>
                <p className="text-sm text-gray-600">{character.cargo}</p>
                <span className="text-xs mt-1 px-2 py-1 rounded bg-gray-200">{character.bando}</span>
            </Link>
    );
}

export default CharacterCard;
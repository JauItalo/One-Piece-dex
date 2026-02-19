import { Link } from "react-router-dom";


const FALLBACK_AVATAR =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' rx='96' fill='%23e5e7eb'/%3E%3Cpath d='M96 96c17.673 0 32-14.327 32-32S113.673 32 96 32 64 46.327 64 64s14.327 32 32 32Zm0 16c-30.928 0-56 25.072-56 56h112c0-30.928-25.072-56-56-56Z' fill='%239ca3af'/%3E%3C/svg%3E";


function getBandoClass(bando) {
    switch (bando) {
        case "Chapéus de Palha":
            return "bg-red-100 text-red-800";
        case "Marinha":
            return "bg-blue-100 text-blue-800";
        case "Piratas do Barba Negra":
            return "bg-gray-100 text-gray-800";
        default:
            return "bg-white text-gray-800";
    }
}

function CharacterCard({ character }) {
    return (
        <Link
            to={`/character/${character.id}`}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center 
            hover:scale-105 hover:shadow-xl transition-transform transition-shadow 
            duration-300 ease-out animeate-fadeIn"
        >
            <img
                src={character.imagemUrl}
                alt={character.nome}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_AVATAR;
                }}
                className="w-24 h-24 object-cover rounded-full mb-2"
            />
            <h3 className="text-lg font-bold">{character.nome}</h3>

            {character.apelido ? (
                <p className="text-sm text-gray-500">{character.apelido}</p>
            ) : null}

            <p className="text-sm text-gray-600">{character.cargo}</p>

            <span
                className={`text-xs mt-2 px-2 py-1 rounded ${getBandoClass(character.bando)}`}
            >
                {character.bando}
            </span>
        </Link>
    );
}

export default CharacterCard;
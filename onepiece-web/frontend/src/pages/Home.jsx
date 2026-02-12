import CharacterCard from "../components/CharacterCard";
import { Characters } from "../data/characters";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to=blue-100 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white/90 rounded-2x1 shadow-xl mt-10 p-8">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600 drop-shadow">Catalogo One Piece
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
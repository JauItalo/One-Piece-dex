import { useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { Characters } from "../data/Characters";
import { getCharacters } from "../service/api";

function Home() {
    const [characters, setCharacters] = useState(Characters);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setUsingFallback(false);
                const data = await getCharacters();

                if (!cancelled) {
                    setCharacters(Array.isArray(data) ? data : Characters);
                }
            } catch {
                if (!cancelled) {
                    setCharacters(Characters);
                    setUsingFallback(true);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        load();
        return () => {
            cancelled = true;
        }
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-xl mt-10 p-8">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600 drop-shadow">Catalogo One Piece
                </h1>

                {loading ? (
                    <p className="text-center text-gray-500">Carregando...</p>
                ) : null}

                {!loading && usingFallback ? (
                    <p className="text-center text-gray-600 mt-2">API offline - Usando dados locais.</p>
                ) : null}


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
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Characters } from "../data/Characters";
import { getCharacters } from "../service/api";


function Home() {
    const [characters, setCharacters] = useState(Characters);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    const [search, setSearch] = useState("");
    const [bando, setBando] = useState("Todos");
    const [cargo, setCargo] = useState("Todos");
    const [visibleCount, setVisibleCount] = useState(9);

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


    const filtered = characters.filter((c) => {
        const matchName =
            c.nome.toLowerCase().includes(search.toLowerCase()) ||
            (c.apelido && c.apelido.toLowerCase().includes(search.toLowerCase()));
        const matchBando = bando === "Todos" || c.bando === bando;
        const matchCargo = cargo === "Todos" || c.cargo === cargo;
        return matchName && matchBando && matchCargo;
    });

    useEffect(() => {
        setVisibleCount(9);
    }, [search, bando, cargo]);

    const bandos = [
        "Todos",
        ...Array.from(new Set(characters.map((c) => c.bando))),
    ];

    const cargos = [
        "Todos",
        ...Array.from(new Set(characters.map((c) => c.cargo))),
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-xl mt-4 sm:mt-8 md:mt-10 p-2 sm:p-4 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-blue-600 drop-shadow">Catalogo One Piece</h1>

                <div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-6 w-full sm:flex-row sm:justify-center sm:items-center">
                    <input
                        type="text"
                        placeholder="Buscar personagem..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
                    />
                    <select
                        value={bando}
                        onChange={(e) => setBando(e.target.value)}
                        className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
                    >
                        {bandos.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                    <select
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-sm sm:text-base"
                    >
                        {cargos.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                {loading ? (
                    <div className="flex justify-center my-8">
                        <svg className="animate-spin h-8 w-8 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                    </div>
                ) : null}

                {!loading && usingFallback ? (
                    <div className="flex items-center justify-center text-yellow-700 bg-yellow-100 rounded-lg p-3 mt-2 gap-2">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                        </svg>
                        <span>Não foi possível conectar à API. Mostrando dados locais.</span>
                    </div>
                ) : null}


                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {loading ? (
                        Array.from({ length: 9 }).map((_, idx) => (
                            <div key={idx} className="bg-gray-200 rounded-lg p-4 flex flex-col items-center animate-pulse h-48">
                                <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
                                <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                                <div className="h-3 w-16 bg-gray-300 rounded mb-1"></div>
                                <div className="h-3 w-20 bg-gray-200 rounded"></div>
                            </div>
                        ))
                    ) : filtered.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-8">
                            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l9-5m-9 5l-9-5" />
                            </svg>
                            <span className="text-gray-500 text-lg">Nenhum personagem encontrado.</span>
                        </div>
                    ) : (
                        filtered.slice(0, visibleCount).map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))
                    )}
                </div>
                {visibleCount < filtered.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 9)}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow 
                            hover:bg-blue-600 transition-colors duration-300 active:scale-95"
                        >
                            Carregar mais
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
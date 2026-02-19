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

    // Sempre que o filtro mudar, reseta o visibleCount para 9
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
            <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-xl mt-10 p-8">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600 drop-shadow">Catalogo One Piece
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Buscar personagem..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <select
                        value={bando}
                        onChange={(e) => setBando(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {bandos.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                    <select
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {cargos.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                {loading ? (
                    <p className="text-center text-gray-500">Carregando...</p>
                ) : null}

                {!loading && usingFallback ? (
                    <p className="text-center text-gray-600 mt-2">API offline - Usando dados locais.</p>
                ) : null}


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.length === 0 ? (
                        <p className="col-span-3 text-center text-gray-500">Nenhum personagem encontrado.</p>
                    ) : (
                        filtered.slice(0, visibleCount).map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))
                    )}
                </div>
                {/* Botão Carregar mais */}
                {visibleCount < filtered.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 9)}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition"
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
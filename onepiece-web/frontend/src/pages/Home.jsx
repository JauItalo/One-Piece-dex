import { useEffect, useState } from "react";
import Button from "../components/Button";
import CharacterCard from "../components/CharacterCard";
import CharacterFilter from "../components/CharacterFilter";
import Loader from "../components/Loader";
import { Characters } from "../data/Characters";
import { getCharactersPaginated } from "../service/api";

function Home({ theme, onToggleTheme }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    const [visibleCount, setVisibleCount] = useState(9);

    const [search, setSearch] = useState("");
    const [bando, setBando] = useState("Todos");
    const [cargo, setCargo] = useState("Todos");

    useEffect(() => {
        loadAllCharacters();
    }, []);

    async function loadAllCharacters() {
        setLoading(true);
        setVisibleCount(9);
        try {
            setUsingFallback(false);

            const pageSize = 50;
            const maxPages = 50;
            const all = [];
            let currentPage = 0;

            while (true) {
                const data = await getCharactersPaginated(currentPage, pageSize);
                all.push(...(data?.content ?? []));

                const totalPages = Number(data?.totalPages ?? 1);
                if (currentPage + 1 >= totalPages) break;

                currentPage += 1;
                if (currentPage >= maxPages) break;
            }

            setCharacters(all);
        } catch {
            setUsingFallback(true);
            setCharacters(Characters);
        } finally {
            setLoading(false);
        }
    }


    const filtered = characters.filter((c) => {
        const matchName =
            c.nome.toLowerCase().includes(search.toLowerCase()) ||
            (c.apelido && c.apelido.toLowerCase().includes(search.toLowerCase()));
        const matchBando = bando === "Todos" || c.bando === bando;
        const matchCargo = cargo === "Todos" || c.cargo === cargo;
        return matchName && matchBando && matchCargo;
    });

    // Quando filtros mudam, volta a exibir do começo
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

    const visible = filtered.slice(0, visibleCount);


    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-xl mt-4 sm:mt-8 md:mt-10 p-2 sm:p-4 md:p-8 dark:text-slate-100">
                <div className="flex items-center mb-6 relative">
                    <div className="flex-1 flex justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-300 drop-shadow">Catalogo One Piece</h1>
                    </div>
                    <div className="absolute right-0">
                        <Button
                            onClick={onToggleTheme}
                            className="px-3 py-2 text-xs sm:text-sm"
                        >
                            {theme === "dark" ? "Light" : "Dark"}
                        </Button>
                    </div>
                </div>
                <CharacterFilter
                  search={search}
                  setSearch={setSearch}
                  bando={bando}
                  setBando={setBando}
                  cargo={cargo}
                  setCargo={setCargo}
                  bandos={bandos}
                  cargos={cargos}
                />
                {loading ? <Loader /> : null}
                {!loading && usingFallback ? (
                    <div className="flex items-center justify-center text-yellow-700 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-200 rounded-lg p-3 mt-2 gap-2">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                        </svg>
                        <span>Não foi possível conectar à API. Mostrando dados locais.</span>
                    </div>
                ) : null}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {loading ? (
                        Array.from({ length: 9 }).map((_, idx) => (
                            <div key={idx} className="bg-gray-200 dark:bg-slate-800 rounded-lg p-4 flex flex-col items-center animate-pulse h-48">
                                <div className="w-20 h-20 bg-gray-300 dark:bg-slate-700 rounded-full mb-2"></div>
                                <div className="h-4 w-24 bg-gray-300 dark:bg-slate-700 rounded mb-1"></div>
                                <div className="h-3 w-16 bg-gray-300 dark:bg-slate-700 rounded mb-1"></div>
                                <div className="h-3 w-20 bg-gray-200 dark:bg-slate-800 rounded"></div>
                            </div>
                        ))
                    ) : filtered.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-8">
                            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l9-5m-9 5l-9-5" />
                            </svg>
                            <span className="text-gray-500 dark:text-slate-300 text-lg">Nenhum personagem encontrado.</span>
                        </div>
                    ) : (
                        visible.map((character) => (
                            <CharacterCard key={character.id || character._id} character={character} />
                        ))
                    )}
                </div>
                {!loading && visibleCount < filtered.length && (
                    <div className="flex justify-center mt-6">
                        <Button onClick={() => setVisibleCount((n) => n + 9)}>
                            Carregar mais
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
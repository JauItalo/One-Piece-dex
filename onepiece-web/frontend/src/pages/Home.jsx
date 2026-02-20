import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CharacterCard from "../components/CharacterCard";
import CharacterFilter from "../components/CharacterFilter";
import Loader from "../components/Loader";
import { getCharactersPaginated } from "../service/api";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    const [search, setSearch] = useState("");
    const [bando, setBando] = useState("Todos");
    const [cargo, setCargo] = useState("Todos");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        loadCharacters(0);
    }, []);

    async function loadCharacters(pageToLoad) {
        setLoading(true);
        try {
            const data = await getCharactersPaginated(pageToLoad, 9);
            if (pageToLoad === 0) {
                setCharacters(data.content);
            } else {
                setCharacters((prev) => [...prev, ...data.content]);
            }
            setPage(data.number);
            setTotalPages(data.totalPages);
        } catch {
            setUsingFallback(true);
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

    // Quando filtros mudam, recarrega a primeira página
    useEffect(() => {
        loadCharacters(0);
    }, [search, bando, cargo]);

    const bandos = [
        "Todos",
        ...Array.from(new Set(characters.map((c) => c.bando))),
    ];

    const cargos = [
        "Todos",
        ...Array.from(new Set(characters.map((c) => c.cargo))),
    ];


    // ...existing code...
    // Importar o formulário
    // import CreateCharacterForm from "../components/CreateCharacterForm";
    // Adicionar função para atualizar lista após criar
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-xl mt-4 sm:mt-8 md:mt-10 p-2 sm:p-4 md:p-8">
                <div className="flex items-center mb-6 relative">
                    <div className="flex-1 flex justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 drop-shadow">Catalogo One Piece</h1>
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
                        filtered.map((character) => (
                            <CharacterCard key={character.id || character._id} character={character} />
                        ))
                    )}
                </div>
                {page + 1 < totalPages && (
                    <div className="flex justify-center mt-6">
                        <Button onClick={() => loadCharacters(page + 1)}>
                            Carregar mais
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
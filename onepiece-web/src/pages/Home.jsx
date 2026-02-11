import CharacterCard from "../components/CharacterCard";

const personagensFake = [
    {
        id: 1,
        nome: "Monkey D. Luffy",
        cargo: "Capitão",
        bando: "Chapéus de Palha",
        imagemUrl: "https://static.wikia.nocookie.net/onepiece/images/6/6f/Luffy_Anime_Infobox.png",
    },
    {
        id: 2,
        nome: "Roronoa Zoro",
        cargo: "Espadachim",
        bando: "Chapéus de Palha",
        imagemUrl: "https://static.wikia.nocookie.net/onepiece/images/5/5c/Zoro_Anime_Infobox.png",
    },


];

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Catalogo One Piece</h1>
            <p>Bem-vindo à enciclopédia de personagens de One Piece!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {personagensFake.map((personagem) => (
                    <CharacterCard key={personagem.id} character={personagem} />
                ))}
            </div>
        </div>
    );
}

export default Home;
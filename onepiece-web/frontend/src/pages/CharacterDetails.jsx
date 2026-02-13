import { useParams, Link } from "react-router-dom";
import { Characters } from "../data/Characters";


const FALLBACK_AVATAR =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' rx='96' fill='%23e5e7eb'/%3E%3Cpath d='M96 96c17.673 0 32-14.327 32-32S113.673 32 96 32 64 46.327 64 64s14.327 32 32 32Zm0 16c-30.928 0-56 25.072-56 56h112c0-30.928-25.072-56-56-56Z' fill='%239ca3af'/%3E%3C/svg%3E";

function CharacterDetails() {
    const { id } = useParams();
    const personagem = Characters.find((p) => p.id === Number(id));


    if (!personagem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 flex flex-col items-center">
                <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-xl mt-10 p-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Personagem não encontrado</h1>
                    <Link to="/" className="text-blue-600 underline">
                        Voltar para a Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-blue-100 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-xl mt-10 p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={personagem.imagemUrl}
                            alt={personagem.nome}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = FALLBACK_AVATAR;
                            }}
                            className="w-44 h-44 object-cover rounded-full"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            {personagem.nome}
                        </h1>

                        {personagem.apelido ? (
                            <p className="text-gray-600 mt-1">{personagem.apelido}</p>
                        ) : null}

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-white rounded-lg border border-gray-200 p-3">
                                <p className="text-xs text-gray-500">Bando</p>
                                <p className="font-semibold text-gray-900">{personagem.bando}</p>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-3">
                                <p className="text-xs text-gray-500">Cargo</p>
                                <p className="font-semibold text-gray-900">
                                    {personagem.cargo}
                                </p>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-3">
                                <p className="text-xs text-gray-500">Recompensa</p>
                                <p className="font-semibold text-gray-900">
                                    {personagem.recompensa}
                                </p>
                            </div>


                            <div className="bg-white rounded-lg border border-gray-200 p-3">
                                <p className="text-xs text-gray-500">Fruta do Diabo</p>
                                <p className="font-semibold text-gray-900">
                                    {personagem.frutaDoDiabo}
                                </p>
                            </div>
                        </div>


                        <Link to="/" className="inline-block mt-6 text-blue-600 underline">Voltar para a Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails;
import {useParams} from "react-router-dom";


function CharacterDetails() {
    const { id } = useParams();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Detalhes do Personagem</h1>
            <p>ID do personagem: {id}</p>
        </div>
    );
}

export default CharacterDetails;
import { useParams } from 'react-router-dom'
import locations from '../../data/locations'

export function LocationInfo() {
    const { id } = useParams(); // Récupérer le paramètre d'URL
    const locationId = parseInt(id); // Convertir en nombre entier

    // Rechercher les données de la location correspondant à l'ID
    const locationData = locations.find(location => location.id === locationId);

    // Vérifier si la location existe
    if (!locationData) {
        return <div>Location introuvable</div>;
    }

    // Afficher les données de la location
    return (
        <div>
            <h1>Informations sur la location :</h1>
            <p>Nom : {locationData.name}</p>
            <p>Lieu : {locationData.location}</p>
            {/* Afficher d'autres informations ici */}
        </div>
    );
}
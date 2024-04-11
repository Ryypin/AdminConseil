import Subtitle from "../components/Subtitle"
import Filter from "../components/Filter"

export function SectionTopLoc() {

    const filters = ['Nature', 'Ville', 'Plage'];

    const images = [
        { id: 1, url: 'nature.jpg', alt: 'Nature', category: 'Nature' },
        { id: 2, url: 'city.jpg', alt: 'Ville', category: 'Ville' },
        { id: 3, url: 'beach.jpg', alt: 'Plage', category: 'Plage' },
        // Ajoutez d'autres images avec leurs catégories
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col items-center">
                        <Subtitle text="Nos meilleures locations" type="normal" />
                    </div>
                    <Filter filters={filters} images={images} />
                </div>
            </section>
        </>
    )
}
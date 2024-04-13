import Subtitle from "../components/Subtitle"
import Filter from "../components/Filter"
import locations from '../../data/locations'

export function SectionTopLoc() {

    const filters = ['2/4 pers.', '6 pers.', '+10 pers.'];

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col items-center">
                        <Subtitle text="Nos meilleures locations" type="normal" />
                    </div>
                    <Filter filters={filters} images={locations} />
                </div>
            </section>
        </>
    )
}
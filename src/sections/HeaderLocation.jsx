import LeftImg from '../assets/images/montage.png';

export function HeaderLocation() {
    return (
        <>
            <section className="!pt-16 md:!pt-32 overflow-visible relative">
                <div className="container flex flex-row">
                    <img src={LeftImg} className="absolute hidden top-2 left-0 max-w-[400px] md:block md:-top-24 md:-left-60 xl:-top-40 xl:-left-40 md:max-w-[600px] xl:max-w-[800px]" alt="" />
                    <div className="ml-auto md:basis-7/12 relative z-10">
                        <h1 className="h1">Explorez nos locations disponibles</h1>
                        <div className="bg-secondary w-20 h-1 rounded mb-7"></div>
                        <div className="content mb-6">
                            <p>
                                Entrez dans notre univers des locations disponibles. Que vous cherchiez un lieu pour des vacances reposantes, un séjour d'affaires pratique ou une escapade romantique, vous êtes au bon endroit. Explorez notre sélection de locations, allant des appartements urbains aux maisons de vacances pittoresques, et trouvez l'endroit idéal pour votre prochaine aventure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
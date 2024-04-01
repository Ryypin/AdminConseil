import Button from "../components/Button";
import RightImg from '../assets/images/round_header_img.png';

export function HeaderHome() {
    return (
        <>
            <section className="!pt-16 md:!pt-32 overflow-hidden">
                <div className="container">
                    <img src={RightImg} className="absolute hidden top-2 right-0 max-w-[400px] md:block md:-top-24 md:-right-40 xl:-top-52 xl:-right-56 md:max-w-[650px] xl:max-w-max" alt="" />
                    <div className="flex flex-row items-start relative z-10">
                        <div className="basis-7/12">
                            <h1 className="h1">Bienvenue sur AdminConseil, </h1>
                            <div className="content mb-6">
                                <p>
                                    votre partenaire de confiance pour la gestion de locations saisonnières au cœur des Baronnies provençales.
                                </p>
                                <p>
                                    Basés à Sainte Jalle, dans la magnifique vallée de l’Ennuyé, nous vous proposons une collaboration adaptée à vos besoins de la gestion de votre bien à un accompagnement dans la mise en place de votre projet de location.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button text="Contactez-nous" type="cta"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
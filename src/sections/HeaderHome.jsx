import ContactButton from "../components/ContactButton";
import RightImg from '../assets/images/round_header_img.png';

export function HeaderHome() {
    return (
        <>
            <section className="!pt-8 md:!pt-10 overflow-hidden bg-none md:bg-[url(../src/assets/images/elipse_secondary.png)] bg-no-repeat bg-[left_calc(15%-500px)_bottom] bg-[length:350px]">
                <div className="container">
                    <div className="flex flex-row-reverse items-center relative md:gap-8 z-10">
                        <div className="md:basis-5/12 max-md:hidden">
                            <img src={RightImg} className="max-w-[500px] ml-auto" alt="" />
                        </div>
                        <div className="md:basis-7/12">
                            <h1 className="h1">Bienvenue sur AdminConseil, </h1>
                            <div className="bg-secondary w-20 h-1 rounded mb-7"></div>
                            <div className="content mb-6">
                                <p>
                                    votre partenaire de confiance pour la gestion de locations saisonnières au cœur des Baronnies provençales.
                                </p>
                                <p>
                                    Basés à Sainte Jalle, dans la magnifique vallée de l’Ennuyé, nous vous proposons une collaboration adaptée à vos besoins de la gestion de votre bien à un accompagnement dans la mise en place de votre projet de location.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <ContactButton text="Contactez-nous" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
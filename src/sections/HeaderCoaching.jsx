import FaceImg from '../assets/images/face.png'
import ContactButton from "../components/ContactButton";

export function HeaderCoaching() {
    return (
        <>
            <section className="!pt-8 md:!pt-10 overflow-visible relative bg-none md:bg-[url(../src/assets/images/elipse_primary.png)] bg-no-repeat bg-[right_calc(17%-500px)_bottom] bg-[length:350px]">
                <div className="container flex flex-row md:gap-8">
                    <div className="md:basis-5/12 max-md:hidden">
                        <img src={FaceImg} className="max-w-[500px]" alt="" />
                    </div>
                    <div className="ml-auto md:basis-7/12 relative z-10">
                        <h1 className="h1">Coaching</h1>
                        <div className="bg-secondary w-20 h-1 rounded mb-7"></div>
                        <div className="content mb-6">
                            <p>
                                Envisagez-vous de vous lancer dans la location saisonnière sans trop savoir par où commencer ?
                            </p>
                            <p className="!mb-2">
                                Recherchez-vous des réponses à des questions cruciales telles que :
                            </p>
                            <ul className="pl-4 mb-4 checkList">
                                <li>comment aménager votre logement, quels sont les éléments/mobilier à prévoir,</li>
                                <li>comment paramétrer et utiliser les plateformes de réservation,</li>
                                <li>comment évaluer la rentabilité de votre projet,</li>
                                <li>comment gérer une location quand on ne réside sur place,</li>
                                <li>comment rédiger une annonce attractive…</li>
                            </ul>
                            <p>Ne vous inquiétez pas, vous n'êtes pas seul dans cette aventure !</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ContactButton text="Contactez-nous" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
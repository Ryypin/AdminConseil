import Subtitle from "../components/Subtitle"
import FaceImg from '../assets/images/face.png'

export function SectionWho() {
    return (
        <>
            <section className="px-0">
                <div className="py-16 px-4 md:px-0">
                    <div className="container">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                            <div className="basis-4/12">
                                <img src={FaceImg} alt="" />
                            </div>
                            <div className="basis-8/12">
                                <Subtitle text="Qui suis-je ?" type="normal" />
                                <div className="content text-dark">
                                    <p>Originaire de Belgique, j'ai posé mes valises à Sainte Jalle il y aura bientôt 10 ans. Mon parcours dans le domaine de l'immobilier a débuté par la vente, où j'ai rapidement acquis une solide expérience. Une évolution naturelle m'a conduite vers un domaine qui me passionne tout particulièrement : la gestion de locations saisonnières.</p>
                                    <p>Au fil du temps, de nombreux acquéreurs ont en effet fait appel à moi pour gérer leurs biens en location saisonnière, la plupart d'entre eux n'étant pas résidents dans la région.</p>
                                    <p>En 2017, j’ai créé AdminConseil. Au départ, mon objectif était de fournir une assistance administrative aux artisans, qui souvent se trouvent démunis face à la gestion des formalités administratives. Cependant, mon activité a évolué pour se concentrer davantage sur le secteur de l'immobilier, un domaine qui me passionne.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}